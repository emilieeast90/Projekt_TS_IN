import {useState} from 'react'
import http from '../../utils/api/BookfaceApi'

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
            <article>
                <section>
                    ID:
                    <input type='text'
                           value={id}
                           onChange={event => setId(event.target.value)} />
                </section>
                <section>
                    <button onClick={deleteUser}>Delete</button>
                    <button onClick={() => setText('')}>Clear</button>
                </section>
            </article>
        </>
    )
}

export default DeleteUser