import {Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from "react";

export const LessonTextField = () => {
    const [value, setValue] = useState("")
  return (
    <Stack>
    <Stack direction='row' spacing={2} >
        <TextField label="ad"/>

      <TextField label="Outlined" variant="outlined" />
      <TextField  label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
      <TextField label="Outlined" variant="outlined" size="small" color='error' />
      <TextField label="Outlined" variant="outlined" helperText="lütfen adınızı girin" />      
      <TextField type='password' label="Outlined" variant="outlined" helperText="lütfen adınızı girin" />      
      <TextField 
        disabled 
        type='password' 
        label="Outlined" 
        variant="outlined" 
        helperText="lütfen adınızı girin" 
      /> 
      <TextField 
        InputProps={{ startAdornment: (
            <InputAdornment position='start' > TL </InputAdornment>
        )
         }}
        label="Toplam" 
        variant="outlined" 
      /> 
        <TextField 
        InputProps={{ endAdornment: (
            <InputAdornment position='end' > TL </InputAdornment>
        )
         }}
        label="Toplam" 
        variant="outlined" 
      /> 
    </Stack>
    <Stack direction="row" >

    </Stack>
    <TextField 
        onChange={(e)=> setValue(e.target.value)}
        value={value}
        type='password'
        label="Toplam" 
        variant="outlined" 
        helperText={
            !value 
            ? "lütfen şifrenizi girin" 
            : "şifrenizi kimseyle paylasmayın"}
      /> 
    </Stack>
  )
}
