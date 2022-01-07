import React from 'react'
import {shallow} from 'enzyme'
import CreateMessage from '../../components/messages/CreateMessage'
import {cleanup, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

const title = 'Subject'
let wrapped = shallow(<CreateMessage/>)

describe('Create Message', () => {
    it('should render Create Message component correctly', () => {
        expect(wrapped.find('p').text()).toEqual(title)
    })

    it('display text', () => {
        render(<CreateMessage/>)
        expect(screen.getByTestId('create-button')).toHaveTextContent('Send')
    })

    it('pass subject to input field', () => {
        render(<CreateMessage/>)

        const input = screen.getByTestId('subject-input')
        userEvent.type(input, 'test')

        expect(screen.getByTestId('subject-input')).toHaveValue('--test')
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
    })

    it('pass pm to input field', () => {
        render(<CreateMessage/>)

        const input = screen.getByTestId('pm-input')
        userEvent.type(input, 'test')

        expect(screen.getByTestId('pm-input')).toHaveValue('---test')
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
    })

})
