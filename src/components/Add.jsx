import {
  Box,
  Button,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
function Add() {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{ position: "fixed", bottom: "20px", left: "20px" }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor="white" width={400} height={280} p={3} borderRadius={5}>
          <Typography variant="h6" textAlign="center">
            Sign in
          </Typography>

          <TextField
            id="filled-multiline-static"
            multiline
            rows={4}
            placeholder="What do you think about this movie?"
            variant="filled"
            sx={{width:"100%"}}
          />
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
