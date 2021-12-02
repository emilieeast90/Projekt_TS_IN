import React, {useEffect, useState} from 'react'
import './App.css'
import GetUsers from './components/functionComponents/GetUsers'
import CreateUser from './components/functionComponents/CreateUser'
import UpdateUser from './components/functionComponents/UpdateUser'
import DeleteUser from './components/functionComponents/DeleteUser'

const App: React.FC = (): JSX.Element => {
    const [authenticatedUser, setAuthenticatedUser] = useState<string>('')

    const checkIfUserIsAuthenticatedInBrowser = () => {
        const username = localStorage.getItem('username')
        if (typeof username === 'string') {
            setAuthenticatedUser(username)
        }
    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    }, [])

    return (
        <>
            <h1>BookFace</h1>

            <GetUsers/>
            <CreateUser/>
            <UpdateUser/>
            <DeleteUser/>
        </>
    )
}

export default App

