import styled from 'styled-components'
import GetUsers from '../../components/users/GetUsers'
import GetUserWithId from '../../components/users/GetUserWithId'

function UsersView() {
    return (
        <>
            <Div>
                <Section>
                    <GetUsers/>
                    <GetUserWithId/>
                </Section>
            </Div>
        </>
    )
}

const Div = styled.div`
  margin: 0 auto;
  padding-top: 5em;
  width: 70%;
  background-color: #fff;
  height: 100vh;
`

const Section = styled.section`
    margin: 5em;
`

export default UsersView
