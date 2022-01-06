import React from 'react'
import {shallow} from 'enzyme'
import GetFlows from '../../components/flows/GetFlows'


const title = 'Get Flows'
let wrapped = shallow(<GetFlows/>)

describe('Get Flows', () => {
    it('should render Get Flows component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})