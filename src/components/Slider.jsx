// import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import { Box ,Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';



const Slider = () => {

  const {data} = useLoaderData()
  
  
  return (
    <Swiper
      style={{marginBottom: 20, backgroundColor: 'black', height: 480, position: 'relative' }}
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
         data.results.map((imagen) => ( 
        
          
           <SwiperSlide  key={imagen.id}  style={{position: 'relative', cursor:'pointer'}}>
          <img src={` https://image.tmdb.org/t/p/original/${imagen.backdrop_path}`} style={{objectFit:'cover'}}  alt={imagen.backdrop_path} />
          
        <Box >

        <Typography sx={{color: 'white',borderBottom: '5px #6256CA solid', display:'inline-block'}}  component={'h1'} fontSize={18} fontWeight={500}   position={'absolute'}  top={40} left={80} >{imagen.name}</Typography> 
        <Typography sx={{color: 'white'}}  component={'h4'}  fontWeight={400} width={800}  position={'absolute'}  top={100} left={80} >{imagen.overview}</Typography> 
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


export const Estrenos = async () => { 


  const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
    }
  };

  const resp = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",options)
  const data = await resp.json()
  
  return {data}
}