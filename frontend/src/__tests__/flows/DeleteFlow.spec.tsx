import React from 'react'
import {shallow} from 'enzyme'
import DeleteFlowById from '../../components/flows/DeleteFlowById'

const title = 'Delete Flow'
let wrapped = shallow(<DeleteFlowById/>)

describe('Delete Flow', () => {
    it('should render Delete Flow component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})