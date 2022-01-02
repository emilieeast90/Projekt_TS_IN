import GetAllFlows from '../../components/GetAllFlows'
import styled from 'styled-components'

function UsersView() {
    return (
        <>
            <Div>
                <GetAllFlows/>
            </Div>
        </>
    )
}

const Div = styled.div`
  margin: 0 auto;
  padding-top: 5em;
  width: 70%;

`

export default UsersView
