import {CreateFlowObject, FlowDataObject} from '../../utils/interfaces/FlowData'
import {useState} from 'react'
import FlowService from '../../utils/api/service/FlowService'
import {JsonToTable} from 'react-json-to-table'


function UpdateFlowById() {
    const [flowObject, setFlowObject] = useState<FlowDataObject>()
    const [id, setId] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [post, setPost] = useState<string>('')

    function updateFlowById() {
        const payload: CreateFlowObject = {
            username: username,
            post: post
        }
        FlowService.updateFlowById(id, payload)
            .then((response) => {
                console.log(response.data)
                setFlowObject(response.data.id)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <h3>Update Flow</h3>
            <input type='text'
                   value={id}
                   placeholder='Id'
                   onChange={event => setId(event.target.value)}/>
            <br/>
            <input type='text'
                   value={username}
                   placeholder='Username'
                   onChange={event => setUsername(event.target.value)}/>
            <br/>
            <input type='text'
                   value={post}
                   placeholder='Post'
                   onChange={event => setPost(event.target.value)}/>
            <br/>
            <JsonToTable json={flowObject}/>
            <button onClick={updateFlowById}>Update</button>

        </>
    )
}

export default UpdateFlowById