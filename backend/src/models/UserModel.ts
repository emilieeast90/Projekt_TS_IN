import {Schema, model} from 'mongoose'
import {User} from '../utils/interface/Interface'
import dotenv from 'dotenv'

dotenv.config()
const mongodbCollection = process.env.MONGODB_COLLECTION_USERS

const userSchema = new Schema<User>({
        username: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true}
    }, {timestamps: true}
)

const UserModel = model<User>(mongodbCollection, userSchema)

export default UserModel
