import CreateUser from '../components/functionComponents/CreateUser'
import {render, screen} from '@testing-library/react'

test('Renders Create User', () => {
    render(<CreateUser/>)
    const linkElement = screen.getByText(/Create User/i)
    expect(linkElement).toBeInTheDocument()
})