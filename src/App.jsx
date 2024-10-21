import React from 'react'

import Dashboardheader from './components/Dashboardheader/Dashboardheader'
import NavigationMenu from './components/NavigationMenu/NavigationMenu'
import CustomerHeader from './components/CustomerHeader/CustomerHeader'
import CustomerSummary from './components/CustomerSummary/CustomerSummary'
import MainDashboard from './components/MainDashboard/MainDashboard'






function App() {

  return (
    <>
    <Dashboardheader/>
    <NavigationMenu/>
    <CustomerHeader/>
    <CustomerSummary/>
    <MainDashboard/>

    </>
  )
}

export default App
