import express from 'express'
import Configuration from './configuration/Configuration'
import ApplyMiddlewares from './configuration/ApplyMiddlewares'
import Alive from './routes/Alive'
import UserRoutes from './routes/UserRoutes'
import {notFound} from './middlewares/Middleware'
import MessageRoutes from './routes/MessageRoutes'
import FlowRoutes from './routes/FlowRoutes'

const app = express()

ApplyMiddlewares(app)

Alive.routes(app)
UserRoutes.routes(app)
MessageRoutes.routes(app)
FlowRoutes.routes(app)
app.use(notFound)

Configuration.connectPort(app)
Configuration.connectDb().then()