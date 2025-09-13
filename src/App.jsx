import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' />
      </Routes>
    </div>
  )
}

export default App