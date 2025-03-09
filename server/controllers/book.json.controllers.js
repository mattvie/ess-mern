import fs from 'fs'
import path from 'path'

export const getAllJson = (req, res) => {
    try {

        const data = JSON.parse(fs.readFileSync(path.resolve('./samples/books.json'), 'utf-8'))

        if (!data) {
            console.log("Empty bookstore")
            return res.status(200).json({})
        }

        res.status(200).json(data)

    } catch (error) {
        console.log("Error in getAll:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const getBookByIdJson = (req, res) => {
    try {

        const parser = JSON.parse(fs.readFileSync(path.resolve('./samples/books.json'), 'utf-8'))
        const data = parser.filter(element => element.id === req.params.bookId)

        res.status(200).json(data)

    } catch (error) {
        console.log("Error in getBookById:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }

}

export const writeBookJson = (req, res) => {
    try {

        var data = JSON.parse(fs.readFileSync(path.resolve('./samples/books.json'), 'utf-8'))
        const id = data.length + 1

        data.push({
            name: req.body.name,
            author: req.body.author,
            id: JSON.stringify(id),
            description: req.body.description
        })

        fs.writeFileSync(path.resolve('./samples/books.json'), JSON.stringify(data, null, 2))

        res.status(201).json(data)

    } catch (error) {
        console.log("Error in writeBook:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const updateBookJson = (req, res) => {
    try {

        var data = JSON.parse(fs.readFileSync(path.resolve('./samples/books.json'), 'utf-8'))

        data[data.findIndex(element => element.id === req.body.id)] = {
            name: req.body.name,
            author: req.body.author,
            id: req.body.id,
            description: req.body.description
        }

        fs.writeFileSync(path.resolve('./samples/books.json'), JSON.stringify(data, null, 2))

        res.status(200).json(data)

    } catch (error) {
        console.log("Error in updateBookJson:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const deleteBookJson = (req, res) => {
    try {

        var data = JSON.parse(fs.readFileSync(path.resolve('./samples/books.json'), 'utf-8'))

        data = data.filter(element => element.id != req.body.id)

        // Index Handling

        fs.writeFileSync(path.resolve('./samples/books.json'), JSON.stringify(data, null, 2))

        res.status(200).json(data)

    } catch (error) {
        console.log("Error in deleteBook:", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}