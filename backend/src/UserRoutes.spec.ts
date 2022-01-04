import Chai from 'chai'
import 'mocha'
import StatusCode from './configuration/StatusCode'
import chaiHttp from 'chai-http'
import {app} from './Server'
import {User} from './utils/interface/Interface'

Chai.use(chaiHttp)
const expect = Chai.expect

const random = Math.random().toString(36).substring(7)

let id: string = '61d2eee3fdc4e6fcad80197c'
let password: string = 'hemligt'

const user: User = {
    username: random,
    password: random,
    email: random
}

const updatedUser: User = {
    username: random + random,
    password: random + random,
    email: random + random
}

const route = '/users'

const testNonExistingRoute = () => {
    describe('text non existing route', () => {
        it('expected 404 not found', () => {
            return Chai.request(app).get(`/${random}`)
                .then(res => {
                    expect(res.status).to.equal(StatusCode.NOT_FOUND)
                })
        })
    })
}

const createUser = () => {
    describe('Test Create method for user', () => {
        it('Expecting to create a user', (done) => {
            Chai.request(app)
                .post(route)
                .send(user)
                .end((error, response) => {
                    id = response.body._id
                    expect(response.status).to.equal(StatusCode.CREATED)
                    expect(response.body).be.a('object')
                    expect(response.body).have.property('username').eq(user.username)
                    done()
                })
        })
    })
}

const getUsers = () => {
    describe('Get all users in database', () => {
        it('Expecting to get all users', (done) => {
            Chai.request(app)
                .get(route)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.body).be.a('array')
                    expect(response.body.length).be.eq(response.body.length)
                    done()
                })
        })
    })
}

const updateUser = () => {
    describe('Update a user in database', () => {
        it('Expecting user to be updated', (done) => {
            Chai.request(app)
                .put(`${route}/${id}`)
                .send(updatedUser)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.body).be.a('object')
                    password = response.body.password
                    expect(response.body).have.property('username').eq(updatedUser.username)
                    expect(response.body).have.property('password').eq(password)
                    expect(response.body).have.property('email').eq(updatedUser.email)
                    done()
                })
        })
    })
}

const deleteUser = () => {
    describe('Delete a user in database', () => {
        it('Expecting user to be deleted', (done) => {
            Chai.request(app)
                .delete(`${route}/${id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    done()
                })
        })
    })
}

describe('TESTING USER API ROUTE', () => {
    testNonExistingRoute()
    createUser()
    getUsers()
    updateUser()
    deleteUser()
})