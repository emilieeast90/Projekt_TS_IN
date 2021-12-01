import Axios from 'axios'

const hostUrl = 'http://localhost'
const port = 3001

const url = `${hostUrl}:${port}`

const BookfaceApi = Axios.create({
    baseURL: url
})

export default BookfaceApi
