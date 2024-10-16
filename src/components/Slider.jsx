// import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import { Box ,Typography } from '@mui/material';



const Slider = (imagenes) => {


  const [movieimagenes, setMovieimagenes] = useState(imagenes.images)
  
  
  return (
    <Swiper
      style={{marginBottom: 10, backgroundColor: 'black', height: 480, position: 'relative' }}
      modules={[Navigation,Pagination]}
      navigation= {{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      loop={true}
      
    >
     
     
       {
         movieimagenes.map((imagen) => ( 
        
          
      <SwiperSlide key={imagen.id}  style={{position: 'relative'}}>

          <img src={` https://image.tmdb.org/t/p/original/${imagen.backdrop_path}`}   alt="" />
          
        <Box >
        {/* <Typography  color='error'  component={'h1'} >{imagen.title}</Typography>   */}
        <Typography sx={{color: 'white'}}  component={'h1'} fontSize={18} fontWeight={400} width={800}  position={'absolute'}  top={100} left={80} >{imagen.overview}</Typography> 
          <Typography  top={30} color='warning' left={80} position={'absolute'} fontSize={30} fontWeight={800} textAlign={'end'} fontFamily={'sans-serif'} sx={{borderBottom: 5, borderBlockColor: 'white',cursor: 'pointer'}} >{imagen.title}</Typography>
        </Box>  

      </SwiperSlide>
          
        




         
              
            ))
          }
    
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default Slider;