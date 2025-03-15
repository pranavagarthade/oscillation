import React from 'react'
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import SponsorsComponent from './components/SponsorsComponent ';
import EventsSection from './components/EventsSection';
import Faqs from './components/Faqs';
import OscillationEventPage from './components/OscillationEventPage';
import OscillationFooter from './components/OscillationFooter';


const App = () => {
  return (
    <div>
        <Navbar />
        <HomePage />
        <EventsSection />
        {/* <TeachersComponent /> */}
        <Faqs />
        <SponsorsComponent />
        <OscillationEventPage />
        <OscillationFooter />
        
    </div>
  )
}

export default App
