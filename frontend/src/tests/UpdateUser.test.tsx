import UpdateUser from '../components/functionComponents/UpdateUser'
import React from 'react'
import {render, screen} from '@testing-library/react'

test('renders update user', () => {
    render(<UpdateUser/>)
    const linkElement = screen.getByText(/Update User/i)
    expect(linkElement).toBeInTheDocument()
})

