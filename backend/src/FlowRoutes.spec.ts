import Chai from 'chai'
import 'mocha'
import StatusCode from './configuration/StatusCode'
import chaiHttp from 'chai-http'
import {app} from './Server'
import {Flow} from './utils/interface/Interface'

Chai.use(chaiHttp)
const expect = Chai.expect
const random = Math.random().toString(36).substring(7)
let id: string = '61d40dbac39bef5cf3c747a1'

const flow: Flow = {
    username: random,
    post: random
}

const updatedFlow: Flow = {
    username: random + random,
    post: random + random
}

const route = '/flow'

const createFlow = () => {
    describe('Test Create method for flow', () => {
        it('Expecting to create a flow', (done) => {
            Chai.request(app)
                .post(route)
                .send(flow)
                .end((error, response) => {
                    id = response.body._id
                    expect(response.status).to.equal(StatusCode.CREATED)
                    expect(response.body).be.a('object')
                    expect(response.body).have.property('username').eq(flow.username)
                    expect(response.body).have.property('post').eq(flow.post)
                    done()
                })
        })
    })
}

const getFlows = () => {
    describe('Get all flows in database', () => {
        it('Expecting to get all flows', (done) => {
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

const updateFlow = () => {
    describe('Update a flow in database', () => {
        it('Expecting flow to be updated', (done) => {
            Chai.request(app)
                .put(`${route}/${id}`)
                .send(updatedFlow)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.body).be.a('object')
                    expect(response.body).have.property('username').eq(updatedFlow.username)
                    expect(response.body).have.property('post').eq(updatedFlow.post)
                    done()
                })
        })
    })
}

const deleteFlow = () => {
    describe('Delete a flow in database', () => {
        it('Expecting flow to be deleted', (done) => {
            Chai.request(app)
                .delete(`${route}/${id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    done()
                })
        })
    })
}

describe('TESTING FLOW API ROUTE', () => {
    createFlow()
    getFlows()
    updateFlow()
    deleteFlow()
})