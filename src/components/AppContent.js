import React, { Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import Dashboard from 'src/views/dashboard/Dashboard'

const AppContent = () => {
  return (
    <CContainer lg>
      <Dashboard/>
    </CContainer>
  )
}

export default React.memo(AppContent)
