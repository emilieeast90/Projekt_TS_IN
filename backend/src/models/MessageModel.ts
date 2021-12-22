import {model, Schema} from 'mongoose'
import {Message} from '../utils/interface/Interface'
import dotenv from 'dotenv'

dotenv.config()
const mongodbCollection = process.env.MONGODB_COLLECTION_MESSAGES

const messageSchema = new Schema<Message>({
        subject: {type: String, required: true},
        privateMessage: {type: String, required: true}
    }, {timestamps: true}
)

const MessageModel = model<Message>(mongodbCollection, messageSchema)

export default MessageModel