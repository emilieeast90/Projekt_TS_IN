import React from 'react'
import {shallow} from 'enzyme'
import GetUsers from '../../components/users/GetUsers'


const title = 'Get users'
let wrapped = shallow(<GetUsers/>)

describe('GetUsers', () => {
    it('should render Get Users component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})