import dotenv from 'dotenv'
import express from 'express'
import {connect} from 'mongoose'
import Logger from '../utils/Logger'

dotenv.config()
const port: number = Number(process.env.SERVER_PORT)
const env: string = process.env.ENV_MODE
const mongodbUrl: string = process.env.MONGODB_URL
const dbName: string = process.env.MONGODB_NAME

const connectPort = (app: express.Application) => {
    app.listen(port, () => {
        Logger.info(`Server connection established on http://localhost:${port}`)
        if (env === 'development') {
            Logger.warn(`Server up and running in developer mode!`.toUpperCase())
        }
    })
}

const connectDb = async () => {
    const uri = mongodbUrl + dbName

    try {
        await connect(uri)
        Logger.info(`Successfully connected to database`)
    }
    catch (error) {
        Logger.error('Error while trying to connect to database'.toUpperCase(), error)
        process.exit()
    }
}

export default {
    connectPort,
    connectDb
}
