import React from 'react'
import styled from 'styled-components'
import {Link, Outlet} from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import {useUserContext} from '../utils/global/provider/UserProviderOrg'
import Profile from './Profile'

export const NavigationBar = () => {
    const {authenticatedUser} = useUserContext()

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser)
            ? <LiRight><Profile/></LiRight>
            : <LiRight><Link to={RoutingPath.signinView}>Sign In</Link></LiRight>
    }

    return (
        <>
            <Wrapper>
                <nav>
                    <Ul>
                        <LiLeft><Link to={RoutingPath.homeView}>Home</Link></LiLeft>
                        <LiLeft><Link to={RoutingPath.signinView}>Sign In</Link></LiLeft>
                        <LiLeft><Link to={RoutingPath.signupView}>Sign Up</Link></LiLeft>
                        {displayUserIfAuthenticated()}
                    </Ul>
                </nav>
                <Outlet/>
            </Wrapper>
        </>
    )
}

const Ul = styled.ul`
  list-style-type: none;
  overflow: hidden;
`

const Wrapper = styled.div`
  height: 3em;
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