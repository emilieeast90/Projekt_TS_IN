import express from 'express'
import Configuration from './configuration/Configuration'

const app: express.Application = express()

app.get('/', (req, res) => {
    res.status(200).send('Api is alive!')
})

Configuration.connectPort(app)
Configuration.connectDb().then()