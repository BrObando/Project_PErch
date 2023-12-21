import React from 'react'
import { Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css';

import ExcerciseDetail from './pages/ExcerciseDetail.jsx';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FitnessLevels from './components/FitnessLevels.jsx';




const App = () => {
  return (
    <Box width ='400px' sx={{ width: { xl: '1488px'}}} m="auto">
      <Navbar/>
    <Routes>
      < Route path ="/" element={<Home />}/>
      < Route path ="/excercise/:id" element={<ExcerciseDetail />}/>
    </Routes>
    < FitnessLevels />
    <p>Testimonials</p>
    <p>Contact</p>
    <Footer />
    
    </Box>
  )
}

export default App


