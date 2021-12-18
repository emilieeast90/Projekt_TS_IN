import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import React from 'react'
import {FaTimes} from 'react-icons/fa'
import FontStyle from './FontStyle'

const Menu = ({handleNavToggle}: any) => {

    return (
        <>
            <FontStyle />
            <StyledMenu>
                <StyledLink to={RoutingPath.homeView}>Home</StyledLink>
                <StyledLink to={RoutingPath.signinView}>Sign In</StyledLink>
                <StyledLink to={RoutingPath.signupView}>Sign Up</StyledLink>
                <CloseToggle onClick={handleNavToggle}/>
            </StyledMenu>
        </>
    )
}

const StyledMenu = styled.div`
  font-family: 'Roboto Slab', serif;
  position: fixed;
  top: 0;
  right: 0;
  width: 10%;
  padding: 2em;
  @media screen and (min-width: 790px) {
    width: 40%;
    height: 20vh;
    z-index: 99;
    padding: 2em;
    transition: 0.2s all ease-in-out;
  }
  @media screen and (max-width: 790px) {
    width: 30%;
    height: 25vh;
    z-index: 99;
    padding: 2em;
    transition: 0.2s all ease-in-out;
  }
  
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledLink = styled(Link)`
  background-color: #684848;
  color: #fff;
  margin: 0.1em;
  padding: 0.3em;
  font-family: 'Roboto Slab', serif;
  text-decoration: none;
  font-size: clamp(1.2rem, 1vw, 2vw);
  transition: 0.2s all ease-in-out;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    transition: 0.2s all ease-in-out;
    color: #222;
  }

  @media screen and (max-width: 580px) {
    font-size: 1em;
  }
  
  &:nth-child(odd) {
    background-color: #e0cdbf;
  }
`

const CloseToggle = styled(FaTimes)`
  position: fixed;
  top: 1.3%;
  right: 4%;
  background-color: rgba(255, 255, 255, 0.95);
  color: #222;
  padding: 0.5rem;
  display: flex;
  place-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`

export default Menu