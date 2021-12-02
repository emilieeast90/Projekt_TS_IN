import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import http from '../../utils/api/BookfaceApi'
import {CreateUserObject, UserDataObject} from '../../utils/interfaces/UserData'

function CreateUser() {
    const [userObject, setUserObject] = useState<UserDataObject>()
    const [userName, setUserName] = useState<string>('NewUser')
    const [passWord, setPassWord] = useState<string>('password')
    const [eMail, setEMail] = useState<string>('email@email.com')

    function createUser() {
        const payload: CreateUserObject = {
            username: userName,
            password: passWord,
            email: eMail
        }
        http.post(`/users/`, payload)
            .then((response) => {
                console.log(response.data)
                setUserObject(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <h1>Create User</h1>
            <article>
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
                           onChange={event => setEMail(event.target.value)}
                    />
                </section>
                <section>
                    <button onClick={createUser}>Create</button>
                    <button onClick={() => setUserObject(undefined)}>Clear</button>
                </section>
                <section>
                    <JsonToTable json={userObject} />
                </section>
            </article>
        </>
    )
}

export default CreateUser
