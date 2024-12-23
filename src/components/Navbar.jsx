import { AppBar,  Box,  Button, Drawer, List, ListItem, ListItemText, TextField, Toolbar, Typography } from '@mui/material';
import './index.css'
import { Link } from 'react-router-dom';
import {  useUserContext } from '../pages/Context/UserContext';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {

  
  const {searchQuery,handleSearchChange} = useUserContext()
  const [open, setOpen] = useState(false)
  const [gendres, setGendres] = useState([])

  

  
  
  useEffect(() => {
    
    const listGenero =  async () => { 
      try {
        const options = {
          method: 'GET',
          headers: { 
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
          }
        };
      
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=es`,options)
        const data = await res.json()
        setGendres(data.genres)
      } catch (error) {
        console.log(error);
        
      }
    }
    listGenero() 
  },[])
  
  return (

  
      <>
      
      
      <AppBar  position='sticky' color='default' sx={{ py:2}}>
              <Toolbar style={{ justifyContent:'space-between', flexBasis:'1'}} >
            <MenuIcon 
            sx={{cursor:'pointer'}}
            onClick={() => setOpen(true)}/ >


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
              Movie
             </Typography>
            </div>
     
            <div  className='content-button'>
           <Link to={'/'}>
           <Button color='warning' variant='contained'>Peliculas</Button>
           </Link>
          <Link to={'/series'}> 
          <Button color='warning' variant='outlined' >Series</Button>
          </Link>
           <Button  color='warning' variant='outlined'>Géneros</Button>
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

   

      <Drawer open={open} anchor='left'  onClose={() => setOpen(false)}>
          <Box width={250} overflow={'hidden'} >
              <nav>
                  <List sx={{py:0}} >
                      {
                        gendres.map((genero) =>(
                          <ListItem key={genero.id}  className='list-genres'  sx={{backgroundColor:'#16423c', color:'#fffde7',
                            '&:hover':{
                              backgroundColor: 'background-color: #ed6c02;',
                              cursor: 'pointer',
                          
                            }}}>
                            <ListItemText primary={genero.name} ></ListItemText>
                      </ListItem>
                        ))
                      }
                  </List>
              </nav>
          </Box>
      </Drawer>
      </>

 

  )
}

export default Navbar


 