import CreateFlow from '../../components/flows/CreateFlow'
import GetFlows from '../../components/flows/GetFlows'
import styled from 'styled-components'

function FlowView() {
    return (
        <Container>
            <CreateFlow/>
        </Container>
    )
}

const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 70%;
  margin: 0 auto;
`

export default FlowView
