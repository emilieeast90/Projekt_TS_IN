import UpdateUser from '../components/functionComponents/UpdateUser'
import DeleteUser from '../components/functionComponents/DeleteUser'
import React from 'react'
import {SectionOne, SectionTwo} from './AdminView'
import RemoveUser from '../components/settingscomponents/RemoveUser'

function SettingView() {
    return (
        <div>
            <h1>Settings page</h1>
            <SectionTwo>
                <UpdateUser/>
                <DeleteUser/>
            </SectionTwo>
            <SectionOne>
                <RemoveUser />
            </SectionOne>
        </div>
    )
}

export default SettingView
