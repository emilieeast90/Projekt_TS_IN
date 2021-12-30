export interface MessageDataObject {
    _id: string,
    subject: string,
    privateMessage: string,
    createdAt: string,
    updatedAt: string
}

export interface CreateMessageObject {
    subject: string,
    privateMessage: string,
}

export interface Message {
    subject: string,
    privateMessage: string,
}