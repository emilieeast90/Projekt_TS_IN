import React from 'react'
import {shallow} from 'enzyme'
import UpdateUser from '../../components/users/UpdateUser'
import UpdateMessageWithId from '../../components/messages/UpdateMessageWithId'

const title = 'Update Message'
let wrapped = shallow(<UpdateMessageWithId/>)

describe('Message', () => {
    it('should render Update Message component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})