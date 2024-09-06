import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Addemp from './components/Addemp'
import Intro from './components/Intro'
import Viewemp from './components/Viewemp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/add' element={<Addemp />} />
          <Route path='/view' element={<Viewemp/>}/>
        </Routes>
        </div>
    </>
  )
}

export default App
