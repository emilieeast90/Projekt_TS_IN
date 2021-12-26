import styled from 'styled-components'
import {useState} from 'react'

function FlowView() {
    const [message, setMessage] = useState<string>('')
    return (
        <Container>
            <H1>Users flow</H1>
            <Section>
                <ArticleFlow>
                    <ItemThree/>
                    <P>What's up? Tell the world...</P>
                    <ItemTwo>
                        <ButtonTwo onClick={() => {
                            setMessage('')
                        }}>Clear</ButtonTwo>
                    </ItemTwo>
                    <Textarea placeholder="Create Post here..."
                              onChange={(event) => setMessage(event.target.value)}/>
                    <ItemOne>
                        <ButtonOne>Post</ButtonOne>
                    </ItemOne>
                    <br/>
                </ArticleFlow>
                <article>
                    <Post>
                        <Pp>{message}</Pp>
                    </Post>
                </article>
            </Section>
        </Container>
    )
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`

const Section = styled.section`

`

const ArticleFlow = styled.article`
  width: 50em;
  height: 10em;
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

const Textarea = styled.textarea`
  width: 40em;
  height: 5em;
  margin-left: 1em;
`

const Post = styled.div`
  width: 50em;
  height: 5em;
  margin: 0 auto;
  color: white;
  background-color: #684848;
  
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

const H1 = styled.h1`
    text-align: center;
`

const P = styled.p`
  margin-left: 1em;
`

const Pp = styled.p`
  padding: 1em;
`

export default FlowView
