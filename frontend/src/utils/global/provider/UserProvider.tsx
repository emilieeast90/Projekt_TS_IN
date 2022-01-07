import React, {createContext, useState} from 'react'
import {AuthenticatedUser} from '../../interfaces/Interface'

const defaultValues = {
    id: undefined,
    username: undefined,
    token: undefined,
    authenticated: false,
    newsLetterSubscription: {
        receiveNewsLetter: false
    }
}

export const UserContext = createContext<any>(null)

export const UserProvider = (props: { children?: React.ReactChild }) => {
    const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser>(defaultValues)
    const {children} = props

    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {children}
        </UserContext.Provider>
    )
}
