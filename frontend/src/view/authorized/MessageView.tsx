import styled from 'styled-components'
import {useState} from 'react'

function MessageView() {
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    return (
        <>
            <Container>
                <Section>
                    <Article>
                        <H1>Messages</H1>
                    </Article>
                    <Messages>
                        <P>{subject}</P>
                        <P>{message}</P>
                    </Messages>
                    <ArticleMessage>
                        <InputSubject type="text"
                                      value={subject}
                                      placeholder="Subject"
                                      onChange={(event) => setSubject(event.target.value)}/>
                        <br/>
                        <Textarea onChange={(event) => setMessage(event.target.value)}/>
                        <br/>
                        <Button>Send</Button>
                    </ArticleMessage>
                </Section>
            </Container>
        </>
    )
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  
`

const Section = styled.section`

`

const Article = styled.article`
  background-color: #fff;
`

const ArticleMessage = styled.article`
  position: fixed;
  bottom: 1em;
  width: 60em;
`

const Textarea = styled.textarea`
  width: 30em;
  height: 6em;
  margin: 1em;
`

const Messages = styled.article`
  background-color: #684848;
  width: 20em;
  text-align: center;
  color: white;
`

const P = styled.p`
  text-align: center;
`

const InputSubject = styled.input`
  margin: 1em;
`

const H1 = styled.h1`
  margin: 1em;
`

const Button = styled.button`
  margin-left: 28em;
`

export default MessageView
