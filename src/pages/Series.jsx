import { Box, Button, Card, CardContent, CardMedia, Container, Pagination, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Slider from '../components/Slider'

const Series = () => {

    const {data} = useLoaderData()
    const [serie,setSeries] = useState(data.results)
    console.log(serie);
    
  return (

    <>
    
           <Slider />
        <Container  >
                <Typography variant='h5' ml={2}  fontWeight={500} sx={{ borderBottom: '#6256CA solid', display:'inline-block'}}  fontFamily={'sans-serif'}>Series</Typography>
            
                <Box py={3} display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} alignItems={'center'} columnGap={1} rowGap={5} >
            {
            serie.map((tv) => (
                    <section key={tv.id}>

                    <Card style={{cursor: 'pointer', position:'relative'}} key={tv.id}sx={{ width: 200, maxHeight: 450 ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', position: 'relative'  }}>
                    <CardMedia component={'img'} sx={{objectFit: 'cover',height: 300}} image={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}>
                       
                    </CardMedia>
                   <CardContent sx={{height:'100%',backgroundColor:'#16423c', color:'white'}} >
                   <Typography  textOverflow={'ellipsis'} sx={{overflow:'hidden', whiteSpace:'nowrap'}}  fontSize={16}  t fontFamily={'sans-serif'} textAlign={'center'} >{tv.original_name}</Typography>
                   </CardContent>
                <Button className='botton-card' size='small' sx={{position:'absolute', top: '0px', right: '0rem', backgroundColor: 'orange'}}  variant='contained' >
               {tv.first_air_date}
            </Button>
                </Card>
                    </section>
              
              
            ))
        }
        </Box>


        <Box display={'flex'} justifyContent={'center'} pb={5} >
              <Stack  spacing={2}>

                    <Pagination
                    // count={Math.ceil(data.total_results / 5000)} // Cambia 10 si deseas más elementos por página
                    // page={currentPage}
                    // onChange={handlePageChange}
                    color="primary"/>
                      
                   </Stack>
              </Box>


        </Container>


       
           
    </>
)
}





export default Series


export const loaderSeries = async () => {
    
  const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
    }
  };

  const resp = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',options)
  const data = await resp.json()
  console.log(data);
  
  return {data}


}