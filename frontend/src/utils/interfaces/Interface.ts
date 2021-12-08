export interface AuthenticatedUser {
    username?: string,
    password?: string
}

export interface User {
    username: string,
    password: string,
    email: string
}

export interface UserSetup {
    username: string,
    password: string,
    email: string,
}

export interface UserDataObject {
    _id: string,
    username: string,
    password: string,
    email: string,
    createdAt: string,
    updatedAt: string,
}