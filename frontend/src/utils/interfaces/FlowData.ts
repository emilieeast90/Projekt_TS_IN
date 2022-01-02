export interface FlowDataObject {
    _id: string,
    username: string,
    post: string,
    createdAt: string,
    updatedAt: string
}

export interface FlowObject {
    username: string,
    post: string,
}

export interface FlowObjectWithDate {
    username: string,
    post: string,
    createdAt: Date,
    updatedAt: Date
}

export interface FlowDataObjectWithDate {
    username: string,
    post: string,
    createdAt: Date,
    updatedAt: Date
}

export interface CreateFlowObject {
    username: string,
    post: string,
}

export interface Flow {
    username: string,
    post: string,
}