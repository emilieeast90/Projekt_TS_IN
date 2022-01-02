import FlowService from '../../utils/api/service/FlowService'
import {useState} from 'react'
import {JsonToTable} from 'react-json-to-table'
import {FlowDataObject} from '../../utils/interfaces/FlowData'

function GetFlowById() {
    const [post, setPost] = useState<FlowDataObject>()
    const [id, setId] = useState<string>('')

    function getFlowById() {
        FlowService.getFlowById(id)
            .then((response) => {
                console.log(response.data)
                setPost(response.data)
            })
            .then((error) => {
                console.log(error)
            })
    }

    return (
        <>
            id:
            <input type="text"
                   value={id}
                   placeholder="Id"
                   onChange={event => setId(event.target.value)}/>
            <button onClick={getFlowById}>Get One</button>
            <button onClick={() => setPost(undefined)}>Clear</button>
            <JsonToTable json={post}/>
        </>
    )
}

export default GetFlowById