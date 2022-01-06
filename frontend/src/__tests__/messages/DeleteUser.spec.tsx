import React from 'react'
import {shallow} from 'enzyme'
import DeleteMessageWithId from '../../components/messages/DeleteMessageWithId'

const title = 'Delete Message'
let wrapped = shallow(<DeleteMessageWithId/>)

describe('Delete Message', () => {
    it('should render Delete Users component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})