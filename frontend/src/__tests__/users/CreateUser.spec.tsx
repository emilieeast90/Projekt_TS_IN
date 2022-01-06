import React from 'react'
import {shallow} from 'enzyme'
import CreateUser from '../../components/users/CreateUser'

const title = 'Create User'
let wrapped = shallow(<CreateUser/>)

describe('Create User', () => {
    it('should render Create User component correctly', () => {
        expect(wrapped.find('h1').text()).toEqual(title)
    })


})