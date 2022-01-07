import React from 'react'
import {shallow} from 'enzyme'
import UpdateMessageWithId from '../../components/messages/UpdateMessageWithId'

const title = 'Update Message'
let wrapped = shallow(<UpdateMessageWithId/>)

describe('Update Message', () => {
    it('should render Update Message component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})