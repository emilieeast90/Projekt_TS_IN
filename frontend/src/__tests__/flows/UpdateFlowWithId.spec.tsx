import React from 'react'
import {shallow} from 'enzyme'
import UpdateFlowById from '../../components/flows/UpdateFlowById'

const title = 'Update Flow'
let wrapped = shallow(<UpdateFlowById/>)

describe('Update Flow', () => {
    it('should render Update Flow component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})