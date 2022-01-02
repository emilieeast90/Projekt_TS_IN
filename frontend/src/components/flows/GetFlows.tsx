import FlowService from '../../utils/api/service/FlowService'
import {JsonToTable} from 'react-json-to-table'
import {FlowDataObject} from '../../utils/interfaces/FlowData'
import {useState} from 'react'
import styled from 'styled-components'

function GetFlows() {
    const initialState: Array<FlowDataObject> = []

    const [flowsDb, setFlowsDb] = useState<Array<FlowDataObject>>(initialState)

    function getFlows() {
        FlowService.getAllFlows()
            .then((response) => {
                console.log(response.data)
                setFlowsDb(response.data)
            })
            .then((error) => {
                console.log(error)
            })
    }

    return (
        <Container>
            <Article>
                <button onClick={getFlows}>Refresh</button>
                <JsonToTable json={flowsDb}/>
            </Article>
        </Container>
    )
}


const Container = styled.div`
  position: relative;
  z-index: -2;
  overflow: scroll;
  height: 100%;
  background-color: #fff;
  width: 70%;
  margin: 0 auto;
`

const Article = styled.article`
  width: 90%;
  z-index: 1;

  table {
    width: auto;
    height: auto;
    overflow: scroll;
  }
`

export default GetFlows