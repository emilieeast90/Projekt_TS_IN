import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import styled from 'styled-components'
import UserService from '../../utils/api/service/UserService'
import { User } from '../../../../backend/src/utils/interface/Interface'
import { UserDataObject } from '../../utils/interfaces/UserData'

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
        <Wrapper>
            <h1>Create User</h1>
            <Article>
                <Section>
                    Username:
                    <input type='text'
                           value={userName}
                           onChange={event => setUserName(event.target.value)}
                    />
                </Section>
                <Section>
                    Password:
                    <input type='password'
                           value={passWord}
                           onChange={event => setPassWord(event.target.value)}
                    />
                </Section>
                <Section>
                    Email:
                    <input type='text'
                           value={eMail}
                           onChange={event => setEMail(event.target.value)}
                    />
                </Section>
                <Section>
                    <button onClick={createUsers}>Create</button>
                    <button onClick={() => setUserObject(undefined)}>Clear</button>
                </Section>
                <Section>
                    <JsonToTable json={userObject} />
                </Section>
            </Article>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    width: 50vw;
`

const Article = styled.article`
    padding: 0.5em;
  
`

const Section = styled.section `
  border-style: solid;
  border-width: 1px;
  padding: 0.5em;
  margin: 0.5em;
`

export default CreateUser
