import {Button, Card, CardContent, CardMedia, Container, Pagination, PaginationItem, Stack, Typography,  } from '@mui/material';
import React, { useState } from 'react'
import { Link, Navigate, useLoaderData, useParams } from 'react-router-dom';




const MediaCard = () => {
    
    const {data} = useLoaderData()

   
    const [dats, setDats] = useState(data)
console.log(data.page);

    

    const handleClick = (e,p) => { 
     console.log(p,e);
    //  
     
 
      
    }


    return (
      <Container  >
            

            <Typography fontSize={'1.8rem'} fontFamily={'sans-serif'}  sx={{ borderBottom: '#6256CA solid', display:'inline-block', mb: 5, marginLeft: '2.5rem'}} >Pelicula Destacadas</Typography>
          
            <div className='Contedor-Cards'>
                    {
                      dats.results.map(({poster_path,title,overview,id,release_date}) => (
                        
                        
                        <Card key={id} sx={{ width: 280, maxHeight: 400 ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', position: 'relative'  }}>
               
            <Button sx={{position:'absolute', top: '0px', right: '0rem', backgroundColor: 'orange'}}  variant='contained' className='botton-card'>
                {release_date}
            </Button>
              
                <Link to = {`movie/${id}`}>
                <CardMedia
                    
                    component={'img'}
                    sx={{objectFit: 'cover', width: '100%', height: '100%'}}
                    image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    
                   >
                    
                    </CardMedia> 
                </Link>

                  
                </Card>
            
        ) ) 
    }
        
            </div>
                    
                        <Stack sx={{ display: 'flex', alignItems: 'center', p:2}}>
                                <Pagination onChange={ handleClick} color='secondary' count={10}>
                                   
                                </Pagination>
                        </Stack>
        </Container>


      );
    }
 
export const LoaderMovie = async () => { 

   

    const options = {
        method: 'GET',
        headers: { 
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
        }
      };
    const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&${import.meta.env.VITE_API_KEY}`,options)
    const data = await resp.json()
    
    console.log();
    

    return {data};
}


export default MediaCard;