import React, {useState} from 'react'
import './App.css'
import styled from 'styled-components'
import './utils/global/global'
import {RoutingPaths} from './routes/RoutingPaths'
import Menu from './components/navigation/Menu'
import Toggle from './components/navigation/Toggle'
import FontStyle from './components/FontStyle'
import {UserContext} from './utils/global/provider/UserProviderOrg'

const App: React.FC = (): JSX.Element => {

    const [authenticatedUser, setAuthenticatedUser] = useState<string>('')
    const [navToggled, setNavToggled] = useState<boolean>(true)

    const handleNavToggle = () => {
        setNavToggled(!navToggled)

    }

    const isUserAuthorized = () => {
        const username = localStorage.getItem('username')
        if (typeof username === 'string') {
            setAuthenticatedUser(username)
        }
    }

    React.useEffect(() => {
        isUserAuthorized()
    }, [])

    return (
        <UserContext.Provider value={{authenticatedUser, setAuthenticatedUser}}>
            <Container>
                <FontStyle/>
                <Navigation>

                    <Toggle handleNavToggle={handleNavToggle}/>
                    <RoutingPaths>
                        {navToggled ? <Menu handleNavToggle={handleNavToggle}/> : undefined}
                    </RoutingPaths>

                </Navigation>
                <Article>

                </Article>
            </Container>
        </UserContext.Provider>
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
  z-index: 1;
`

const ButtonClick = styled.button`
  width: 100%;
  height: 100vh;
  z-index: -5;
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
`

export const Article = styled.article`
  background: #ffffff;
  width: 70%;
  height: 100%;
  margin: auto;
`

export default App
