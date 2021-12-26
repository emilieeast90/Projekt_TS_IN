import React from 'react'
import {useNavigate} from 'react-router-dom'
import RoutingPath from '../routes/RoutingPathUrl'
import {useUserContext} from '../utils/global/provider/UserProviderOrg'

export const Profile = () => {
    const navigate = useNavigate()
    const {authenticatedUser, setAuthenticatedUser} = useUserContext()

    const logout = () => {
        localStorage.removeItem('username')
        setAuthenticatedUser('')
        navigate(RoutingPath.profileView)
    }
    return (
        <section>
            <img src={'https://thispersondoesnotexist.com/image'} alt="Unknown person"/>
            <span>{authenticatedUser}</span>
            <span onClick={() => navigate(RoutingPath.settingsView)}>Settings</span>
            <span onClick={() => navigate(RoutingPath.profileView)}>Profile</span>
            <span onClick={() => logout()}>Logout</span>
        </section>
    )
}

export default Profile