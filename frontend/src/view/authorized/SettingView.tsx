import UpdateUser from '../../components/users/UpdateUser'
import DeleteUser from '../../components/users/DeleteUser'
import React from 'react'
import {SectionOne, SectionTwo} from './AdminView'
import GetUserWithId from '../../components/users/GetUserWithId'
import {Link} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPathUrl'
import styled from 'styled-components'
import UpdateFlowById from '../../components/flows/UpdateFlowById'

function SettingView() {
    return (
        <Container>
            <h1>Settings page</h1>
            <SectionTwo>
                <GetUserWithId/>
                <UpdateUser/>
                <DeleteUser/>
            </SectionTwo>
            <SectionOne>
                <UpdateFlowById/>
                <ul>
                    <li><Link to={RoutingPath.adminView}>Admin</Link></li>
                </ul>
            </SectionOne>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  z-index: -2;
  overflow: scroll;
  height: 100%;
  background-color: #fff;
  width: 70%;
  margin: 0 auto;
`

export default SettingView
