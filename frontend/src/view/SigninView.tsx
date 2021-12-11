import styled from 'styled-components'
import {SectionOne} from './AdminView'
import {useState} from 'react'

function SigninView() {
    return (
        <Container>
            <SectionOne>
                <H1>Sign in page</H1>
            </SectionOne>
        </Container>
    )
}

const Container = styled.div`
  background-color: #fff;
  width: 70vw;
  margin: auto;
`

const Section = styled.section`

`

const H1 = styled.h1`
  text-align: center;
`

export default SigninView
