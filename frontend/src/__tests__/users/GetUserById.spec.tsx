import React from 'react'
import {shallow} from 'enzyme'
import GetUserWithId from '../../components/users/GetUserWithId'
import {cleanup, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

const title = 'Get user with Id'
let wrapped = shallow(<GetUserWithId/>)

describe('Get User With Id', () => {
    it('should render Get User With Id component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })

    it('should render id input', () => {
        render(<GetUserWithId/>)

        const input = screen.getByTestId('id-input')
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('type', 'text')
    })

    it('pass id to input field', () =>  {
        render(<GetUserWithId/>)

        const input = screen.getByTestId('id-input')
        userEvent.type(input, 'test')

        expect(screen.getByTestId('id-input')).toHaveValue('test')
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
    })
})