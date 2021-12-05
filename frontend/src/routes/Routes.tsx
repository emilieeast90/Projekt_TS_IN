import React, {useContext} from 'react'
import {UserContext} from '../shared/global/provider/UserProvider'

export const Routes = (props: {children?: React.ReactChild}) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(useContext(UserContext))
}