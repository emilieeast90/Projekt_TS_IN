import GetUsers from '../../components/users/GetUsers'
import UpdateUser from '../../components/users/UpdateUser'
import DeleteUser from '../../components/users/DeleteUser'
import styled from 'styled-components'
import React from 'react'
import GetUserWithId from '../../components/users/GetUserWithId'

function AdminView() {
    return (
        <Container>
            <Article>
                <section>
                    <SectionOne>
                        <H1>Logged in as Admin</H1>
                    </SectionOne>
                </section>
                <SectionTwo>
                    <GetUserWithId/>
                    <GetUsers/>
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
  margin-top: 5em;
  background-color: #e0cdbf;
  height: 100%;
  overflow: scroll;
  width: 100vw;
  position: fixed;
  z-index: -2;
`

export const Article = styled.article`
  background: #ffffff;
  width: 70%;
  height: 100%;
  margin: auto;
  overflow: scroll;
`

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
`

export const SectionOne = styled.section`
  display: grid;
  grid-template-columns: repeat(1fr);
  width: 40%;
  margin: auto;
`

export const SectionTwo = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  margin: auto;
`

export default AdminView
