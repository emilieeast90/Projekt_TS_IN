import MessageController from '../controller/MessageController'
import {Express} from 'express'

const messageRoute: string = '/messages'
const messageRouteId: string = `${messageRoute}/:messageId`

const routes = (app: Express) => {
    app.post(messageRoute, MessageController.createMessage)
    app.get(messageRoute, MessageController.getMessages)
    app.get(messageRouteId, MessageController.getMessageById)
    app.put(messageRouteId, MessageController.updateMessage)
    app.delete(messageRouteId, MessageController.deleteMessage)
}

export default {
    routes
}