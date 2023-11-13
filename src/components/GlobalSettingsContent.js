import React, { Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
// routes config
import routes from '../routes'
import GlobalSettingsComponent from 'src/views/globalSettings/GlobalSettingsComponent'

const SettingsContent = () => {
  return (
    <CContainer lg>
      <GlobalSettingsComponent/>
    </CContainer>
  )
}

export default React.memo(SettingsContent)
