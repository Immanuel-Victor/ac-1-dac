import { Router } from 'express';
import { createNewBook, getAllBooks, getSpecificBook, updateBook } from '../controllers/bookController';
import { createNewPublisher, getAllPublishers, getSpecificPublisher, updatePublisher } from '../controllers/publisherController';

const appRouter:any = Router()

//Livros
appRouter.get('/livros', getAllBooks)
appRouter.get('/livros/:titulo', getSpecificBook)
appRouter.post('/livros', createNewBook)
appRouter.patch('/livros/:id', updateBook)

//Editoras
appRouter.get('/editoras', getAllPublishers)
appRouter.get('/editoras/:localDeOrigem', getSpecificPublisher)
appRouter.post('/editoras', createNewPublisher)
appRouter.patch('/editoras/:id', updatePublisher)

export { appRouter }