import React from 'react'
import {shallow} from 'enzyme'
import DeleteUser from '../../components/users/DeleteUser'

const title = 'Delete User'
let wrapped = shallow(<DeleteUser/>)

describe('Delete User', () => {
    it('should render Delete Users component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })
})