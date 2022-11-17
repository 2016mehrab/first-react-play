import { Button } from "@mui/material";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { DeleteForever } from '@mui/icons-material';


function App() {
  

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<DeleteForever/>} variant="contained" color="secondary" size="small">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default App
