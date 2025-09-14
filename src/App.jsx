import React from 'react'
import { ConfirmedEventsProvider } from './Context/ConfirmedEventsContext'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Events from './Components/Events'
import Footer from './Components/Footer'
import EventDetails from './Pages/EventDetails'
import Upcoming from './Pages/Upcoming'

const App = () => {
  return (
    <ConfirmedEventsProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/events/:type/:id' element={<EventDetails />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ConfirmedEventsProvider>
  )
}

export default App