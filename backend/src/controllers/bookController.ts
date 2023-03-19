import { Books } from "../models/bookModel"

const getAllBooks = async (req:any, res: any) => {
    const books = await Books.findAll()
    res.status(200).json(books)
}

const getSpecificBook = async(req:any, res:any) => {
    const book = await Books.findAll({
        where: {
            titulo: req.params.titulo
        }
    })
    res.status(200).json(book)
}

const createNewBook = async(req:any, res:any) => {
    const book = req.body
    const result = await Books.create(book)
    res.status(201).json(result)
}

const updateBook = async(req:any, res:any) => {
    const book = req.params.id
    await Books.update(req.body, {
        where: {
            id: book
        }
    })
    res.status(200)
}

export {getAllBooks, getSpecificBook, createNewBook, updateBook}