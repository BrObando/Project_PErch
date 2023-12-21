import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

const Card = ({excercise}) => {
  return (
    <Link className="excercise-card" to={`/excercise/$exercise.id`}>
        <img src={excercise.gifUrl} alt={excercise.name} Loading="lazy" />
    </Link>
  )
}

export default Card