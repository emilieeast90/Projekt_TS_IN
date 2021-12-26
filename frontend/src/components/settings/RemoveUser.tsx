import {useState} from 'react'
import UserService from '../../utils/api/service/UserService'

const RemoveUser = () => {
    const [text, setText] = useState<string>('remove')
    const [id, setId] = useState<string>('')

    const removeUser = () => {
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
        <div>
            <h1>Remove</h1>
            ID:
            <input type="text"
                   value={id}
                   onChange={event => setId(event.target.value)}/>
            <button onClick={removeUser}>Remove Profile</button>
            <p>{text}</p>
        </div>
    )
}

export default RemoveUser