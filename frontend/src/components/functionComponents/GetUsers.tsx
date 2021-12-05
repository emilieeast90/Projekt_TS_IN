import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import http from '../../utils/api/BookfaceApi'
import styled from 'styled-components'
import {UserDataObject} from '../../utils/interfaces/UserData'

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
        <Article>
            <Section><h1>Get users</h1></Section>

            <Section>
                <button onClick={getUsers}>Get users</button>
                <JsonToTable json={allUsersInDatabase}/>
            </Section>
        </Article>

    )
}

const Article = styled.article`
  padding: 0.5em;

`

const Section = styled.section`
  border-style: solid;
  border-width: 1px;
  padding: 0.5em;
  margin: 0.5em;
`

export default GetUsers