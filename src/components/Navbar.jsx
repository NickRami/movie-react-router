import { AppBar, Box, Button, Container, IconButton, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import './index.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

    <Container sx={{mb: 15}}>
      
       <AppBar   sx={{p:1, backgroundColor: '#16423C'}}>
       <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>
            
        <div style={{display:'flex', alignItems: 'center'}}>
        
        <Link to={'/'}>
        <img className='Container-logo' src="https://static.vecteezy.com/system/resources/previews/016/733/452/non_2x/cinema-logo-vector.jpg" alt="" />
        </Link>
         
         <Typography 
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
         >
             MOVIE
         </Typography>
        </div>


            <TextField color='none'  className='input_buscar'  sx={{ width: '100%', maxWidth: '300px' ,  Height: '28px' , outline: 'none',backgroundColor: '#ffffff', borderRadius: '4px' }} placeholder='Buscar' >

            </TextField>
           
          
       <div>
       <Button sx={{mr:3}} color='warning' variant='outlined'>Sign In</Button>
       <Button color='warning' variant='contained'>Sign Up</Button>
       </div>
            
   </Toolbar>

        </AppBar> 

   

    </Container>

  )
}

export default Navbar