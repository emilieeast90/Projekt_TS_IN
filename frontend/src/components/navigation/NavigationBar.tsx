import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPathUrl'

function NavigationBar() {
    return (
        <>
            <StyledNav>
                <Li><StyledLink to={RoutingPath.homeView}>Home</StyledLink></Li>
                <Li><StyledLink to={RoutingPath.messageView}>Messages</StyledLink></Li>
                <Li><StyledLink to={RoutingPath.flowView}>Flow</StyledLink></Li>
                <Li><StyledLink to={RoutingPath.settingsView}>Settings</StyledLink></Li>
                <Li><StyledLink to={RoutingPath.usersView}>Users</StyledLink></Li>
            </StyledNav>
        </>
    )
}

const StyledNav = styled.div`
  display: block;
  width: 100vw;
  text-align: center;
  position: fixed;
  top: 0;
  background-color: #684848;
  
  ul {
    margin: 0 auto;
    text-align: center;
  }
`

const StyledLink = styled(Link)`
  background-color: #684848;
  color: #fff;
  margin: 0.4em;
  font-family: 'Roboto Slab', serif;
  text-decoration: none;
  font-size: clamp(1.2rem, 1vw, 2vw);
  transition: 0.2s all ease-in-out;
  text-align: center;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    transition: 0.2s all ease-in-out;
    color: #222;
  }
`

const Li = styled.li`
  text-align: center;
  display: inline-block;
  height: 3.5em;
  padding-top: 1.5em;
  background-color: #684848;

  @media screen and (max-width: 580px) {
    li {
      font-size: 1em;
    }
  }
`

export default NavigationBar