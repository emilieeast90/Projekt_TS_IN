import {useUserContext} from '../../utils/global/provider/UserProviderOrg'
import Profile from '../../components/Profile'
import {Link} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPathUrl'
import React from 'react'
import styled from 'styled-components'

function ProfileView() {
    const {authenticatedUser} = useUserContext()
    const ifAuthenticated = () => {
        return (authenticatedUser)
            ? <Li><Profile/></Li>
            : <li><Link to={RoutingPath.signinView}>Sign in</Link></li>
    }
    return (
        <Article>
            {ifAuthenticated()}
        </Article>
    )
}

const Article = styled.article`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 70%;
  margin: 0 auto;
  background-color: #fff;
  height: 100vh;
`

const Li = styled.li`
  width: 10em;
  height: 10em;

  img {
    grid-column: 0/1;
    width: 10em;
    height: 10em;
    
  }
`

export default ProfileView
