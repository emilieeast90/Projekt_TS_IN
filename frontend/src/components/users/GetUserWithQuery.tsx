import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import UserService from '../../utils/api/service/UserService'
import {UserDataObject} from '../../utils/interfaces/Interface'
import {useLocation} from 'react-router-dom'

const GetUserWithQuery = () => {
    const search = useLocation().search
    const username = new URLSearchParams(search).get('username')

    const [user, setUser] = useState<UserDataObject>()
    const [userName, setUserName] = useState<string>('')

    const getUserWithQuery = () => {
        UserService.getUserWithQuery()
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <article>
                <h1>Get user with Id</h1>
                <input type="text"
                       value={userName}
                       placeholder="UserName"
                       onChange={event => setUserName(event.target.value)}/>
                <button onClick={getUserWithQuery}>Get user</button>
                <button onClick={() => setUser(undefined)}>Clear</button>
                <JsonToTable json={user}/>
                <p>{username}</p>
            </article>
        </>
    )
}

export default GetUserWithQuery