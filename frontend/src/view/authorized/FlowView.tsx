import CreateFlow from '../../components/flows/CreateFlow'
import GetFlows from '../../components/flows/GetFlows'
import styled from 'styled-components'

function FlowView() {
    return (
        <Container>
            <CreateFlow/>
            <GetFlows/>
        </Container>
    )
}

const Container = styled.div`
  background-color: #fff;
  width: 70%;
  margin: 0 auto;
  overflow: scroll;
`

export default FlowView
