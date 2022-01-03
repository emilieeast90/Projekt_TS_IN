import MessageService from '../../utils/api/service/MessageService'
import {useState} from 'react'
import styled from 'styled-components'

function DeleteMessageWithId() {
    const [id, setId] = useState<string>('')
    const [text, setText] = useState<string>('')

    function deleteMessage() {
        MessageService.deleteMessage(id)
            .then((response) => {
                console.log(response.data.message)
                setText(response.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Container>
            <input type="text"
                   value={id}
                   placeholder="Id"
                   onChange={event => setId(event.target.value)}
            />
            <Button onClick={deleteMessage}>Remove</Button>
            <Button onClick={() => {
                setText('')
                setId('')
            }}>Clear
            </Button>
            <p>{text}</p>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
`

const Button = styled.button`
  background-color: #684848;
  border-style: none;
  color: white;
  margin: 1em;
  height: 1.7em;
  width: 5em;
`

export default DeleteMessageWithId