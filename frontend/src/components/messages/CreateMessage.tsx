import {useState} from 'react'
import {Message, MessageDataObject} from '../../utils/interfaces/MessageData'
import MessageService from '../../utils/api/service/MessageService'
import styled from 'styled-components'
import {JsonToTable} from 'react-json-to-table'

function CreateMessage() {
    const [messages, setMessages] = useState<MessageDataObject>()
    const [subject, setSubject] = useState<string>('')
    const [privateMessage, setPrivateMessage] = useState<string>('')

    const payload: Message = {
        subject: subject,
        privateMessage: privateMessage
    }

    function createMessage() {
        MessageService.createNewMessage(payload)
            .then((response) => {
                console.log(response.data)
                setMessages(response.data)
            })
            .then((error) => {
                console.log(error)
            })
    }

    return (
        <Container>
            <input type="text"
                   value={subject}
                   placeholder="Subject"
                   onChange={event => setSubject(event.target.value)}/>
            <br/>
            <input type="text"
                   value={privateMessage}
                   placeholder="Private Message"
                   onChange={event => {
                       setPrivateMessage(event.target.value)
                   }}/>
            <br/>
            <button onClick={createMessage}>Send</button>
            <JsonToTable json={messages}/>
        </Container>
    )
}

const Container = styled.div`

`

export default CreateMessage