import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import Intro from './Components/Intro/Intro'; 
import Contacts from './Components/Contacts/Contacts'; 
import Card from './Components/Card/Card'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Intro /> 
        <Menu />
        
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
          </Routes>
          </div>
          <Contacts />
      </div>
    </Router>
  );
}

export default App;