import React from 'react'
import {shallow} from 'enzyme'
import CreateFlow from '../../components/flows/CreateFlow'

const title = "Create Flow"
let wrapped = shallow(<CreateFlow/>)

describe('Create Flow', () => {
    it('should render Create Flow component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })


})