import React from 'react'
import './App.css'
import GetUsers from './components/GetUsers'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {
    return (
        <>
            <h1>Projektarbete</h1>

            <GetUsers />
            <CreateUser />
            <UpdateUser />
        </>
    )
}

export default App

