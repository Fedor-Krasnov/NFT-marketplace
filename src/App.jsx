import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/sections';

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <Footer />
    </Router>
  );
}

export default App;
