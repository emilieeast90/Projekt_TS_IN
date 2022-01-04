import Chai from 'chai'
import 'mocha'
import StatusCode from './configuration/StatusCode'
import chaiHttp from 'chai-http'
import {app} from './Server'
import {Message} from './utils/interface/Interface'

Chai.use(chaiHttp)
const expect = Chai.expect

const random = Math.random().toString(36).substring(7)

let id: string = '61d40dbac39bef5cf3c747a6'
const message: Message = {
    subject: random,
    privateMessage: random,
}

const updatedMessage: Message = {
    subject: random,
    privateMessage: random,
}

const route = '/messages'

const createMessage = () => {
    describe('Test Create method for message', () => {
        it('Expecting to create a message', (done) => {
            Chai.request(app)
                .post(route)
                .send(message)
                .end((error, response) => {
                    id = response.body._id
                    expect(response.status).to.equal(StatusCode.CREATED)
                    expect(response.body).be.a('object')
                    expect(response.body).have.property('subject').eq(updatedMessage.subject)
                    done()
                })
        })
    })
}

const getMessages = () => {
    describe('Get all messages in database', () => {
        it('Expecting to get all messages', (done) => {
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

const updateMessage = () => {
    describe('Update a message in database', () => {
        it('Expecting message to be updated', (done) => {
            Chai.request(app)
                .put(`${route}/${id}`)
                .send(updatedMessage)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.body).be.a('object')
                    expect(response.body).have.property('subject').eq(updatedMessage.subject)
                    expect(response.body).have.property('privateMessage').eq(updatedMessage.privateMessage)
                    done()
                })
        })
    })
}

const deleteMessage = () => {
    describe('Delete a message in database', () => {
        it('Expecting message to be deleted', (done) => {
            Chai.request(app)
                .delete(`${route}/${id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    done()
                })
        })
    })
}

describe('TESTING MESSAGE API ROUTE', () => {
    createMessage()
    getMessages()
    updateMessage()
    deleteMessage()
})