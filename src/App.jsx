import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'
import FallingStars from './components/falling-stars/FallingStars.jsx'

function App() {
  return (
    <>
      <FallingStars />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App