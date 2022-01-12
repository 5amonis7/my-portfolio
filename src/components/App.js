import {  Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './home';
import Nav from './nav';
import About from './about';
import Resume from './resume';
import Contact from './contact';
import './styles/main.scss'

function App() {
  return (
      <div>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
      </div>
  );
}

export default App;
