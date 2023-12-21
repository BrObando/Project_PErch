import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      author: 'user',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel.',
    },
    {
      id: 2,
      author: 'user',
      quote: 'In hac habitasse platea dictumst. Suspendisse potenti. Nullam nec tellus.',
    },
    {
      id: 3,
      author: 'user',
      quote: 'Vivamus euismod urna nec neque tincidunt, vitae commodo ex varius.',
    },
    {
      id: 4,
      author: 'user',
      quote: 'Integer ut purus sit amet lectus euismod euismod sit amet non mauris.',
    },
  ];

  return (
    <Container  mt={5}>
       <Typography variant="h3" mb="40px" fontFamily="Michroma, sans-serif" color="white" mt="30px" style={{ textAlign: 'center' }}>TESTIMONIALS</Typography>
      <Box display="flex" justifyContent="center">
        <Box width="30%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          <p>"This fitness app has been a total game-changer for me! With its diverse workouts, 
            staying fit became both enjoyable and achievable.
             I've not only met my fitness goals but also found a sustainable routine that fits seamlessly into my busy lifestyle." - CHATGPT</p>
        </Box>
        <Box width="30%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          
          <p>
          "I've tried many fitness apps, but none compare to the user-friendly experience and effectiveness of this one. The intuitive interface, video demonstrations, and adaptive workouts kept me engaged and motivated. 
          This app has transformed my fitness journey, making progress tracking and goal achievement a breeze." - CHATGPT
          </p>
        </Box>
        <Box width="30%" p={3} m={2} border="1px solid #ddd" borderRadius="8px">
          <p>"As a busy professional, this fitness app has become my go-to solution for staying in shape. Its convenience, coupled with a comprehensive range of exercises, has made fitness a seamless part of my daily routine. 
            I'm genuinely impressed by the results and grateful for the accessibility it has brought to my health and well-being." -CHATGPT</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Testimonials;