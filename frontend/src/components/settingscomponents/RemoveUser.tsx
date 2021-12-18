import {useState} from 'react'
import UserService from '../../utils/api/service/UserService'


const RemoveUser = () => {
    const [text, setText] = useState<string>('')
    const [id, setId] = useState<string>('')

    const removeUser = () => {
        UserService.deleteUserById(id)
            .then((response) => {
                console.log(response.data)
                setText(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>Remove</h1>
            <button onClick={removeUser}>Remove Profile
            </button>
            <p>{text}</p>
        </div>
    )
}

export default RemoveUser