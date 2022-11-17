import { Button, styled } from "@mui/material";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { DeleteForever } from '@mui/icons-material';
import { theme } from "./theme";


function App() {
  //custom emotion component
  const BlueButton = styled(Button)(({theme})=>({

    backgroundColor: theme.palette.teal.main,
    color: "#888", margin: 5,
    "&:hover": { backgroundColor: "lightblue" },
    "&:disabled": { backgroundColor: "gray", color: "white" }
  }))

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<DeleteForever />}
        variant="contained"
        color="teal"
        size="small">Contained</Button>
      <Button  variant="outlined">Outlined</Button>
      <BlueButton>Kill it</BlueButton>
    </div>
  )
}

export default App
