import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

const Card = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} />

       <Typography 
       ml="15px" color="white" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name} </Typography> 
    </Link>
    
  )
}

export default Card