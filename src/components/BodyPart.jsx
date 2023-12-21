import React from 'react'
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/reformer.png';


const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack 
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        border: bodyPart === item ? '3px solid white' : '',
        backgroundColor: '#060D0C',
        width: '280px',
        height: '280px', 
        cursor: 'pointer',
        gap: '47px',
    }} 
    onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
>
        <img src={Icon} alt ="dumbell" style={{ width: '40px', height: '40px'}} />
        <Typography fontSize="24px" fontWeight="bold"  color="white" textTransform="capitalize">{item}</Typography>
    </Stack>
    
  )
}

export default BodyPart