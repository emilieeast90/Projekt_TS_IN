import GetUsers from '../components/functionComponents/GetUsers'
import CreateUser from '../components/functionComponents/CreateUser'
import UpdateUser from '../components/functionComponents/UpdateUser'
import DeleteUser from '../components/functionComponents/DeleteUser'
import styled from 'styled-components'
import React from 'react'

function AdminView() {
    return (
        <Container>
            <Navigation>
                <SectionOne>
                    <H1>BookFace</H1>
                </SectionOne>
            </Navigation>
            <Article>
                <SectionTwo>
                    <GetUsers/>
                    <CreateUser/>
                </SectionTwo>
                <SectionTwo>
                    <UpdateUser/>
                    <DeleteUser/>
                </SectionTwo>
            </Article>
        </Container>
    )
}

export const Container = styled.div`
  padding-top: 0;
  margin-top: 0;
  background-color: #e0cdbf;
  height: 100vh;
  width: 100vw;
  position: fixed;
`

export const Navigation = styled.div`
  background-color: #684848;
  height: 3em;
`

export const Article = styled.article`
  background: #ffffff;
  width: 70%;
  height: 100%;
  margin: auto;
`

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
`

export const SectionOne = styled.section`
  display: grid;
  grid-template-columns: repeat(1fr);
  width: 50vw;
  margin: auto;
`

export const SectionTwo = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  margin: auto;
`

export default AdminView
