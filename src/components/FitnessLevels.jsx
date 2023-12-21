import React from 'react'

import { Container, Typography, Box } from '@mui/material';

const FitnessLevels = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography  fontFamily="Michroma, sans-serif"color = "white" variant="h4" gutterBottom>
        ALL LEVELS WELCOME
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box width="30%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          
        </Box>
        <Box width="30%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          
          <p>
            The intermediate class is designed for individuals with some
            experience in regular exercise. It includes a mix of moderate
            intensity workouts to challenge and improve overall fitness.
          </p>
        </Box>
        <Box width="30%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          
        </Box>
      </Box>
    </Container>
  );
};

export default FitnessLevels;