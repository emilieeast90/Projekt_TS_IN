import {useState} from 'react'
import {Flow, FlowDataObject, FlowObjectWithDate} from '../utils/interfaces/FlowData'
import FlowService from '../utils/api/service/FlowService'
import styled from 'styled-components'

function GetAllFlows() {
    const initUsername: string = ''
    const initPost: string = ''
    const initState: Array<FlowDataObject> = []
    const [flowObject, setFlowObject] = useState<Array<FlowDataObject>>(initState)
    const [username, setUsername] = useState<any>(initUsername)
    const [post, setPost] = useState<any>(initPost)

    function createFlows() {
        const payload: Flow = {
            username: username,
            post: post
        }
        FlowService.createFlow(payload)
            .then((response) => {
                console.log(response.data)
                setUsername(response.data.username)
                setPost(response.data.post)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function getAllFlows() {
        FlowService.getAllFlows()
            .then((response) => {
                console.log(response.data)
                setFlowObject(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <Section>
                <ArticleOne>
                    <Input type="text"
                           value={username}
                           placeholder="username"
                           onChange={event => setUsername(event.target.value)}/>
                    <br />
                    <Input type="text"
                           value={post}
                           placeholder="post here"
                           onChange={event => setPost(event.target.value)}/>
                    <br />
                    <ButtonOne onClick={() => {
                        createFlows()
                    }}>post
                    </ButtonOne>
                    <br/>
                    <ButtonTwo onClick={() => {
                        getAllFlows()
                    }}>Refresh</ButtonTwo>
                </ArticleOne>
                <ArticleTwo>
                    <P>{flowObject}</P>
                </ArticleTwo>
            </Section>
        </>
    )
}

const Section = styled.section`
    margin: 0 auto;
`

const ArticleOne = styled.article`
    text-align: center;
`

const ArticleTwo = styled.article`
    text-align: center;
`

const Input = styled.input`
    
`

const ButtonOne = styled.button`
    
`

const ButtonTwo = styled.button`
    
`

const P = styled.p`
    
`

export default GetAllFlows


/*
hämta username
hämta flow

skriva ut username och flow som ett inlägg


 */