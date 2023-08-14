import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ContestantForm from './routes/ContestantForm.tsx';
import About from './routes/About.tsx';
import Home from './routes/Home.tsx';
import Guidelines from './routes/Guidelines.tsx';


import './App.css';
import logo from './img/logo.png';

const App = () => {
  return (
    // nav bar
  <div>  
    <nav>
        <span><a href="/"><img src={logo} alt="n⭐️Style logo"/></a></span>
        <a href="/about" >
            About
          </a>
        <a href="/guidelines">
          Guidelines
        </a>
        <a href="/submit">Submit</a>

    </nav>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/guidelines" element={<Guidelines/>}/>
          <Route path="/submit" element={<ContestantForm/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>
        </BrowserRouter>

      </div>
    
  );
};

export default App;
