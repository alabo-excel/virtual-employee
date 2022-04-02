import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div>
       <Navbar />
       <HeroSection />
     </div>
    </div>
  )
}

export default App
