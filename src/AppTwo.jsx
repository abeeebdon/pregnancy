import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import DashboardDriver from './components2/DashboardDriver'
import SidebarTwo from './components2/SidebarTwo'
import DashboardDriverTwo from './components2/DashboardDriverTwo'
import PassengerDetails from './components2/PassengerDetails'
import DriverThree from './components2/DriverThree'

const AppTwo = () => {
  const [showPassengerDetails, setShowPassengerDetails] = useState(false)

  const showPassenger = () => {
    setShowPassengerDetails(!showPassengerDetails)
  }
  return (
    <>
      <Header />
      <div className="flex">
        <SidebarTwo />
        <Routes>
          <Route path="/" element={<DashboardDriver />} />
          <Route path="/alert" element={<DashboardDriverTwo />} />
          <Route
            path="/take-ride"
            element={
              <DriverThree
                showPassenger={showPassenger}
                showPassengerDetails={showPassengerDetails}
              />
            }
          />
        </Routes>
      </div>
    </>
  )
}
export default AppTwo
