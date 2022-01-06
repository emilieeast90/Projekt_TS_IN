import React from 'react'
import {shallow} from 'enzyme'
import GetMessageWithId from '../../components/messages/GetMessageWithId'

const title = 'Get message with id'
let wrapped = shallow(<GetMessageWithId/>)

describe('Get Message With Id', () => {
    it('should render Get Message With Id component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})