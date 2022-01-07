import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import UserService from '../../utils/api/service/UserService'
import {UserDataObject} from '../../utils/interfaces/Interface'

const GetUserWithId = () => {
    const [user, setUser] = useState<UserDataObject>()
    const [id, setId] = useState<string>('')

    const getUserWithId = () => {
        UserService.getUserById(id)
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <h3>Get user with Id</h3>
            <article>
                <input type="text"
                       value={id}
                       placeholder="Id"
                       data-testid='id-input'
                       onChange={event => setId(event.target.value)}/>
                <button onClick={getUserWithId}>Get user</button>
                <button onClick={() => setUser(undefined)}>Clear</button>
                <JsonToTable json={user}/>
            </article>
        </>
    )
}

export default GetUserWithId