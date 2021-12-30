import UserModel from '../models/UserModel'
import Logger from '../utils/Logger'
import {Response, Request} from 'express'
import StatusCode from '../configuration/StatusCode'
import {SearchUser, User} from '../utils/interface/Interface'
import bcrypt from 'bcrypt'

const saltRounds: number = 10
const encryptPassword = async (password: string) => {
    let newPassword: string = ''
    await bcrypt.hash(password, saltRounds)
        .then((hash) => {
            newPassword = hash
        })
    return newPassword
}

const createUser = async (req: Request, res: Response) => {
    Logger.http(req.body)
    let {username, password, email}: User = req.body
    password = await encryptPassword(password)
    Logger.warn(`hashed password is ${password}`)
    const user = new UserModel({
        username,
        password,
        email
    })
    Logger.debug(user)
    try {
        const response = await user.save()
        Logger.debug(response)
        res.status(StatusCode.CREATED).send({message: `Account Created!`
    })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({message: error.message})
    }
}

interface VerifyUser {
    message: boolean
}

const verifyUser = async (req: Request, res: Response) => {
    try {
        // Query
        const {username, password} = req.body
        const query: SearchUser = {username: String(username)}
        const dbQuery = await UserModel.find(query)
        Logger.debug(dbQuery)

        // Verify password in bcrypt
        let response: VerifyUser
        await bcrypt.compare(String(password), dbQuery[0].password)
            .then((result) => {
                Logger.debug('bcrypt')
                response = {
                    message: result
                }
            })
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to retrieve user with username: ${req.query.username}`,
            error: error.message
        })
    }
}

const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await UserModel.find()
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({message: error.message})
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
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error while trying to retrieve user with ID: ${req.params.userId}`,
                error: error.message
            })
    }
}

const getUserWithName = async (req: Request, res: Response) => {
    try {
        Logger.debug(`${req.query.username}`)
        const {username} = req.query
        const query: SearchUser = {username: String(username)}
        Logger.http(`Name: ${username}`)
        const response = await UserModel.find(query)
        Logger.debug(response)
        response.length !== 0
            ? res.status(StatusCode.OK).send(response)
            : res.status(StatusCode.NOT_FOUND).send({message: `Couldn't find user with username: ${username}`})
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to retrieve user with username: ${req.query.username}`,
            error: error.message
        })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        let {username, password, email}: User = req.body
        password = await encryptPassword(password)
        const {userId} = req.params
        Logger.http(`ID: ${userId}`)
        Logger.http(`Body is: ${req.body}`)
        if (!req.body) {
            res.status(StatusCode.BAD_REQUEST).send({message: `Can't update with empty values`})
        }
        const response = await UserModel.findByIdAndUpdate(userId, {
            username,
            password,
            email
        }, {new: true})
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
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
            message: `Successfully deleted user with username: ${response.username} and ID: ${userId}`
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error while trying to delete user with ID: ${req.params.userId}`,
                error: error.message
            })
    }
}

export default {
    createUser,
    getUsers,
    getUserWithId,
    getUserWithName,
    verifyUser,
    updateUser,
    deleteUser
}