import React, {useEffect} from 'react'
import {Route} from 'react-router'
import {BrowserRouter, Navigate, Routes} from 'react-router-dom'
import RoutingPath from './RoutingPathUrl'
import HomeView from '../view/unauthorized/HomeView'
import ProfileView from '../view/authorized/ProfileView'
import SigninView from '../view/unauthorized/SigninView'
import SignupView from '../view/unauthorized/SignupView'
import FlowView from '../view/authorized/FlowView'
import MessageView from '../view/authorized/MessageView'
import LogoutView from '../view/authorized/LogoutView'
import SettingView from '../view/authorized/SettingView'
import AdminView from '../view/authorized/AdminView'
import UsersView from '../view/authorized/UsersView'
import {NotFoundView} from '../view/NotFoundView'
import {useUserContext} from '../utils/global/provider/UserProviderOrg'

export const RoutingPaths = (props: { children?: React.ReactChild }) => {
    const {authenticatedUser, setAuthenticatedUser} = useUserContext()

    const isUserAuthenticated = () => {
        const username = localStorage.getItem('username')
        if (typeof username === 'string') {
            setAuthenticatedUser(username)
        }
    }

    const blockAuthorized = (navigateToView: any) => {
        return authenticatedUser ? <HomeView/> : navigateToView
    }

    const blockUnauthorized = (navigateToView: any) => {
        return !authenticatedUser ? <SignupView/> : navigateToView
    }

    useEffect(() => {
        isUserAuthenticated()
    })

    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path={RoutingPath.wildCardView} element={<Navigate to={RoutingPath.notFoundView}/>}/>
                <Route path={RoutingPath.homeView} element={<HomeView/>}/>
                <Route path={RoutingPath.signinView} element={<SigninView/>}/>
                <Route path={RoutingPath.signupView} element={<SignupView/>}/>
                <Route path={RoutingPath.logoutView} element={<LogoutView/>}/>
                <Route path={RoutingPath.messageView} element={<MessageView/>}/>
                <Route path={RoutingPath.profileView} element={<ProfileView/>}/>
                <Route path={RoutingPath.settingsView} element={<SettingView/>}/>
                <Route path={RoutingPath.flowView} element={<FlowView/>}/>
                <Route path={RoutingPath.usersView} element={<UsersView/>}/>
                <Route path={RoutingPath.adminView} element={<AdminView/>}/>
                <Route path={RoutingPath.notFoundView} element={<NotFoundView/>}/>
            </Routes>
        </BrowserRouter>
    )
}
