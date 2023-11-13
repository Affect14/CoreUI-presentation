import React from 'react'
import { AppSidebar, AppFooter, AppHeader} from '../../../components/index'
import AccountInfoComponent from 'src/views/Account/AccountInfoComponent'
import AccountHistory from 'src/views/Account/AccountHistory'
import AccountHistoryComponent from 'src/views/Account/AccountHistory'
//../../components/index

const AccountHistoryPage = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AccountHistoryComponent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default AccountHistoryPage
