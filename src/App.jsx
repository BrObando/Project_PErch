import React from 'react'
import { Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css';


import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


import FitnessLevels from './components/FitnessLevels.jsx';

import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';




const App = () => {
  return (
    <Box width ='400px' sx={{ width: { xl: '1488px'}}} m="auto">
      <Navbar/>
    <Routes>
      < Route path ="/" element={<Home />}/>
    </Routes>
    < FitnessLevels />
    < Testimonials />
    < Contact />
    <Footer />
    
    </Box>
  )
}

export default App


