import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPathUrl'
import React from 'react'
import FontStyle from '../FontStyle'


function Menu() {

    return (
        <>
            <FontStyle/>
            <StyledMenu>
                <StyledLink to={RoutingPath.homeView}>Home</StyledLink>
                <StyledLink to={RoutingPath.signinView}>Sign In</StyledLink>
                <StyledLink to={RoutingPath.signupView}>Sign Up</StyledLink>
            </StyledMenu>
        </>
    )
}

const StyledMenu = styled.div`
  font-family: 'Roboto Slab', serif;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 3em;
  padding: 1em;
  background-color: #684848;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: 0.2s all ease-in-out;
`

const StyledLink = styled(Link)`
  background-color: #684848;
  color: #fff;
  margin-right: 0.7em;
  padding: 0.3em;
  font-family: 'Roboto Slab', serif;
  text-decoration: none;
  font-size: clamp(1.2rem, 1vw, 2vw);

  &:hover {
    transition: 0.2s all ease-in-out;
    color: #222;
  }
`

export default Menu