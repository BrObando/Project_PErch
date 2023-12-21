import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      color="black"
      py={3} 
      textAlign="center" 
    >
      <Container>
        <Typography  fontFamily="Michroma, sans-serif" color = "white" variant="body2">
          PERCH STUDIO | BRIANNA OBANDO | 2023
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;