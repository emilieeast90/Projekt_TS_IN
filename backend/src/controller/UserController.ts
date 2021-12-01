import UserModel from '../models/UserModel'
import Logger from '../utils/Logger'
import {Response, Request} from 'express'
import StatusCode from '../configuration/StatusCode'

const createUser = async (req: Request, res: Response) => {
    Logger.http(req.body)
    const user = new UserModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    Logger.debug(user)
    try {
        const response = await user.save()
        Logger.debug(response)
        res.status(StatusCode.CREATED).send(response)
    }
    catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}





export default {
    createUser
}