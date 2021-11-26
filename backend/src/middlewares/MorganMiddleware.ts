import morgan, {StreamOptions} from 'morgan'
import Logger from '../utils/Logger'
import dotenv from 'dotenv'

dotenv.config()

const stream: StreamOptions = {
    write: (message: string) => Logger.http(message),
}

const skip = () => {
    const env = process.env.ENV_MODE || 'development'
    return env !== 'development'
}

const MorganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {stream, skip}
)

export default MorganMiddleware