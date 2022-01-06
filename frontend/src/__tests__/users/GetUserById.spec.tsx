import React from 'react'
import {shallow} from 'enzyme'
import GetUserWithId from '../../components/users/GetUserWithId'

const title = 'Get user with Id'
let wrapped = shallow(<GetUserWithId/>)

describe('Get User With Id', () => {
    it('should render Get User With Id component correctly', () => {
        expect(wrapped.find('h1').text()).toEqual(title)
    })
})