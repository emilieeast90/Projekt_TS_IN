import React from 'react'
import {Route} from 'react-router'
import {BrowserRouter, Navigate, Routes} from 'react-router-dom'
import RoutingPath from './RoutingPath'
import HomeView from '../view/HomeView'
import ProfileView from '../view/ProfileView'
import SigninView from '../view/SigninView'
import SignupView from '../view/SignupView'
import FlowView from '../view/FlowView'
import MessageView from '../view/MessageView'
import LogoutView from '../view/LogoutView'
import SettingView from '../view/SettingView'
import AdminView from '../view/AdminView'
import UsersView from '../view/UsersView'

export const Routing = (props: { children?: React.ReactChild }) => {
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
            </Routes>
        </BrowserRouter>
    )
}
