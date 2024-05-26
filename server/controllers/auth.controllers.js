import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js';
import User from '../models/user.model.js';

export const signup = async (req, res) => {
    try {

        const { fullName, username, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            console.log("Passwords don't match");
            return res.status(400).json({
                error: "Passwords don't match"
            })
        }

        const user = await User.findOne({ username })

        if (user) {
            console.log("Username already used")
            return res.status(400).json({
                error: "Username already used"
            })
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);



        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender
        })

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)

            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                gender: newUser.gender,
            })
        }

    } catch (error) {
        console.log("Error in signup controller:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username })

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect) {
            console.log("Invalid credentials")
            return res.status(400).json({
                error: "Invalid credentials"
            })
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username
        })

    } catch (error) {
        console.log("Error in login controller:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const logout = (req, res) => {
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