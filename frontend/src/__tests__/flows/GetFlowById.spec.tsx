import React from 'react'
import {shallow} from 'enzyme'
import GetFlowById from '../../components/flows/GetFlowById'

const title = 'id:'
let wrapped = shallow(<GetFlowById/>)

describe('Get Flow With Id', () => {
    it('should render Get Flow With Id component correctly', () => {
        expect(wrapped.find('p').text()).toEqual(title)
    })
})