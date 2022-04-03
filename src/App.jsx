import { useState } from 'react'
import './App.css'
import SectionOne from './components/developer-section/SectionOne'
import SectionTwo from './components/developer-section/SectionTwo'
import SectionThree from './components/developer-section/SectionThree'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Register from './components/Register'
import Footer from './components/Footer'
import Stacks from './components/Stacks'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Navbar />
        <HeroSection />
        <SectionOne />
        <Stacks />
        <SectionTwo />
        <Services />
        <SectionThree />
        <Register />
        <Footer />
      </div>
    </div>
  )
}

export default App
