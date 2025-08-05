import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatedBackground, Navigation, Footer } from './components/homePage';
import { HomePage } from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <AnimatedBackground />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here as needed */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;