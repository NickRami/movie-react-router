// import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import { Navigation, Pagination} from 'swiper/modules';
import { Box ,Typography } from '@mui/material';



const Slider = () => {

  const [proxiMovie, setProxiMovies] = useState([])
  console.log(proxiMovie);
  
  useEffect(()=>{
    const fetchProximamentMovie = async() => {
      try {
        const options = {
          method: 'GET',
          headers: { 
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
          }
        };
      
        const resp = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1",options)
        const data = await resp.json()
        
        setProxiMovies(data.results)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchProximamentMovie()
  },[]) 


  return (
    <Swiper
    className='nose'
      style={{ backgroundColor: 'black', height: 'auto', position: 'relative'}}
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
          proxiMovie.map((movie) => (
           <SwiperSlide style={{position:'relative'}}>
              <img  style={{objectFit:'cover',maxHeight:700, height:'auto'}} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path
}`} alt="" />
              <Typography sx={{position:'absolute'}} color='warning' left={100} top={100}>{`${movie.title} `  }</Typography>
              <Typography sx={{position:'absolute',color:'white'}} left={100} top={130} width={360} >{movie.overview}</Typography>
           </SwiperSlide> 
          ))
        }

     
         
    
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default Slider;

