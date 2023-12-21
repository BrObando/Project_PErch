// import React from 'react'
import {useState, useEffect} from 'react';
import Pagination from '@mui/material/pagination';
import {Box, Stack, Typography } from '@mui/material';

import { exercisesOptions, fetchData } from '../utils/fetchData';
import Card from './Card.jsx';


const Exercises = ({exercises, setExercises, bodyPart}) => {
  return (
    <Box id ="exercises"
    sx={{mt: { lg: '110px'}}} mt="50px" p="20px">
      <Typography variant="h3" mb="40px">Workout</Typography>
      <Stack  direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center" >
         {Array.isArray(exercises) &&exercises.map((exercise, idx) => (
        <Card key={idx} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises