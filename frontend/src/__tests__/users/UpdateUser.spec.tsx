import React from 'react'
import {shallow} from 'enzyme'
import UpdateUser from '../../components/users/UpdateUser'

const title = 'Update User'
let wrapped = shallow(<UpdateUser/>)

describe('UpdateUser', () => {
    it('should render Update User component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})
