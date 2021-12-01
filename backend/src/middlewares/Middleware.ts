import StatusCode from '../configuration/StatusCode'
import dotenv from 'dotenv'
import {Response, Request} from 'express'

dotenv.config()
const env = process.env.ENV_MODE

const notFound = (req: {originalUrl: string}, res: {status: (arg0: number) => void}, next: (arg0: Error) => void) => {
    const error = new Error(`Not Found: ${req.originalUrl}`)
    res.status(StatusCode.NOT_FOUND)
    next(error)
}

const errorHandler = (error: any, req: Request, res: Response, next: any) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode,
        message: error.message,
        stackTrace: env === 'development' ? error.stack : 'lol'
    })
}

export {
    notFound,
    errorHandler
}
