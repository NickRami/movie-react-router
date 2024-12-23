// import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import { Box ,Button,Typography } from '@mui/material';
import 'swiper/css'; 
import { useNavigate } from 'react-router-dom';


const Slider = () => {

  const [proxiMovie, setProxiMovies] = useState([])
  
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
      
        const resp = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=es`,options)
        const data = await resp.json()
        
        setProxiMovies(data.results)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchProximamentMovie()
  },[]) 

        const navigate = useNavigate()
        
      const handleNavigate = (id) => {
        navigate(`movies/${id}`)
        console.log(id);
        
      }

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
      loop={true}
      
    >
     
        {
          proxiMovie.map((movie) => (
           <SwiperSlide key={movie.id} style={{position:'relative'}} >
             
              <img style={{objectFit:'cover',maxHeight:700, height:'auto'}}  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={`${movie.title}`} />
              
            
             <Typography style={{cursor:'pointer'}}  onClick={() => handleNavigate(movie.id)}  sx={{position:'absolute'}} color='warning' variant='h4' left={100} top={140}>{`${movie.title} `  }</Typography> 
              
           

            
            <div style={{position:'absolute', left: 100}}>
            <Typography sx={{color:'white'}}  maxWidth={880} >{movie.overview}</Typography>
         
            
         <Button sx={{position:'absolute',mt:5}} variant='contained' color='warning' onClick={() => handleNavigate(movie.id)}>Ir</Button>
         
            </div>
           
           </SwiperSlide> 
          ))
        }

     
         
    
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default Slider;

