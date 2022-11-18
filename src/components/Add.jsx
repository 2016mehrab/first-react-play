import { Fab, Tooltip } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
function Add() {
  return (
    <>
      <Tooltip title="Add" sx={{position:"fixed", bottom:"20px", left:"20px"}}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
}

export default Add;
