import {JsonToTable} from 'react-json-to-table'
import {useState} from 'react'
import {MessageDataObject} from '../../utils/interfaces/MessageData'
import MessageService from '../../utils/api/service/MessageService'
import styled from 'styled-components'

function GetAllMessages() {
    const [messageObject, setMessageObject] = useState<Array<MessageDataObject>>([])

    function getAllMessages() {
        MessageService.getMessages()
            .then((response) => {
                console.log(response.data)
                setMessageObject(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Container>
            <h3>Get All Messages</h3>
            <button onClick={getAllMessages}>Refresh</button>
            <JsonToTable json={messageObject}/>
        </Container>
    )
}

const Container = styled.div`
  width: 50em;
  margin: 0 auto;

  tr {
    &:nth-child(odd) {
      background-color: #684848;
    }

    &:nth-child(even) {
      background-color: #e0cdbf;
    }
  }

  button {
    background-color: #684848;
    color: white;
    width: 7em;
    height: 2em;
    margin: 0.3em;
    border-style: none;
  }
`

export default GetAllMessages