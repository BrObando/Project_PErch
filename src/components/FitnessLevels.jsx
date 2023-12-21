import React from 'react'

import { Container, Typography, Box } from '@mui/material';

const FitnessLevels = () => {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Fitness Levels
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box width="30%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          <Typography variant="h6">Beginner</Typography>
          <p>
            The beginner fitness level is suitable for individuals who are new
            to exercise or have limited experience. It focuses on introducing
            basic exercises and building a foundation for more intense workouts.
          </p>
        </Box>
        <Box width="30%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          <Typography variant="h6">Intermediate</Typography>
          <p>
            The intermediate fitness level is designed for individuals with some
            experience in regular exercise. It includes a mix of moderate
            intensity workouts to challenge and improve overall fitness.
          </p>
        </Box>
        <Box width="30%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          <Typography variant="h6">Advanced</Typography>
          <p>
            The advanced fitness level is for seasoned fitness enthusiasts or
            athletes. It involves high-intensity workouts and advanced training
            techniques to push physical limits and achieve peak performance.
          </p>
        </Box>
      </Box>
    </Container>
  );
};

export default FitnessLevels;