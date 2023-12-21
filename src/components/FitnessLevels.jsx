import React from 'react'

import { Container, Typography, Box } from '@mui/material';

const FitnessLevels = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" mb="40px" fontFamily="Michroma, sans-serif" color="white" mb="73px" mt="30px" style={{ textAlign: 'center' }}>
        ALL LEVELS WELCOME
      </Typography>
      <Box display="flex" justifyContent="center">
        
        <Box width="70%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          
          <p>
            THE PERCH STUDIO APP IS DEISGNED FOR EVERYONE. WHETHER YOU'RE A SEASONED ATHLETE OR JUST STARTING. THERE IS A WORKOUT FOR YOU!
          </p>
        </Box>
        
      </Box>
    </Container>
  );
};

export default FitnessLevels;