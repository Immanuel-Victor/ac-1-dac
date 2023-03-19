import { Publisher } from "../models/publisherModel"

const getAllPublishers = async (req:any, res: any) => {
    const publishers = await Publisher.findAll()
    res.status(201).json(publishers)
}

const getEspecificPublisher = async(req:any, res:any) => {
    const publisher = await Publisher.findAll({
        where: {
            localDeOrigem: req.params.localDeOrigem
        }
    })
    res.status(201).json(publisher)
}

export {getAllPublishers, getEspecificPublisher}