import { Router } from 'express';

const appRouter:any = Router()

//Livros
appRouter.get('/')
appRouter.get('/:id')
appRouter.post('/')
appRouter.patch('/:id')
appRouter.delete('/:id')

//Editoras
appRouter.get('/editoras')
appRouter.get('/editoras/:id')
appRouter.post('/editoras')
appRouter.patch('/editoras/:id')
appRouter.delete('/editoras/:id')

export { appRouter }