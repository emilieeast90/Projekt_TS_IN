import {model, Schema} from 'mongoose'
import {Flow} from '../utils/interface/Interface'
import dotenv from 'dotenv'

dotenv.config()
const mongodbCollection = process.env.MONGODB_COLLECTION_FLOWS

const flowSchema = new Schema<Flow>({
        username: {type: String, required: true},
        post: {type: String, required: true}
    }, {timestamps: true}
)

const FlowModel = model<Flow>(mongodbCollection, flowSchema)

export default FlowModel