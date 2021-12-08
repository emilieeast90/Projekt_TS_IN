import http from '../BookfaceApi'
import {User, UserDataObject} from '../../interfaces/Interface'
import {CreateUserObject} from '../../interfaces/UserData'

const usersUrl = '/users'

const UserService = {
    createUser: (newUserPayload: User) => {
        return http.post(usersUrl, newUserPayload)
    },

    deleteUserById: (id: string) => {
        return http.delete(`${usersUrl}/${id}`)
    },

    getAllUsers: () => {
        return http.get<UserDataObject[]>(usersUrl)
    },

    getUserById: (id: string) => {
        return http.get<UserDataObject>(`${usersUrl}/${id}`)
    },

    updateUserById: (id: string, userPayload: CreateUserObject) => {
        return http.put(`${usersUrl}/${id}`, userPayload)
    }
}
export default UserService