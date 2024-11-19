import {Box, Button, Card, CardContent, CardMedia, Container,Pagination,Stack,Typography,  } from '@mui/material';
import React, { useState } from 'react'
import { Link, useLoaderData,useNavigate,useParams } from 'react-router-dom';
import Page from '../pages/Page';




const MediaCard = () => {
 


  
  const {data }= useLoaderData();
 
  
  const navigate = useNavigate();
  const { page } = useParams(); // Obtiene la página actual de la URL
  const currentPage = parseInt(page, 10) || 1; // Asegura que la página sea un número

  const handlePageChange = (event, value) => {
    navigate(`/page/${value}`); // Cambia la URL a la nueva página
    
  };

  const handleNavigate= (id) => { 
    navigate(`/movie/${id}`)
    
  }

    return (
    
            


            
            
                    <Container >
                    
                <Box display={'flex'} flexWrap={'wrap'} gap={4} justifyContent={'center'} sx={{py:3}}>
                <div style={{width: '100%', display:'block'}}>
              <Typography  variant='h5' ml={2}  fontWeight={500}  sx={{ borderBottom: '#6256CA solid', display:'inline-block'}} >Pelicula Destacadas</Typography>
              </div>
                    {
                      data.results?.map(({poster_path,title,overview,id,release_date}) => (
                        
                        
                       <>
                      <Card style={{cursor: 'pointer', position:'relative'}} key={id}sx={{ width: 200, maxHeight: 450 ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', position: 'relative'  }}>
                    <CardMedia component={'img'} sx={{objectFit: 'cover',height: 300}} image={`https://image.tmdb.org/t/p/original/${poster_path}`}>
                       
                    </CardMedia>
                   <CardContent sx={{height:'100%',backgroundColor:'#16423c', color:'white'}}>
                   <Typography  textOverflow={'ellipsis'} sx={{overflow:'hidden', whiteSpace:'nowrap'}}  fontSize={16}  t fontFamily={'sans-serif'} textAlign={'center'} >{title}</Typography>
                   </CardContent>
                <Button className='botton-card' size='small' sx={{position:'absolute', top: '0px', right: '0rem', backgroundColor: 'orange'}}  variant='contained' >
               {release_date}
            </Button>
                </Card>
                       </>
            
        ) ) 
    }
              
                </Box>

              
         
              <Box display={'flex'} justifyContent={'center'} pb={5} >
              <Stack  spacing={2}>

                    <Pagination
                    count={Math.ceil(data.total_results / 5000)} // Cambia 10 si deseas más elementos por página
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"/>
                      
                   </Stack>
              </Box>
            </Container>
        
        
                    
      


      );
    }
 
export const LoaderMovie = async ({params}) => { 
  
 const page = params.page || 1
  

  const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
    }
  };
    const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-MX&page=${page}&sort_by=popularity.desc${import.meta.env.VITE_API_KEY}`,options)
    const data = await resp.json()
    

    return {data};
}


export default MediaCard;