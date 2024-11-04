import { AppBar, Box, Button, Container, IconButton, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import './index.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

    <Container  sx={{mb:12}}>
      
       <AppBar sx={{ py:2, backgroundColor: '#16423C'}}>
              <Toolbar style={{display:'flex', justifyContent:'space-around', flexBasis:'1'}} >
            
            <div style={{display:'flex', alignItems:'center'}}>
            
           <div>
           <Link to={'/'}>
            <img className='Container-logo' src="https://static.vecteezy.com/system/resources/previews/016/733/452/non_2x/cinema-logo-vector.jpg" alt="" />
            </Link>
           </div>
             
             <Typography 
              variant="h6"
              
              component="h6"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', } }}
             >
                 MOVIE
             </Typography>
            </div>
     
            <div  className='content-button'>
           <Button color='warning' variant='outlined'>Peliculas</Button>
           <Button color='warning' variant='contained'>Series</Button>
           <Button color='warning' variant='outlined'>Géneros</Button>
           </div>
           
           
    
                <TextField color='none'  className='input_buscar'  sx={{  Height: '28px' , outline: 'none',backgroundColor: '#ffffff', borderRadius: '4px' }} placeholder='Buscar' >
    
                </TextField>
               
              
           <div className='content-button'>
            <Link to={'/SignIn'}>
            <Button  color='warning' variant='outlined'>Sign In</Button>
            </Link>
           <Button color='warning' variant='contained'>Sign Up</Button>
           </div>
                
       </Toolbar>
    
        </AppBar> 

   

    </Container>

  )
}

export default Navbar