import React from 'react'
import { AppSidebar, AppFooter, AppHeader} from '../../../components/index'
import AccountInfoComponent from 'src/views/Account/AccountInfoComponent'
//../../components/index

const AccountsPage = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AccountInfoComponent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default AccountsPage
