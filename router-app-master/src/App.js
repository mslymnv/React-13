import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './conponent/About';
import Contact from './conponent/Contact';
import Examples from './conponent/Examples';
import Home from './conponent/Home';

  const App = () => {
  return (
          <div>
      
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li> <li>
              <Link to="/about">Haqqında</Link>
            </li>
            <li>
              <Link to="/examples">İş nümunələri</Link>
            </li>
            <li>
              <Link to="/contact">Əlaqə məlumatları</Link>
            </li>
          </ul>
    

        <hr />
         <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/examples" element={<Examples/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    
  );
};

export default App;