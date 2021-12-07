import UserController from '../controller/UserController'
import {Express} from 'express'

const userRoute: string = '/users'
const userRouteId: string = `${userRoute}/:userId`
const searchUsersRoute: string = `/searchUser`

const routes = (app: Express) => {
    app.post(userRoute, UserController.createUser)
    app.get(userRoute, UserController.getUsers)
    app.get(userRouteId, UserController.getUserWithId)
    app.get(searchUsersRoute, UserController.getUserWithName)
    app.put(userRouteId, UserController.updateUser)
    app.delete(userRouteId, UserController.deleteUser)
}

export default {
    routes
}

