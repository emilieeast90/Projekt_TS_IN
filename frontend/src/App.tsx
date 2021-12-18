import React, {useEffect, useState} from 'react'
import './App.css'
import styled from 'styled-components'
import './utils/global/global'
import {NavigationBar} from './components/NavigationBar'
import {Routing} from './routes/Routing'
import Menu from './components/Menu'
import Toggle from './components/Toggle'
import FontStyle from './components/FontStyle'

const App: React.FC = (): JSX.Element => {
    const [authenticatedUser, setAuthenticatedUser] = useState<string>('')
    const [navToggled, setNavToggled] = useState<boolean>(false)

    const handleNavToggle = () => {
        setNavToggled(!navToggled)
    }

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
            <FontStyle />
            <Navigation>
                <Toggle handleNavToggle={handleNavToggle}/>
                <Routing>
                    {navToggled ? <Menu handleNavToggle={handleNavToggle}/> : undefined}
                </Routing>
            </Navigation>
            <Article>

            </Article>
        </Container>
    )
}

export const Container = styled.div`
  padding-top: 0;
  margin-top: 0;
  background-color: #e0cdbf;
  height: 100vh;
  width: 100vw;
`

export const Navigation = styled.div`
  background-color: #684848;
  height: 4em;
  position: fixed;
  top: 0;
  width: 100vw;
`

export const Article = styled.article`
  background: #ffffff;
  width: 70%;
  height: 100%;
  margin: auto;
`

export default App
