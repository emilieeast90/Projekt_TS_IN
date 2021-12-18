import {useState} from 'react'
import styled from 'styled-components'
import UserService from '../../utils/api/service/UserService'

function DeleteUser() {
    const [text, setText] = useState<string>('')
    const [id, setId] = useState<string>('')

    function deleteUser() {
        UserService.deleteUserById(id)
            .then((response) => {
                console.log(response.data.message)
                setText(response.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Article>
            <h3>Delete User</h3>
            <Section>
                ID:
                <input type="text"
                       value={id}
                       onChange={event => setId(event.target.value)}/>
            </Section>
            <Section>
                <button onClick={deleteUser}>Delete</button>
                <button onClick={() => setText('')}>Clear</button>
                <p>{text}</p>
            </Section>
        </Article>
    )
}

const Article = styled.article`
  padding: 0.5em;
`

const Section = styled.section`
  border-style: solid;
  border-width: 1px;
  padding: 0.5em;
  margin: 0.5em;
`

export default DeleteUser