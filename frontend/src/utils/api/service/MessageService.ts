import http from '../BookfaceApi'
import {CreateMessageObject, Message, MessageDataObject} from '../../interfaces/MessageData'

const messageUrl = '/messages'

const MessageService = {
    createNewMessage: (newMessagePayload: Message) => {
        return http.post(messageUrl, newMessagePayload)
    },

    getMessages: () => {
        return http.get<MessageDataObject[]>(messageUrl)
    },

    getMessageWithId: (id: string) => {
        return http.get<MessageDataObject>(`${messageUrl}/${id}`)
    },

    updateMessage: (id: string, messagePayload: CreateMessageObject) => {
        return http.put(`${messageUrl}/${id}`, messagePayload)
    },

    deleteMessage: (id: string) => {
        return http.delete(`${messageUrl}/${id}`)
    }
}

export default MessageService