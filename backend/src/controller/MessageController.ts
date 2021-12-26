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

const getMessageById = async (req: Request, res: Response) => {
    try {
        const {messageId} = req.params
        Logger.http(`${messageId}`)
        const response = await MessageModel.findById(messageId)
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error while trying to retrieve message with ID: ${req.params.messageId}`,
                error: error.message
            })
    }
}

const updateMessage = async (req: Request, res: Response) => {
    try {
        const {messageId} = req.params
        Logger.http(messageId)
        let {subject, privateMessage}: Message = req.body
        Logger.http(`${req.body}`)
        if (!req.body) {
            res.status(StatusCode.BAD_REQUEST)
                .send({message: `Can't update with empty values`})
        }
        const response = await MessageModel.findByIdAndUpdate(messageId, {
            subject,
            privateMessage
        }, {new: true})
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error while trying to update message with ID ${req.params.messageId}`,
                error: error.message
            })
    }
}

const deleteMessage = async (req: Request, res: Response) => {
    try {
        const {messageId} = req.params
        const response = await MessageModel.findByIdAndDelete(messageId)
        Logger.http(response)
        res.status(StatusCode.OK).send({
            message: `Successfully deleted message with ID: ${messageId}`
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error while trying to delete message with ID: ${req.params.messageId}`,
                error: error.message
            })
    }
}

export default {
    createMessage,
    getMessages,
    getMessageById,
    updateMessage,
    deleteMessage
}