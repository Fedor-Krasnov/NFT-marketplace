import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection, TrendingCollection } from './components/sections';

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <TrendingCollection />
      <Footer />
    </Router>
  );
}

export default App;
