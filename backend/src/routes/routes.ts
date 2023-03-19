import { Router } from 'express';
import { getAllBooks } from '../controllers/bookController';

const appRouter:any = Router()

//Livros
appRouter.get('/', getAllBooks)
appRouter.get('/:titulo')
appRouter.post('/')
appRouter.patch('/:id')

//Editoras
appRouter.get('/editoras')
appRouter.get('/editoras/:localDeOrigem')
appRouter.post('/editoras')
appRouter.patch('/editoras/:id')

export { appRouter }