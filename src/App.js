import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Partnership from './pages/Partnership';
import Offer from './pages/Offer';


const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/offer" element={<Offer />} />
           <Route path="/partnership" element={<Partnership />} />
        </Routes>
     </>
  );
 };

 export default App;
 
 