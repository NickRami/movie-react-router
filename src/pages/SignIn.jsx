import { Box, Button, Container, IconButton, rgbToHex, TextField, Typography } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <>
    <Box className='ContainerSignIn' sx={{ height: '100vh' }} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={5} >
                
          
                 
               <div className='GradientSignIn' style={{ borderRadius:5, boxShadow: '0px 2px 4px grey', minWidth: 300, minHeight: 500, paddingTop: 5, paddingBottom:5}}>
                    <header>
                    <h1 style={{textAlign:'center', color:'white',fontWeight: 700, fontFamily: 'sans-serif'}}>Iniciar Sesión</h1>

                    </header>
                    <Box display={'flex'} justifyContent={'center'}>
                        <IconButton color='error' size='large' aria-label='google'>
                          <GoogleIcon/>
                        </IconButton>
                        <IconButton color='error' size='large' aria-label='google'>
                          <FacebookIcon/>
                        </IconButton>
                        <IconButton color='error' size='large' aria-label='google'>
                          <InstagramIcon/>
                        </IconButton>
              
                    </Box>         
                    <Box component={'form'} py={2} display={'flex'}  justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                   
                        
                        <Box gap={2} display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} flexDirection={'column'}>
                        <TextField fullWidth color='error' id="outlined-basic" label="Email" variant="filled" placeholder='Email o número de celular' />
                        <TextField fullWidth color='error' id="outlined-basic" label="Contraseña" variant="filled" placeholder='Contraseña' />


                        <Typography variant='overline' textAlign={'start'} fontSize={10} fullWidth border={'none'} sx={{cursor: 'pointer'}} component={'button'} color='error' >¿Recuperar Contraseña?</Typography>
                        <Typography variant='overline'  fontSize={10} fullWidth border={'none'} sx={{cursor: 'pointer'}} component={'button'} color='error' >¿No tienes una cuenta? <Link to={'/SignUp'} style={{color:'black'}}>Crea Una</Link></Typography> 

                        <Button sx={{mt:8}} fullWidth variant='contained' color='error'>Iniciar sesión</Button>
                        </Box>
                    
                    </Box>
                    
                </div>  
          

            
    </Box>

    </>
  )
}

export default SignIn