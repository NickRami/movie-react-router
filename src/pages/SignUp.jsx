import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };



  return (
   <Box sx={{height: '100vh'}}   display={'flex'} justifyContent={'center'} alignItems={'center'}>
       <div className='Gradient-SignUp' style={{ padding: 3, width: 450, height: 550, borderRadius: 5,  boxShadow: '0px 2px 8px grey'}} >
           <Typography textAlign={'center'} fontFamily={'sans-serif'} py={4} color='white' fontSize={22} fontWeight={700} component={'h1'}>Registrarse</Typography>
             <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={3} p={2}>
             <TextField fullWidth size='medium' color='error' id="outlined-basic" label="Email" variant="outlined" placeholder='Email ' >

             </TextField>

             <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" color='error'>
          <InputLabel  htmlFor="outlined-adornment-password">Escribir Contraseña</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff/> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Escribe Contraseña"
          />
 </FormControl>

 
 <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" color='error'>
          <InputLabel  htmlFor="outlined-adornment-password">Repiter Contraseña</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff/> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Repetir Contraseña"
          />
 </FormControl>

           </Box>

           <Button  variant='contained' size='small' sx={{px: 3, ml:1}} color='error' >Registrarse</Button>
           <Typography fontSize={17} my={2} p={1}>¿Ya tienes una cuenta? <Link to={'/SignIn'} style={{color:'white', textDecoration: 'none'}}>
           
            Iniciar Sesión
            
           </Link>
          </Typography>
       </div>
       
   </Box>
  )
}

export default SignUp