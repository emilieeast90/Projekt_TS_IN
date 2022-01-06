import React from 'react'
import {shallow} from 'enzyme'
import CreateMessage from '../../components/messages/CreateMessage'

const title = 'Subject'
let wrapped = shallow(<CreateMessage/>)

describe('Create Message', () => {
    it('should render Create Message component correctly', () => {
        expect(wrapped.find('p').text()).toEqual(title)
    })


})