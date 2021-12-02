import UserModel from '../models/UserModel'
import Logger from '../utils/Logger'
import {Response, Request} from 'express'
import StatusCode from '../configuration/StatusCode'
import {User} from '../utils/interface/Interface'

const createUser = async (req: Request, res: Response) => {
    Logger.http(req.body)
    const {username, password, email}: User = req.body
    const user = new UserModel({
        username,
        password,
        email
    })
    Logger.debug(user)
    try {
        const response = await user.save()
        Logger.debug(response)
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({message: error.message})
    }
}

const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await UserModel.find()
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const getUserWithId = async (req: Request, res: Response) => {
    try {
        const {userId} = req.params
        Logger.http(`ID: ${userId}`)
        const response = await UserModel.findById(userId)
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to retrieve user with ID: ${req.params.userId}`,
            error: error.message
        })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const {userId} = req.params
        Logger.http(`ID: ${userId}`)
        const {username, password, email} = req.body
        Logger.http(`Body is: ${req.body}`)
        const response = await UserModel.findByIdAndUpdate(userId, {
            username,
            password,
            email
        }, {new: true})
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to update user with ID: ${req.params.userId}`,
            error: error.message
        })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const {userId} = req.params
        const response = await UserModel.findByIdAndDelete(userId)
        res.status(StatusCode.OK).send({
            message: `Successfully deleted user with ID: ${userId}`
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to delete user with ID: ${req.params.userId}`,
            error: error.message
        })
    }
}


export default {
    createUser,
    getUsers,
    getUserWithId,
    updateUser,
    deleteUser
}