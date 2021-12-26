import styled from 'styled-components'
import {useState} from 'react'
import {AuthenticatedUser} from '../../utils/interfaces/Interface'
import {useNavigate} from 'react-router-dom'
import {useUserContext} from '../../utils/global/provider/UserProviderOrg'
import http from '../../utils/api/BookfaceApi'
import RoutingPath from '../../routes/RoutingPathUrl'

function SigninView() {
    const navigate = useNavigate()

    const [userName, setUserName] = useState<string>('')
    const [passWord, setPassWord] = useState<string>('')
    const {setAuthenticatedUser} = useUserContext()

    const login = (apiResponse: Boolean) => {
        if(apiResponse) {
            setAuthenticatedUser(userName)
            localStorage.setItem('username', userName)
            navigate(RoutingPath.usersView)
        }
    }

    const verifyUser = () => {
        const payload: AuthenticatedUser = {
            username: userName,
            password: passWord
        }
        console.log(payload)
        http.post(`/verifyUser`, payload)
            .then((response) => {
                console.log(response.data.message)
                login(response.data.message)
            })
            .catch ((error) => {
                console.log(error)
            })

    }

    return (
        <Container>
            <SectionOne>
                <H1>Sign in</H1>
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
                <Button onClick={() => verifyUser() }>Log In</Button>
            </SectionTwo>
        </Container>
    )
}

const Container = styled.div`
  background-color: #fff;
  width: 70vw;
  margin: 5em auto;
`

const SectionOne = styled.div`
  background-color: #684848;
  width: 14em;
  height: 14em;
  margin: 0 auto;
  border-radius: 50%;
  padding-top: 1px;
  position: absolute;
  left: 50vw;
`

const SectionTwo = styled.section`
  padding-top: 10em;
  width: 10em;
  text-align: center;
  margin: auto;
`

const H1 = styled.h1`
  margin: 1.5em;
  color: white;
  border: double;
  padding: 0.5em;
  height: 2.5em;
  width: 3em;
  text-align: center;
`

const Input = styled.input`
  width: 10em;
  height: 2em;
  margin-top: 2em;
  border: double grey;
`

const Button = styled.button`
  background-color: #684848;
  padding: 0.5em;
  width: 7em;
  border-style: none;
  margin-top: 1em;
  color: white;

  &:hover {
    background-color: #483833;
  }
`

export default SigninView
