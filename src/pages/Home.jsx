import {Box, Button, Card, CardContent, CardMedia, Container,Pagination,Stack,Typography,  } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import CardPeliculas from '../components/PeliculasCard';
import SeriesCard from '../components/SeriesCard';



export const Home = ({children}) => {

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  
  useEffect(() => {
    // Cargar películas populares
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES`);
        const data = await response.json();
        
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    // Cargar series populares
    const fetchSeries = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES`);
        const data = await response.json();
        
        setSeries(data);
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchMovies();
    fetchSeries();
  }, []);
  
  const {id} = useParams()

  console.log(id);
  
  const navigate = useNavigate()
  const handleNavigate = (id) => {
      navigate(`movies/${id}`)
  }

  const handleNavegationSerie = (id) => { 
    navigate(`series/${id}`)
  }

  return (
   
        
          <Box  > 
             
             <Container >
                    
                    <Box  display={'flex'} flexWrap={'wrap'} gap={4} justifyContent={'center'} sx={{py:3}}>
                    <div style={{width: '100%', display:'block', paddingTop:10, paddingBottom:10}}>
                  <Typography  variant='h5' ml={2}  fontWeight={500}  sx={{ borderBottom: '#6256CA solid', display:'inline-block'}} >Pelicula Destacadas</Typography>
                  </div>
                        {
                          movies.results?.map(({poster_path,name,overview,id,release_date}) => (
                            
                            
                           
                          <Card key={id}  style={{cursor: 'pointer', position:'relative'}} sx={{ width: 200, maxHeight: 450 ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', position: 'relative'  }} onClick={() => handleNavigate(id)} >
                        <CardMedia  sx={{objectFit: 'cover',height: 300}} image={`https://image.tmdb.org/t/p/original/${poster_path}`}>
                           
                        </CardMedia>
                       <CardContent sx={{height:'100%',backgroundColor:'#16423c', color:'white'}}>
                       <Typography textOverflow={'ellipsis'} sx={{overflow:'hidden', whiteSpace:'nowrap'}}  fontSize={16}  t fontFamily={'sans-serif'} textAlign={'center'} >{name}</Typography>
                       </CardContent>
                    <Button className='botton-card' size='small' sx={{position:'absolute', top: '0px', right: '0rem', backgroundColor: 'orange'}}  variant='contained' >
                   {release_date}
                </Button>
                    </Card>
                         
                
            ) ) 
        }
                  
                    </Box>
    
                  
             
                
                </Container>



                <Container >
                    
                    <Box display={'flex'} flexWrap={'wrap'} gap={4} justifyContent={'center'} sx={{py:3}}>
                    <div style={{width: '100%', display:'block'}}>
                  <Typography  variant='h5' ml={2}  fontWeight={500}  sx={{ borderBottom: '#6256CA solid', display:'inline-block'}} >Series Destacadas</Typography>
                  </div>
                        {
                         series.results?.map(({poster_path,title,overview,id,release_date}) => (
                            
                            
                           
                          <Card key={id} onClick={() => handleNavegationSerie(id)}  style={{cursor: 'pointer', position:'relative'}} sx={{ width: 200, maxHeight: 450 ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', position: 'relative'  }}  >
                        <CardMedia  sx={{objectFit: 'cover',height: 300}} image={`https://image.tmdb.org/t/p/original/${poster_path}`}>
                           
                        </CardMedia>
                       <CardContent sx={{height:'100%',backgroundColor:'#16423c', color:'white'}}>
                       <Typography textOverflow={'ellipsis'} sx={{overflow:'hidden', whiteSpace:'nowrap'}}  fontSize={16}  t fontFamily={'sans-serif'} textAlign={'center'} >{title}</Typography>
                       </CardContent>
                    
                    </Card>
                         
                
            ) ) 
        }
                  
                    </Box>
    
                  
             
                
                </Container>
            
             
          </Box>
        
    
    
  )
}

