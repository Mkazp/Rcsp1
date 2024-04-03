import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import Intro from './Components/Intro/Intro';
import Contacts from './Components/Contacts/Contacts';
import Card from './Components/Card/Card';
import './App.css';
import lol from './Components/lol';

function App() {
  return (
    <Router>
      <div className="App">
        <Intro />
        <Menu />

        <div className="main-content-wrapper">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card" element={<Card />} />
              <Route path="/lol" element={<lol />} />
            </Routes>
          </div>
        </div>
        <Contacts />
      </div>
    </Router>
  );
}

export default App;
