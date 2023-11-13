import React from 'react'
import { AppSidebar, AppFooter, AppHeader} from '../../../components/index'
import AccountSettingsContent from 'src/components/AccountSettingsContent'
//../../components/index

const AccountsPage = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AccountSettingsContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default AccountsPage
