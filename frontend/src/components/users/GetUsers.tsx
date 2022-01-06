import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import styled from 'styled-components'
import {UserDataObject} from '../../utils/interfaces/UserData'
import UserService from '../../utils/api/service/UserService'

function GetUsers() {
    const initialState: Array<UserDataObject> = []
    const [allUsersInDatabase, setAllUsersInDatabase] = useState<Array<UserDataObject>>(initialState)

    function getUsers() {
        UserService.getAllUsers()
            .then((response) => {
                console.log(response.data)
                setAllUsersInDatabase(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Article>
            <h3>Get users</h3>

            <Section>
                <Button onClick={getUsers}>Get users</Button>
                <Button onClick={() => {
                    setAllUsersInDatabase(initialState)
                }}>Clear</Button>
                <JsonToTable json={allUsersInDatabase}/>
            </Section>
        </Article>
    )
}

const Article = styled.article`
  padding: 0.5em;
  width: 100%;
  overflow: auto;
  border: solid 1px black;
`

const Section = styled.section`
  padding: 0.5em;
  margin: 0.5em;
`

export const Button = styled.button`
  margin-bottom: 0.3em;
  margin-right: 0.3em;
  background-color: #684848;
  border-style: none;
  height: 2em;
  color: #fff;
`

export default GetUsers