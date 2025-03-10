import React from 'react'
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import SponsorsComponent from './components/SponsorsComponent ';
import EventsSection from './components/EventsSection';
import OscillationFooter from './components/OscillationFooter';


const App = () => {
  return (
    <div>
        <Navbar />
        <HomePage />
        <EventsSection />
        {/* <TeachersComponent /> */}
        <SponsorsComponent />
        <OscillationFooter />
        
    </div>
  )
}

export default App
