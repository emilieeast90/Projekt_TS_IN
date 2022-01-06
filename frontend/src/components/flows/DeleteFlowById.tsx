import FlowService from '../../utils/api/service/FlowService'
import {useState} from 'react'
import styled from 'styled-components'

function DeleteFlowById() {
    const [id, setId] = useState<string>('')
    const [text, setText] = useState<string>('')

    function deleteFlow() {
        FlowService.deleteFlowById(id)
            .then((response) => {
                console.log(response.data.message)
                setText(response.data.message)
            })
            .catch((error) => {
                setText(error.message)
                console.log(error)
            })
    }

    return (
        <>
            <article>
                <h3>Delete Flow</h3>
                <Input type="text"
                       value={id}
                       placeholder='Id to remove'
                       onChange={event => setId(event.target.value)}
                />
                <Button onClick={deleteFlow}>Remove</Button>
                <P>{text}</P>
                <Button onClick={() => {
                    setText('')
                    setId('')
                }}>Clear
                </Button>
            </article>
        </>
    )
}

const P = styled.p`
  color: black;
`

const Input = styled.input`
  margin-left: 0.4em;
  border: solid 2px black;
  border-radius: 10%;
  background-color: #e0cdbf;
`

const Button = styled.button`
  background-color: #684848;
  border-style: none;
  padding: 0.5em;
  color: white;
  margin-top: 3em;
  margin-bottom: 1em;
`

export default DeleteFlowById