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
        <>
            <button onClick={getFlows}>Refresh</button>
            <Container>
                <JsonToTable json={flowsDb}/>
            </Container>
        </>
    )
}

const Container = styled.div`
    
`

export default GetFlows