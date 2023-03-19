import { Books } from "../models/bookModel"

const getAllBooks = async (req:any, res: any) => {
    const books = await Books.findAll()
    res.status(201).json(books)
}

const getEspecificBook = async(req:any, res:any) => {
    const book = await Books.findAll({
        where: {
            titulo: req.params.titulo
        }
    })
    res.status(201).json(book)
}

export {getAllBooks, getEspecificBook}