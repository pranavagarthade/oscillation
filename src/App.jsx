import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import SponsorsComponent from './components/SponsorsComponent ';
import EventsSection from './components/EventsSection';
import Faqs from './components/Faqs';
import OscillationEventPage from './components/OscillationEventPage';
import OscillationFooter from './components/OscillationFooter';


const Home = () => {
  return (
    <>
      <HomePage />
      <Faqs />
      <SponsorsComponent />
      <OscillationEventPage />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/sponsors" element={<SponsorsComponent />} />
        </Routes>
        <OscillationFooter />
      </div>
    </Router>
  );
};


export default App
