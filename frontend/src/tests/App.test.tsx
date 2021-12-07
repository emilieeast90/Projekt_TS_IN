import App from '../App'
import React from 'react'
import {render, screen} from '@testing-library/react'

test('renders bookface', () => {
    render(<App />)
    const linkElement = screen.getByText(/Bookface/i)
    expect(linkElement).toBeInTheDocument()
})