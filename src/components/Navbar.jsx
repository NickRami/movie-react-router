import { AppBar,  Button, Container, TextField, Toolbar, Typography } from '@mui/material';
import './index.css'
import { Link } from 'react-router-dom';
import {  useUserContext } from '../pages/Context/UserContext';


const Navbar = () => {

  
  const {searchQuery,handleSearchChange} = useUserContext()
  
  return (

    <Container  sx={{mb:10}} >
      
       <AppBar sx={{ py:3, backgroundColor: '#16423C'}}>
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
           <Link to={'/'}>
           <Button color='warning' variant='contained'>Peliculas</Button>
           </Link>
          <Link to={'/series'}> 
          <Button color='warning' variant='outlined' >Series</Button>
          </Link>
           <Button color='warning' variant='outlined'>Géneros</Button>
           </div>
           
           
    
                <TextField color='none' type='text' className='input_buscar'   sx={{  Height: '28px' , outline: 'none',backgroundColor: '#ffffff', borderRadius: '4px' }} placeholder='Buscar peliculas o series' value={searchQuery || ""} onChange={handleSearchChange} >
    
                </TextField>
               
              
           <div className='content-button'>
            <Link to={'/SignIn'}>
            <Button  color='warning' variant='outlined'>Iniciar Sesión</Button>
            </Link>
           <Button color='warning' variant='contained'>Registrarse</Button>
           </div>
                
       </Toolbar>
    
        </AppBar> 

   

    </Container>

  )
}

export default Navbar