import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PageOne from './componentsH/PageOne'
import PageTwo from './componentsH/PageTwo'
import PageThree from './componentsH/PageThree'
import PageFour from './componentsH/PageFour'
import PageFive from './componentsH/PageFive'
import SidebarThree from './componentsH/SidebarThree'
const AppThree = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SidebarThree />
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/health2" element={<PageTwo />} />
          <Route path="/health3" element={<PageThree />} />
          <Route path="/health4" element={<PageFour />} />
          <Route path="/health5" element={<PageFive />} />
        </Routes>
      </div>
    </>
  )
}
export default AppThree
