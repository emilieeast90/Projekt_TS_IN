import React from 'react'
import DeleteUser from '../components/functionComponents/DeleteUser'
import {render, screen} from '@testing-library/react'

test('Renders delete user', () => {
    render(<DeleteUser />)
    const linkElement = screen.getByText(/Delete User/i)
    expect(linkElement).toBeInTheDocument()
})
