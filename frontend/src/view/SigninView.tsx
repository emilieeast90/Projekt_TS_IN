import styled from 'styled-components'
import {SectionOne} from './AdminView'
import {useState} from 'react'

// TODO: auteticatedUser

function SigninView() {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    return (
        <Container>
            <SectionOne>
                <H1>Sign in page</H1>
            </SectionOne>
            <SectionTwo>
                <Input type="text"
                       value={userName}
                       placeholder="Username"
                       onChange={(event) => setUserName(event.target.value)}/>
                <br/>
                <Input type="password"
                       value={passWord}
                       placeholder="Password"
                       onChange={(event) => setPassWord(event.target.value)}
                />
                <button>Log In</button>
            </SectionTwo>
        </Container>
    )
}

const Container = styled.div`
  background-color: #fff;
  width: 70vw;
  margin: auto;
`

const SectionTwo = styled.section`
  padding-top: 10em;
  width: 10em;
  text-align: center;
  margin: auto;
`

const H1 = styled.h1`
  text-align: center;
`

const Input = styled.input`
    margin: 1em;
`

export default SigninView
