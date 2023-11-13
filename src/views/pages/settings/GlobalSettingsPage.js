import React from 'react'
import { AppSidebar, AppFooter, AppHeader} from '../../../components/index'
import SettingsContent from '../../../components/GlobalSettingsContent'
//../../components/index

const GlobalSettings = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <SettingsContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default GlobalSettings
