import React from 'react'

import {Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p='20px'>
        <Typography color = "white" fontWeight ="600" fontFamily="Michroma, sans-serif">
            FITNESS APP
        </Typography>
        <Typography color = "white" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px'}}} mb="23px" mt="30px" fontFamily="Michroma, sans-serif">
            FUNCTIONAL <br/> MOVEMENTS
        </Typography>
        <Typography color = "white" fontWeight ="600"  mb={3} fontFamily="Michroma, sans-serif">
            START NOW
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner