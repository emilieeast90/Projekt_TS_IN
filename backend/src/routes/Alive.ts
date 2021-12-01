import {Express} from 'express'
import StatusCode from '../configuration/StatusCode'
import Logger from '../utils/Logger'

const routes = (app: Express) => {
    app.get('/', (req, res) => {
        Logger.debug('API is Alive with TypeScript')
        res.status(StatusCode.OK).send('API is Alive with TypeScript')
    })
}

export default {
    routes
}