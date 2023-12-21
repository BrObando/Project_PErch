import React from 'react'

import {Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p='20px'>
        <Typography color = "black" fontWeight ="600" fontWeight="46px">
            FITNESS APP
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
            MOVEMENT  <br /> FOR YOU
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
            A PERSONALIZED WORKOUT EXPERIENCE
        </Typography>
        <Button  >EXPLORE NOW</Button>
        <Typography fontWeight={600}
        color="black"
        sx={{ opacity: 0.1, 
        display: 'block', xs: 'none'}}
        fontSize="180px" >
            PERCH STUDIO
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner