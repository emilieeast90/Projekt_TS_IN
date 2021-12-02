import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import http from '../utils/api/BookfaceApi'
import {CreateUserObject, UserDataObject} from '../utils/interfaces/UserData'

function UpdateUser() {
    const [userObject, setUserObject] = useState<UserDataObject>()
    const [id, setId] = useState<string>('')
    const [userName, setUserName] = useState<string>('changeUserName')
    const [passWord, setPassWord] = useState<string>('changePassWord')
    const [eMail, setEmail] = useState<string>('changeEmail')

    function updateUser() {
        const payload: CreateUserObject = {
            username: userName,
            password: passWord,
            email: eMail
        }
        http.put(`/users/${id}`, payload)
            .then(((response) => {
                console.log(response.data)
                setUserObject(response.data)
            }))
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <article>
                <section>
                    ID:
                    <input type='text'
                           value={id}
                           onChange={event => setId(event.target.value)}
                    />
                </section>
                <section>
                    Username:
                    <input type='text'
                           value={userName}
                           onChange={event => setUserName(event.target.value)}
                    />
                </section>
                <section>
                    Password:
                    <input type='password'
                           value={passWord}
                           onChange={event => setPassWord(event.target.value)}
                    />
                </section>
                <section>
                    Email:
                    <input type='text'
                           value={eMail}
                           onChange={event => setEmail(event.target.value)}
                    />
                </section>
                <section>
                    <button onClick={updateUser}>Update User</button>
                    <button onClick={() => setUserObject(undefined)}>Clear</button>
                </section>
                <JsonToTable json={userObject} />
            </article>
        </>
    )
}

export default UpdateUser