import styled from 'styled-components'
import {useState} from 'react'
import UserService from '../utils/api/service/UserService'
import {CreateUserObject} from '../utils/interfaces/UserData'
import {User} from '../utils/interfaces/Interface'

function SignupView() {
    const [userObject, setUserObject] = useState<CreateUserObject>()
    const [userName, setUserName] = useState<string>('')
    const [passWord, setPassWord] = useState<string>('')
    const [eMail, setEMail] = useState<string>('')

    function createNewUser() {
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
        <Container>
            <Section>
                <Item>
                    <H1>Sign up</H1>
                </Item>
                <Article>
                    <SectionTwo>
                        <Input type="text"
                               value={userName}
                               placeholder="Username"
                               onChange={(event) => setUserName(event.target.value)}/>
                        <br/>
                        <Input type="password"
                               value={passWord}
                               placeholder="Password"
                               onChange={(event) => setPassWord(event.target.value)}/>
                        <br/>
                        <Input type="text"
                               value={eMail}
                               placeholder="Email"
                               onChange={(event) => setEMail(event.target.value)}/>
                        <Button onClick={createNewUser}>Sign Up</Button>
                    </SectionTwo>
                </Article>
            </Section>
        </Container>
    )
}

const Container = styled.div`
  background-color: #fff;
  width: 70vw;
  margin: 5em auto;
`

const Section = styled.section`
  margin: 0;
  float: right;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`

const Article = styled.article`
  float: right;
  grid-column: 9 / 11;
  grid-row: 4 / 7;
`

const Item = styled.div`
  background-color: #684848;
  border-radius: 50%;
  grid-column: 8 / 10;
  grid-row: 3 / 6;
  width: 14em;
  height: 14em;
  z-index: -1;
`

const SectionTwo = styled.section`
  background-color: #e0cdbf;
  border-radius: 50%;
  width: 15em;
  height: 15em;
  padding: 1em;
`

const Input = styled.input`
  width: 10em;
  height: 2em;
  margin-right: 0.5em;
  margin-top: 2em;
  margin-left: 4em;
  border: double grey;
`

const Button = styled.button`
  background-color: #684848;
  padding: 0.5em;
  width: 7em;
  border-style: none;
  margin-left: 6em;
  margin-top: 1em;
  color: white;
  
  &:hover {
    background-color: #483833;
  }
`

const H1 = styled.h1`
  margin: 2.5em;
  color: white;
  border: double;
  padding: 0.5em;
`

export default SignupView
