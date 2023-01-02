import React from 'react';
import PortfolioContainer from "./components/PortfolioContainer";
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function App() {
  return (
    // <div className='App'>
      <>
        <PortfolioContainer />
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
          {/* Only use this route when no other routes match. */}
          <Route
            path="*"
            element={<About />}
          />
        </Routes>
      </>
    // </div>
  );
}