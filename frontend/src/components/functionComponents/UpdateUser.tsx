import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import {CreateUserObject, UserDataObject} from '../../utils/interfaces/UserData'
import styled from 'styled-components'
import UserService from '../../utils/api/service/UserService'

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
        console.log(payload)
        UserService.updateUserById(id, payload)
            .then(((response) => {
                console.log(response.data)
                setUserObject(response.data)
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Article>
            <h3>Update User</h3>
            <Section>
                ID:
                <input type="text"
                       value={id}
                       onChange={event => setId(event.target.value)}
                />
            </Section>
            <Section>
                Username:
                <input type="text"
                       value={userName}
                       onChange={event => setUserName(event.target.value)}
                />
            </Section>
            <Section>
                Password:
                <input type="password"
                       value={passWord}
                       onChange={event => setPassWord(event.target.value)}
                />
            </Section>
            <Section>
                Email:
                <input type="text"
                       value={eMail}
                       onChange={event => setEmail(event.target.value)}
                />
            </Section>
            <Section>
                <button onClick={updateUser}>UpdateUser</button>
                <button onClick={() => setUserObject(undefined)}>Clear</button>
            </Section>
            <Section>
                <JsonToTable json={userObject}/>
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

export default UpdateUser