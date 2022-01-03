import styled from 'styled-components'
import GetAllMessages from '../../components/messages/GetAllMessages'
import CreateMessage from '../../components/messages/CreateMessage'
import GetMessageWithId from '../../components/messages/GetMessageWithId'
import UpdateMessageWithId from '../../components/messages/UpdateMessageWithId'
import DeleteMessageWithId from '../../components/messages/DeleteMessageWithId'

function MessageView() {

    return (
        <>
            <Container>
                <Section>
                    <Article>
                        <H1>Messages</H1>
                    </Article>
                    <Messages>
                        <GetAllMessages/>
                        <UpdateMessageWithId/>
                    </Messages>
                    <ArticleMessage>
                        <GetMessageWithId/>
                        <CreateMessage/>
                        <DeleteMessageWithId/>
                    </ArticleMessage>
                </Section>
            </Container>
        </>
    )
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: #fff;
  height: 100vh;
`

const Section = styled.section`
  margin: 0 auto;
`

const Article = styled.article`
  background-color: #fff;
`

const ArticleMessage = styled.article`
  position: absolute;
  bottom: 1em;
  width: 65em;
`

const Messages = styled.article`
  margin: 3em 3em auto;
  text-align: center;
  color: white;
`

const H1 = styled.h1`
  margin: 1em;
`

export default MessageView
