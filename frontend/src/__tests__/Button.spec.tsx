import renderer from 'react-test-renderer'
import styled from 'styled-components'

const Button = styled.button`
  color: red
`

test('renders button with styled-components', async () => {
    const button = renderer.create(<Button/>).toJSON()
    expect(button).toMatchSnapshot()
})
