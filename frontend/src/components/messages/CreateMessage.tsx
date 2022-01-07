import {useState} from 'react'
import {Message, MessageDataObject} from '../../utils/interfaces/MessageData'
import MessageService from '../../utils/api/service/MessageService'
import styled from 'styled-components'
import {JsonToTable} from 'react-json-to-table'

function CreateMessage() {
    const [messages, setMessages] = useState<MessageDataObject>()
    const [subject, setSubject] = useState<string>('--')
    const [privateMessage, setPrivateMessage] = useState<string>('---')

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
            <JsonToTable json={messages}/>
            <p>Subject</p>
            <InputSubject type="text"
                          value={subject}
                          placeholder="Subject"
                          data-testid='subject-input'
                          onChange={event => setSubject(event.target.value)}/>
            <br/>
            <InputText value={privateMessage}
                       placeholder="Private Message"
                       data-testid='pm-input'
                       onChange={event => {
                           setPrivateMessage(event.target.value)
                       }}/>
            <br/>
            <button onClick={createMessage}
                    data-testid="create-button">Send
            </button>
        </Container>
    )
}

const Container = styled.div`
  background-color: #e0cdbf;
  border: solid 1px #684848;
  padding: 1em;
  width: 22em;
  margin: 0 auto;
`

const InputSubject = styled.input`
  width: 15em;
`

const InputText = styled.textarea`
  width: 25em;
  height: 8em;
  margin-top: 1em;
`

export default CreateMessage