import {Box, Button, Card, CardContent, CardMedia, Container,Pagination,Stack,Typography,  } from '@mui/material';
import React, { useState } from 'react'
import { Link, useLoaderData,useNavigate,useParams } from 'react-router-dom';
// import Page from '../pages/Page';




const CardPeliculas = ({data}) => {
  const navigate = useNavigate()
  const handleNavigate = (id) => {
      navigate(`movies/${id}`)
  }

    return (
    
            


            <h1></h1>
            
    //                 <Container >
                    
    //             <Box display={'flex'} flexWrap={'wrap'} gap={4} justifyContent={'center'} sx={{py:3}}>
    //             <div style={{width: '100%', display:'block'}}>
    //           <Typography  variant='h5' ml={2}  fontWeight={500}  sx={{ borderBottom: '#6256CA solid', display:'inline-block'}} >Pelicula Destacadas</Typography>
    //           </div>
    //                 {
    //                   data.results?.map(({poster_path,title,overview,id,release_date}) => (
                        
                        
                       
    //                   <Card key={id}  style={{cursor: 'pointer', position:'relative'}} sx={{ width: 200, maxHeight: 450 ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', position: 'relative'  }} onClick={() => handleNavigate(id)} >
    //                 <CardMedia  sx={{objectFit: 'cover',height: 300}} image={`https://image.tmdb.org/t/p/original/${poster_path}`}>
                       
    //                 </CardMedia>
    //                <CardContent sx={{height:'100%',backgroundColor:'#16423c', color:'white'}}>
    //                <Typography textOverflow={'ellipsis'} sx={{overflow:'hidden', whiteSpace:'nowrap'}}  fontSize={16}  t fontFamily={'sans-serif'} textAlign={'center'} >{title}</Typography>
    //                </CardContent>
    //             <Button className='botton-card' size='small' sx={{position:'absolute', top: '0px', right: '0rem', backgroundColor: 'orange'}}  variant='contained' >
    //            {release_date}
    //         </Button>
    //             </Card>
                     
            
    //     ) ) 
    // }
              
    //             </Box>

              
         
    //           <Box display={'flex'} justifyContent={'center'} pb={5} >
    //           {/* <Stack  spacing={2}>

    //                 <Pagination
    //                 count={Math.ceil(data.total_results / 5000)} // Cambia 10 si deseas más elementos por página
    //                 page={currentPage}
    //                 onChange={handlePageChange}
    //                 color="primary"/>
                      
    //                </Stack> */}
    //           </Box>
    //         </Container>
        
        
                    
      


      );
    }
 

  

export default CardPeliculas;