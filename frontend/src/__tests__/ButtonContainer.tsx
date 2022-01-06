import {render} from '@testing-library/react'
import styled from 'styled-components'

const Button = styled.button`
  color: red
`

test('render button with container', async () => {
    const {container} = render(<Button/>)
    expect(container.firstChild).toMatchSnapshot()
})
