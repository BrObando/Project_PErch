import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import Fit from '../assets/images/fit.webp';

const Contact = () => {
  const emailAddress = 'perchstudio@gmail.com'; 

  return (
    <Container  mt={5}>
      <Box display="flex" flexDirection="row" >
        <Box flexGrow={1}>
        <Typography  fontFamily="Michroma, sans-serif" color = "white" variant="h3"  mb="73px" mt="30px">PERCH STUDIO</Typography>
          <Typography fontFamily="Michroma, sans-serif" color = "white" variant="body1" paragraph>
            If you have any questions or concerns, please feel free to{' '}
            <Link href={`mailto:${emailAddress}`} color="primary">
              contact us
            </Link>
            .
          </Typography>
        </Box>

        
        <Box alignSelf="flex-end" mb={4}>
          <img
            src={Fit}
            alt="contact" className="contact"
            style={{ width: '600px', maxWidth: '700px', height: '700px' }} mt="40px"
          />
        
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;