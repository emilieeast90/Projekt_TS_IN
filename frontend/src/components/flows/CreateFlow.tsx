import {useState} from 'react'
import {Flow, FlowDataObject} from '../../utils/interfaces/FlowData'
import FlowService from '../../utils/api/service/FlowService'
import styled from 'styled-components'
import GetFlows from './GetFlows'

function CreateFlow() {

    const [flowObject, setFlowObject] = useState<FlowDataObject>()
    const [username, setUsername] = useState<string>('')
    const [userFlow, setUserFlow] = useState<string>('')

    function createFlow() {
        const payload: Flow = {
            username: username,
            post: userFlow
        }

        FlowService.createFlow(payload)
            .then((response) => {
                console.log(response.data)
                setFlowObject(response.data)
                setUsername(response.data.username)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Container>
            <Section>
                <ArticleFlow>
                    <ItemThree/>
                    <P>What's up? Tell the world...</P>
                    <ItemTwo>
                        <ButtonTwo onClick={() => {
                            setUserFlow('')
                        }}>Clear</ButtonTwo>
                    </ItemTwo>
                    <ItemOne>
                        <ButtonOne onClick={createFlow}>Post</ButtonOne>
                    </ItemOne>
                    <InputOne type="text"
                              value={username}
                              placeholder="Username"
                              onChange={event => setUsername(event.target.value)}/>
                    <br/>
                    <InputTwo type="text"
                              placeholder="Create Post here..."
                              value={userFlow}
                              onChange={event => setUserFlow(event.target.value)}/>
                    <br/>
                    <Post>
                        <GetFlows/>
                    </Post>
                </ArticleFlow>
            </Section>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  margin: 5em 0 auto;
  padding-top: 1em;
`

const ArticleFlow = styled.article`
  width: 90%;
  height: 12em;
  margin: 0 auto;
  border-style: solid;
  border-width: 1px;
  box-shadow: 4px 2px 2px slategrey;
`

const ItemOne = styled.div`
  background-color: #684848;
  border-radius: 50%;
  float: right;
  width: 6em;
  height: 6em;
  margin-right: 1em;
  margin-bottom: 1em;
`

const ItemTwo = styled.div`
  background-color: #e0cdbf;
  border-radius: 50%;
  float: right;
  width: 5em;
  height: 5em;
  margin-right: 1em;
`

const ItemThree = styled.div`
  background-image: linear-gradient(to right, #e0cdbf, #684848);
  border-radius: 50%;
  float: right;
  width: 2em;
  height: 2em;
  margin-right: 5em;
  margin-top: 1em;
`

const Post = styled.div`
  margin: 1em auto;
  color: white;

  table {
    overflow: scroll;
    height: 100%;
    border: solid 4px white;
  }
  
  td {
    border: solid 4px white;
  }
  
  tr {
    border: solid 6px white;
    height: 3em;
    &:nth-child(even) {
      background-color: #684848;
    }

    &:nth-child(odd) {
      background-color: #e0cdbf;
      color: #000;
    }
  }

  button {
    background-color: #684848;
    border-style: none;
    padding: 0.5em;
    color: white;
    float: right;
    margin-top: 3em;
    margin-bottom: 1em;
  }
`

const InputTwo = styled.input`
  width: 30em;
  height: 5em;
  margin-left: 1em;
`

const ButtonOne = styled.button`
  margin-top: 3em;
  margin-left: 2em;
  background-color: #684848;
  border-style: none;
  color: white;

  button:hover {
    background-color: black;
  }
`

const ButtonTwo = styled.button`
  margin-top: 2.5em;
  margin-left: 1.5em;
  background-color: #e0cdbf;
  border-style: none;
  color: black;

  button:hover {
    background-color: white;
  }
`

const InputOne = styled.input`
  margin-left: 1em;
  margin-bottom: 0.2em;
`

const Section = styled.section`
  height: 100vh;
  overflow: scroll;
`

const P = styled.p`
  margin-left: 1em;
`

export default CreateFlow