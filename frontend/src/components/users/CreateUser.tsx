import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import styled from 'styled-components'
import UserService from '../../utils/api/service/UserService'
import {User} from '../../../../backend/src/utils/interface/Interface'
import {UserDataObject} from '../../utils/interfaces/UserData'

function CreateUser() {
    const [userObject, setUserObject] = useState<UserDataObject>()
    const [userName, setUserName] = useState<string>('NewUser')
    const [passWord, setPassWord] = useState<string>('password')
    const [eMail, setEMail] = useState<string>('email@email.com')

    function createUsers() {
        const payload: User = {
            username: userName,
            password: passWord,
            email: eMail
        }
        UserService.createUser(payload)
            .then((response) => {
                console.log(response.data)
                setUserObject(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Article>
            <h1>Create User</h1>
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
                       onChange={event => setEMail(event.target.value)}
                />
            </Section>
            <Section>
                <Button onClick={createUsers}>Create</Button>
                <Button onClick={() => setUserObject(undefined)}>Clear</Button>
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

const Button = styled.button`
  margin-bottom: 0.3em;
  margin-right: 0.3em;
  background-color: #684848;
  border-style: none;
  height: 2em;
  color: #fff;
`

export default CreateUser
