import MessageModel from '../models/MessageModel'
import Logger from '../utils/Logger'
import {Request, Response} from 'express'
import {Message} from '../utils/interface/Interface'
import StatusCode from '../configuration/StatusCode'

const createMessage = async (req: Request, res: Response) => {
    Logger.http(req.body)
    let {subject, privateMessage}: Message = req.body
    const privateMessages = new MessageModel({
        subject,
        privateMessage
    })
    Logger.debug(privateMessages)
    try {
        const response = await privateMessages.save()
        Logger.debug(response)
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({message: error.message})
    }
}

const getMessages = async (req: Request, res: Response) => {
    try {
        const response = await MessageModel.find()
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({message: error.message})
    }
}