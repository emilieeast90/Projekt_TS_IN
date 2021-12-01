import UserController from '../controller/UserController'
import {Express} from 'express'

const userRoute: string = '/users'

const routes = (app: Express) => {
    app.post(userRoute, UserController.createUser)
}

export default {
    routes
}

