import styled from 'styled-components'
import {FaBars} from 'react-icons/all'

const Toggle = ({handleNavToggle}: any) => {
    return (
        <StyledToggle onClick={handleNavToggle}/>
    )
}

const StyledToggle = styled(FaBars)`
  position: fixed;
  top: 1.3%;
  right: 4%;
  background: #684848;
  color: #fff;
  padding: 0.5rem;
  display: flex;
  place-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`

export default Toggle