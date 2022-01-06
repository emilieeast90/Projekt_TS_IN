import React from 'react'
import {shallow} from 'enzyme'
import GetAllMessages from '../../components/messages/GetAllMessages'


const title = 'Get All Messages'
let wrapped = shallow(<GetAllMessages/>)

describe('Get Messages', () => {
    it('should render Get Messages component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})
