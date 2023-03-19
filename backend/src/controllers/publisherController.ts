import { Publishers } from "../models/publisherModel"

const getAllPublishers = async (req:any, res: any) => {
    const publishers = await Publishers.findAll()
    res.status(200).json(publishers)
}

const getSpecificPublisher = async(req:any, res:any) => {
    const publisher = await Publishers.findAll({
        where: {
            localDeOrigem: req.params.localDeOrigem
        }
    })
    res.status(200).json(publisher)
}

const createNewPublisher = async(req:any, res:any) => {
    const publisher = req.body
    const result = await Publishers.create(publisher)
    res.status(201).json(result)
}

const updatePublisher = async(req:any, res:any) => {
    const publisher = req.params.id
    await Publishers.update(req.body, {
        where: {
            id: publisher
        },
    })
    res.status(200)
}

export {getAllPublishers, getSpecificPublisher, createNewPublisher, updatePublisher}