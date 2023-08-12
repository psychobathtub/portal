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
    <BrowserRouter>
  
  <nav className="flex items-center justify-between flex-wrap bg-yellow-400 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
        <span className="font-semibold text-xl tracking-tight"><a href="/"><img src={logo} className="h-8 mr-3"/></a></span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-yellow-200 border-yellow-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-100 hover:text-white mr-4">
            About
          </a>
          <a href="/guidelines" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-100 hover:text-white mr-4">
            Guidelines
          </a>
        </div>
        <div>
          <a href="/su" className="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-100 border-yellow-100 hover:border-transparent hover:text-yellow-500 hover:bg-white mt-4 lg:mt-0">Submit</a>
        </div>
      </div>

    </nav>

      <div className="App" >

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/guidelines" element={<Guidelines/>}/>
          <Route path="/submit" element={<ContestantForm/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;