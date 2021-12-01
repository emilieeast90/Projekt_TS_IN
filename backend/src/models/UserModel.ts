import {Schema, model} from 'mongoose'
import {User} from '../utils/interface/Interface'

const mongodbCollection = process.env.MONGODB_COLLECTION_USERS

const schema = new Schema<User>({
        username: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true}
    }, {timestamps: true}
)

const UserModel = model<User>(mongodbCollection, schema)

export default UserModel