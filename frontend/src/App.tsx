import React, {useState} from 'react'
import './App.css'
import styled from 'styled-components'
import './utils/global/global'
import {RoutingPaths} from './routes/RoutingPaths'
import FontStyle from './components/FontStyle'
import {UserContext} from './utils/global/provider/UserProviderOrg'
import NavigationBar from './components/navigation/NavigationBar'

const App: React.FC = (): JSX.Element => {

    const [authenticatedUser, setAuthenticatedUser] = useState<string>('')

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

        <Container>
            <UserContext.Provider value={{authenticatedUser, setAuthenticatedUser}}>
                <FontStyle/>
                <RoutingPaths>
                    {<NavigationBar/>}
                </RoutingPaths>
            </UserContext.Provider>
        </Container>

    )
}

export const Container = styled.div`
  padding-top: 0;
  margin-top: 0;
  background-color: #e0cdbf;
  height: 100vh;
  position: fixed;
  width: 100%;
`

export const Navigation = styled.div`
  width: 100vw;
  z-index: 1;
`

export default App
