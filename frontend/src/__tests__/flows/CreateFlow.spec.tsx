import React from 'react'
import {shallow} from 'enzyme'
import CreateFlow from '../../components/flows/CreateFlow'

const title = "What's up? Tell the world..."
let wrapped = shallow(<CreateFlow/>)

describe('Create Flow', () => {
    it('should render Create Flow component correctly', () => {
        expect(wrapped.find('p').text()).toEqual(title)
    })


})