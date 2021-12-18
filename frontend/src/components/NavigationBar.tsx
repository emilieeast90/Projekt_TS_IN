import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import {Link, Outlet} from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import {useUserContext} from '../utils/global/provider/UserProviderOrg'
import Profile from './Profile'
import {generateMedia} from 'styled-media-query'

const mediaDiff = generateMedia({
    webBrowser: '78em',
    tablet: '60em',
    phone: '46em'
})

export const NavigationBar = () => {
    const {authenticatedUser} = useUserContext()
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useState<boolean>(false)
    const onClick = () => setIsActive(!isActive)
    const isItActive = isActive ? 'active' : 'inactive'

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser)
            ? <LiRight><Profile/></LiRight>
            : <LiRight><Link to={RoutingPath.signinView}>Sign In</Link></LiRight>
    }

    const dropdown = () => {
        return (
            <Dropdown>
                <Button onClick={onClick}>menu</Button>
                <Nav ref={dropdownRef} className={isItActive}>
                    <span>Start</span>
                    <ul>
                        <LiLeft><Link to={RoutingPath.homeView}>Home</Link></LiLeft>
                        <LiLeft><Link to={RoutingPath.signinView}>Sign In</Link></LiLeft>
                        <LiLeft><Link to={RoutingPath.signupView}>Sign Up</Link></LiLeft>
                        {displayUserIfAuthenticated()}
                    </ul>
                </Nav>
            </Dropdown>
        )
    }

    return (
        <>
            <NavWrapper>
                <nav>
                    <Ul>
                        <LiLeft><Link to={RoutingPath.homeView}>Home</Link></LiLeft>
                        <LiLeft><Link to={RoutingPath.signinView}>Sign In</Link></LiLeft>
                        <LiLeft><Link to={RoutingPath.signupView}>Sign Up</Link></LiLeft>
                        {displayUserIfAuthenticated()}
                    </Ul>
                </nav>
                <Outlet/>
                {dropdown()}
            </NavWrapper>
        </>
    )
}

const NavWrapper = styled.div`
  height: 3em;
`

const Ul = styled.ul`
  display: block;
  list-style-type: none;
  overflow: hidden;

  ${mediaDiff.lessThan('webBrowser')`
    display: none;
    font-size: 2em;
    `}
`

const Dropdown = styled.div`
  position: relative;
`

const Button = styled.button`
  color: white;
  float: left;
  margin: 1em;
  border: none;
  background-color: #684848;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  button:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`

const Nav = styled.nav`
  background: white;
  border-radius: 8px;
  position: absolute;
  top: 6em;
  right: 0;
  width: 30em;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  .active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    border-bottom: 1px solid #dddddd;
  }

  li a {
    text-decoration: none;
    color: #333;
    padding: 1.5em 2em;
    display: block;
  }

  span {
    font-weight: 700;
    vertical-align: middle;
    font-size: 1.4em;
    margin: 0 10px;
  }
`

const LiRight = styled.li`
  float: right;

  a {
    color: white;
    display: block;
    text-decoration: none;
    padding-right: 1.4em;
  }

  a:hover {
    color: white;
    font-size: 1.4em;
    transition: 1s;
  }

  a:active {
    color: white;
  }

  a:visited {
    color: white;
  }
`

const LiLeft = styled.li`
  float: left;

  a {
    color: white;
    display: block;
    text-decoration: none;
    padding-left: 1.4em;
  }

  a:hover {
    color: white;
    font-size: 1.4em;
    transition: 1.5s;
  }

  a:active {
    color: white;
  }

  a:visited {
    color: white;
  }
`