import React from 'react'
import {shallow} from 'enzyme'
import UpdateFlowById from '../../components/flows/UpdateFlowById'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const title = 'Update Flow'
let wrapped = shallow(<UpdateFlowById/>)

describe('Update Flow', () => {
    it('should render Update Flow component correctly', () => {
        expect(wrapped.find('h3').text()).toEqual(title)
    })

    it('pass id to input field', () =>  {
        render(<UpdateFlowById/>)

        const input = screen.getByTestId('id-input')
        userEvent.type(input, 'test')

        expect(screen.getByTestId('id-input')).toHaveValue('test')
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
    })

    it('pass username to input field', () =>  {
        render(<UpdateFlowById/>)

        const input = screen.getByTestId('username-input')
        userEvent.type(input, 'test')

        expect(screen.getByTestId('username-input')).toHaveValue('test')
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
    })


    it('pass post to input field', () =>  {
        render(<UpdateFlowById/>)

        const input = screen.getByTestId('post-input')
        userEvent.type(input, 'test')

        expect(screen.getByTestId('post-input')).toHaveValue('test')
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
    })
})