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
        <>
            <h1>Profile page</h1>
            {ifAuthenticated()}
        </>
    )
}

const Li = styled.li`
  width: 10em;
  height: 10em;
  
  img {
    width: 10em;
    height: 10em;
  }
`

export default ProfileView
