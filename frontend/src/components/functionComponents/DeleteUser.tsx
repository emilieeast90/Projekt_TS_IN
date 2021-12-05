import {useState} from 'react'
import http from '../../utils/api/BookfaceApi'
import styled from 'styled-components'

function DeleteUser() {
    const [text, setText] = useState<string>('')
    const [id, setId] = useState<string>('')

    function deleteUser() {
        http.delete(`/users/${id}`)
            .then((response) => {
                console.log(response.data)
                setText(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <Article>
                <Section>
                    ID:
                    <input type='text'
                           value={id}
                           onChange={event => setId(event.target.value)} />
                </Section>
                <Section>
                    <button onClick={deleteUser}>Delete</button>
                    <button onClick={() => setText('')}>Clear</button>
                </Section>
            </Article>
        </>
    )
}

const Article = styled.article`
    padding: 0.5em;
  
`

const Section = styled.section `
  border-style: solid;
  border-width: 1px;
  padding: 0.5em;
  margin: 0.5em;
`

export default DeleteUser