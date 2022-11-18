import { Box, Button, createTheme, styled, ThemeProvider } from "@mui/material";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { DeleteForever } from "@mui/icons-material";
import { theme } from "./theme";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Container, Stack } from "@mui/system";
import { teal } from "@mui/material/colors";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

function App() {
  //custom emotion component
  // const BlueButton = styled(Button)(({theme})=>({

  //   backgroundColor: theme.palette.teal.main,
  //   color: "#888", margin: 5,
  //   "&:hover": { backgroundColor: "lightblue" },
  //   "&:disabled": { backgroundColor: "gray", color: "white" }
  // }))
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode:mode 
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color="text.primary">
          {/* navbar */}
          <Navbar />
          <Stack direction="row" spacing={3} justifyContent="space-between">
            <Sidebar />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>

      {/* <BlueButton>Kill it</BlueButton> */}
    </div>
  );
}

export default App;
