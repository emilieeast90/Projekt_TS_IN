import http from '../BookfaceApi'

const verifyUser = (username: string, password: string) => {
    return http.post('/verifyUser')
}

export default {
    verifyUser
}