import {useState, useEffect} from 'react';
import {Box, Stack, Typography } from '@mui/material';

import { exercisesOptions, fetchData } from '../utils/fetchData';
import Card from './Card.jsx';


const Exercises = ({exercises, setExercises, bodyPart}) => {


  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);


  console.log(exercises)
  return (
    <Box id ="exercises"
    sx={{mt: { lg: '110px'}}} mt="50px" p="20px">
      <Typography variant="h3" mb="40px" fontFamily="Michroma, sans-serif" color="white" mb="73px" mt="30px" style={{ textAlign: 'center' }}>WORKOUT RESULTS</Typography>
      <Stack  direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center" >
         {Array.isArray(exercises) &&exercises.map((exercise, idx) => (
        <Card key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack>

      </Stack>
    </Box>
  )
}

export default Exercises