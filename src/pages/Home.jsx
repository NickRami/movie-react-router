import {Box, Button, Card, CardContent, CardMedia, Container,Rating,Stack,Typography,  } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { useUserContext } from './Context/UserContext';
import Slider from '../components/Slider';



export const Home = () => {
  
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [value, setValue] = useState(3)
  const [filteredSeries,setFilteredSeries] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
    
  const {searchQuery} = useUserContext()
  
  useEffect(() => {
    // Cargar películas populares
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES`);
        const data = await response.json();
        // console.log('peliculas cargadas', data.results);
        
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    // Cargar series populares
    const fetchSeries = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES`);
        const data = await response.json();
        // console.log('series cargadas', data.results);

        setSeries(data.results);
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchMovies();
    fetchSeries();
  }, []);


  useEffect(() => {
    // console.log('Buscando:', searchQuery);  // Verifica si searchQuery tiene valor
    const search = searchQuery ? searchQuery.trim().toLowerCase() : "";  
    if (search) {
      // Si movies o series están vacíos, no intentamos filtrar
      if (movies.length > 0 && series.length > 0) {
        const filteredMovies = movies.filter((movie) =>
          (movie.title || '').toLowerCase().includes(search.toLowerCase())
        );
        const filteredSeries = series.filter((serie) =>
          (serie.name || '').toLowerCase().includes(search.toLowerCase())
        );
  
        setFilteredMovies(filteredMovies);
        setFilteredSeries(filteredSeries);
      }
    } else {
      // Si no hay término de búsqueda, mostramos todas las películas y series
      setFilteredMovies(movies);
      setFilteredSeries(series);
    }
  }, [searchQuery, movies, series]); // Dependemos de searchQuery, movies y series
  
  // const {id} = useParams()

  
  const navigate = useNavigate()
  const handleNavigate = (id) => {
      navigate(`movies/${id}`)
  }

  const handleNavegationSerie = (id) => { 
    navigate(`series/${id}`)
  }

  const handleValueChange = (event,newValue) => {
    setValue(newValue)
  }

 

 

  return (
   
        <>
            <Slider/>
     <Box  py={5}> 
             <Container >
                    
                    <Box  display={'flex'} flexWrap={'wrap'} gap={4} justifyContent={'center'} >
                    <div style={{width: '100%', display:'block', paddingTop:10, paddingBottom:10}}>
                  <Typography  variant='h5' ml={2}  fontWeight={500}  sx={{ borderBottom: '#6256CA solid', display:'inline-block'}} >Pelicula Destacadas</Typography>
                 
                  </div>
                        {
                          filteredMovies.length > 0 ? (
                          filteredMovies.map((movie) => (
                            
                           
                          <Card key={movie.id}  style={{cursor: 'pointer', position:'relative'}} sx={{ width: 200, maxHeight: 450 ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', position: 'relative'  }} onClick={() => handleNavigate(movie.id)} > 
                        <CardMedia  sx={{objectFit: 'cover',height: 300}} image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}>
                           
                        </CardMedia>
                       <CardContent sx={{height:'100%',backgroundColor:'#16423c', color:'white'}}>
                       <Typography  textOverflow={'ellipsis'} sx={{overflow:'hidden', whiteSpace:'nowrap'}}  fontSize={16}  t fontFamily={'sans-serif'} textAlign={'center'} >{movie.title}</Typography>

                            <Stack spacing={2}>
                              <Rating onChange={handleValueChange} readOnly value={movie.vote_average / 2 } precision={0.1}/>
                            </Stack>
                       </CardContent>
                    <Button className='botton-card' size='small' sx={{position:'absolute', top: '0px', right: '0rem', backgroundColor: 'orange'}}  variant='contained' >
                   {movie.release_date}
                </Button>
                    </Card>
                         
                
            ) )) : (<p>No se encontraron peliculas</p>)
        }
                  
                    </Box>
    
                  
             
                
                </Container>



                <Container >
                    
                    <Box display={'flex'} flexWrap={'wrap'} gap={4} justifyContent={'center'} sx={{py:3}}>
                    <div style={{width: '100%', display:'block'}}>
                  <Typography  variant='h5' ml={2}  fontWeight={500}  sx={{ borderBottom: '#6256CA solid', display:'inline-block'}} >Series Destacadas</Typography>
                  </div>
                        {
                         filteredSeries.length > 0 ? (
                         filteredSeries.map((serie) => (
                            
                           
                           
                          <Card key={serie.id} onClick={() => handleNavegationSerie(serie.id)}  style={{cursor: 'pointer', position:'relative'}} sx={{ width: 200, maxHeight: 450 ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', position: 'relative'  }}  >
                        <CardMedia  sx={{objectFit: 'cover',height: 300}} image={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}>
                           
                        </CardMedia>
                       <CardContent sx={{backgroundColor:'#16423c', color:'white'}}>
                       <Typography textOverflow={'ellipsis'} sx={{overflow:'hidden', whiteSpace:'nowrap'}}   fontFamily={'sans-serif'} textAlign={'center'} >{serie.name}</Typography>

                       <Stack  spacing={2} py={1} alignItems={'flex-start'}>
                        <Rating onChange={handleValueChange}  readOnly value={serie.vote_average / 2}/>

                      
                       </Stack>
                       </CardContent>
                    
                    </Card>
                         
                
            ) )) : ( <p>no se encontraron series</p> )
        }
                  
                    </Box>
    
                  

                
                </Container>
            
             
          </Box>
        </>
  )
}

