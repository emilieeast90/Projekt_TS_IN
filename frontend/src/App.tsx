import React, {useEffect, useState} from 'react'
import './App.css'
import GetUsers from './components/functionComponents/GetUsers'
import CreateUser from './components/functionComponents/CreateUser'
import UpdateUser from './components/functionComponents/UpdateUser'
import DeleteUser from './components/functionComponents/DeleteUser'
import styled from 'styled-components'
import './utils/styles/global'

const App: React.FC = (): JSX.Element => {
    const [authenticatedUser, setAuthenticatedUser] = useState<string>('')

    const checkIfUserIsAuthenticatedInBrowser = () => {
        const username = localStorage.getItem('username')
        if (typeof username === 'string') {
            setAuthenticatedUser(username)
        }
    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    }, [])

    return (
        <Container>
            <article>
                <SectionOne>
                    <h1>BookFace</h1>
                </SectionOne>
                <SectionTwo>
                    <GetUsers/>
                    <CreateUser/>
                </SectionTwo>
                <SectionTwo>
                    <UpdateUser/>
                    <DeleteUser/>
                </SectionTwo>

            </article>
        </Container>
    )
}

export const Container = styled.div`
  padding-top: 0;
  margin-top: 0;
  background-image: linear-gradient(to bottom, #fdeff9, #ec38bc, #7303c0, #03001e);
  height: 100vh;
`

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
`

export const SectionOne = styled.section`
  display: grid;
  grid-template-columns: repeat(1fr);
`

export const SectionTwo = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
`

export default App
