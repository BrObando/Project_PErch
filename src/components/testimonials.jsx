import React from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';

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
      <Typography fontFamily="Michroma, sans-serif" color = "white" variant="h3"  mb="73px" mt="30px">TESTIMONIALS</Typography>
      <Box display="flex" justifyContent="center" gap={4}>
        {testimonialsData.map((testimonial) => (
          <Card key={testimonial.id} sx={{ maxWidth: 300, backgroundColor: 'brown'}}>
            <CardContent>
              <Typography  color = "white" variant="body2" color="text.secondary">
                {testimonial.quote}
              </Typography>
              <Typography  color = "white" variant="caption" color="text.secondary" mt={2}>
                - {testimonial.author}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Testimonials;