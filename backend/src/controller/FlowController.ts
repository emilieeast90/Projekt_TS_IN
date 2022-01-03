import FlowModel from '../models/FlowModel'
import Logger from '../utils/Logger'
import {Request, Response} from 'express'
import {Flow} from '../utils/interface/Interface'
import StatusCode from '../configuration/StatusCode'

const createFlow = async (req: Request, res: Response) => {
    Logger.http(req.body)
    let {username, post}: Flow = req.body
    const flow = new FlowModel({
        username,
        post
    })
    Logger.debug(flow)
    try {
        const response = await flow.save()
        Logger.debug(response)
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({message: error.message})
    }
}

const getFlow = async (req: Request, res: Response) => {
    try {
        const response = await FlowModel.find()
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({message: error.message})
    }
}

const getFlowById = async (req: Request, res: Response) => {
    try {
        const {flowId} = req.params
        Logger.http(`${flowId}`)
        const response = await FlowModel.findById(flowId)
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error while trying to retrieve flow with ID: ${req.params.messageId}`,
                error: error.message
            })
    }
}

const updateFlow = async (req: Request, res: Response) => {
    try {
        const {flowId} = req.params
        Logger.http(flowId)
        let {username, post}: Flow = req.body
        Logger.http(`${req.body}`)
        if (!req.body) {
            res.status(StatusCode.BAD_REQUEST)
                .send({message: `Can't update with empty values`})
        }
        const response = await FlowModel.findByIdAndUpdate(flowId, {
            username,
            post
        }, {new: true})
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error while trying to update flow with ID ${req.params.messageId}`,
                error: error.message
            })
    }
}

const deleteFlow = async (req: Request, res: Response) => {
    try {
        const {flowId} = req.params
        const response = await FlowModel.findByIdAndDelete(flowId)
        if (!response) {
            res.status(StatusCode.NOT_FOUND).send({
                message: 'Not found'
            })
        }
        Logger.http(response)
        res.status(StatusCode.OK).send({
            message: `Successfully deleted flow with ID: ${flowId}`
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error while trying to delete flow with ID: ${req.params.flowId}`,
                error: error.message
            })
    }
}

export default {
    createFlow,
    getFlow,
    getFlowById,
    updateFlow,
    deleteFlow
}