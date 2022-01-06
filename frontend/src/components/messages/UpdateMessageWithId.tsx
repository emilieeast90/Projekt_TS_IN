import MessageService from '../../utils/api/service/MessageService'
import {useState} from 'react'
import {CreateMessageObject, MessageDataObject} from '../../utils/interfaces/MessageData'
import {JsonToTable} from 'react-json-to-table'
import styled from 'styled-components'

function UpdateMessageWithId() {
    const [messages, setMessages] = useState<MessageDataObject>()
    const [id, setId] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [privateMessage, setPrivateMessage] = useState<string>('')

    const payload: CreateMessageObject = {
        subject: subject,
        privateMessage: privateMessage
    }

    function updateMessage() {
        MessageService.updateMessage(id, payload)
            .then((response) => {
                console.log(response.data)
                setMessages(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Container>
            <h3>Update Message</h3>
            <input type="text"
                   value={id}
                   placeholder="Id"
                   onChange={event => setId(event.target.value)}
            />
            <input type="text"
                   value={subject}
                   placeholder="Subject"
                   onChange={event => setSubject(event.target.value)}
            />
            <input type="text"
                   value={privateMessage}
                   placeholder="Private Message"
                   onChange={event => setPrivateMessage(event.target.value)}
            />
            <button onClick={updateMessage}>Edit</button>
            <JsonToTable json={messages}/>

        </Container>
    )
}

const Container = styled.div`
  width: 65em;
  text-align: center;

  table {
    width: 70em;
    margin: 1em;
  }

  td {
    border: solid 2px white;
  }

  tr {

    &:nth-child(odd) {
      background-color: #684848;
      color: white;
    }

    &:nth-child(even) {
      background-color: #e0cdbf;
    }
  }

  button {
    background-color: #684848;
    color: white;
    width: 6em;
    height: 1.7em;
    border-style: none;
  }
`

export default UpdateMessageWithId