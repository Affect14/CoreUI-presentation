import React, { Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
// routes config
import routes from '../routes'
import AccountSettingsComponent from 'src/views/AccountSettings/AccountSettingsComponent'

const AccountSettingsContent = () => {
  return (
    <CContainer lg>
      <AccountSettingsComponent/>
    </CContainer>
  )
}

export default React.memo(AccountSettingsContent)
