import { useState } from 'react'
import { JsonToTable } from 'react-json-to-table'
import http from '../../utils/api/BookfaceApi'
import styled from 'styled-components'
import { UserDataObject } from '../../utils/interfaces/UserData'

function GetUsers() {
    const initialState: Array<UserDataObject> = []
    const [allUsersInDatabase, setAllUsersInDatabase] = useState<Array<UserDataObject>>(initialState)

    function getUsers() {
        http.get<UserDataObject[]>('/users')
            .then(function (response) {
                console.log(response.data)
                setAllUsersInDatabase(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <>
            <h1>Get users</h1>

            <button onClick={getUsers}>Get users</button>
            <JsonToTable json={allUsersInDatabase}/>
        </>
    )
}

export default GetUsers