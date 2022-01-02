import React from 'react'
import {useNavigate} from 'react-router-dom'
import RoutingPath from '../routes/RoutingPathUrl'
import {useUserContext} from '../utils/global/provider/UserProviderOrg'
import styled from 'styled-components'

export const Profile = () => {
    const navigate = useNavigate()
    const {authenticatedUser, setAuthenticatedUser} = useUserContext()

    const logout = () => {
        localStorage.removeItem('username')
        setAuthenticatedUser('')
        navigate(RoutingPath.signinView)
    }

    return (
        <Article>
            <Section>
                <img src={'https://thispersondoesnotexist.com/image'} alt="Unknown person"/>
                <H1>{authenticatedUser.toUpperCase()}</H1>

            </Section>
            <SectionTwo>
                <Button onClick={() => navigate(RoutingPath.settingsView)}>Settings</Button>
                <Button onClick={() => navigate(RoutingPath.profileView)}>Profile</Button>
                <Button onClick={() => logout()}>Logout</Button>
            </SectionTwo>
        </Article>
    )
}

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

const Section = styled.section`
  margin: 5em 10em;
  border: double black;
  padding: 1.5em;
`

const SectionTwo = styled.section`
  grid-column: 2/3;
  margin: 8em 4em;
  border: double black;
  height: 8.5em;
  width: 7em;
  text-align: center;
`

const H1 = styled.h1`
  background-color: #684848;
  color: #fff;
  text-align: center;
  padding: 1.5em;
  width: 7em;
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

export default Profile