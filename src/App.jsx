import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/sidebar'
import Content from './components/content'
import Sos from './components/Sos'
import { Routes, Route } from 'react-router-dom'
import DriverDetails from './components/DriverDetails'
import SosDriver from './components/SosDriver'

function App() {
  const [count, setCount] = useState(0)
  const [showDriverDetails, setShowDriverDetails] = useState(false)

  const showDriver = () => {
    setShowDriverDetails(!showDriverDetails)
  }
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/sos" element={<Sos />} />
          <Route
            path="/sosdriver"
            element={
              <SosDriver
                showDriver={showDriver}
                showDriverDetails={showDriverDetails}
              />
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
