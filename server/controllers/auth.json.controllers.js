import fs from 'fs'
import path from 'path'
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signupJson = async (req, res) => {
    try {

        const { fullName, username, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            console.log("Passwords don't match");
            return res.status(400).json({
                error: "Passwords don't match"
            })
        }

        var data = JSON.parse(fs.readFileSync(path.resolve('./samples/users.json'), 'utf8'))

        const user = data.filter(element => element.username === username)
        if (user && user.length > 0) {
            console.log("Username already used")
            return res.status(400).json({
                error: "Username already used"
            })
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const id = JSON.stringify(data.length + 1)

        const newUser = {
            id,
            fullName,
            username,
            password: hashedPassword,
            gender
        }

        generateTokenAndSetCookie(id, res)

        data.push(newUser)

        fs.writeFileSync(path.resolve('./samples/users.json'), JSON.stringify(data, null, 2))

        res.status(201).json({
            id,
            fullName,
            username,
            gender,
        })

    } catch (error) {
        console.log("Error in signup controller:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const loginJson = async (req, res) => {
    try {
        const { username, password } = req.body;
        var data = JSON.parse(fs.readFileSync(path.resolve('./samples/users.json'), 'utf8'))
        var data = data.find(({ username }) => username === req.body.username)
        const isPasswordCorrect = await bcrypt.compare(password, data.password)

        if (!data || !isPasswordCorrect) {
            console.log("Invalid credentials")
            return res.status(400).json({
                error: "Invalid credentials"
            })
        }

        generateTokenAndSetCookie(data.id, res)

        res.status(200).json({
            id: data.id,
            fullName: data.fullName,
            username: data.username
        })

    } catch (error) {
        console.log("Error in login controller:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const logoutJson = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })

        res.status(200).json({
            message: "Logged out successfully"
        })

    } catch (error) {
        console.log("Error in logout controller:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}