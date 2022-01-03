import MessageService from '../../utils/api/service/MessageService'
import {useState} from 'react'
import {MessageDataObject} from '../../utils/interfaces/MessageData'
import {useLocation} from 'react-router-dom'
import {JsonToTable} from 'react-json-to-table'
import styled from 'styled-components'

const GetMessageWithId = () => {
    const search = useLocation().search
    const subject = new URLSearchParams(search).get('subject')

    const [message, setMessage] = useState<MessageDataObject>()
    const [id, setId] = useState<string>('')

    function getMessage() {
        MessageService.getMessageWithId(id)
            .then((response) => {
                console.log(response.data)
                setMessage(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Container>
            <Input type="text"
                   value={id}
                   placeholder="Search Id"
                   onChange={event => setId(event.target.value)}/>
            <br/>
            <button onClick={getMessage}>Search</button>
            <br/>
            <button onClick={() => setMessage(undefined)}>Clear</button>
            <JsonToTable json={message}/>
            <p>{subject}</p>
        </Container>
    )
}

const Container = styled.div`
  width: 65em;
  text-align: center;

  table {
    width: 70em;
    margin: 0 auto;
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
    width: 7em;
    height: 2em;
    margin: 0.3em;
    border-style: none;
  }
`

const Input = styled.input`
  border: solid 2px black;
`

export default GetMessageWithId