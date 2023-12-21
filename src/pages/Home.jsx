import React from 'react'
import {useState} from 'react';
import { Box } from '@mui/material';

import 'intersection-observer';
import Exercises from '../components/Exercises.jsx';
import HeroBanner from '../components/Herobanner.jsx';
import SearchExercises from '../components/SearchExercises.jsx';
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={setExercises}/>
        
    </Box>
  )
}

export default Home