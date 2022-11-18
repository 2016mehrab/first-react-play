import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Home, ContactPage, Group, Info, ModeNight, Mode } from '@mui/icons-material';


const Sidebar = ({mode, setMode}) => {
    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <Box flex={1} p={2}
            sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#group">
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#contact">
                            <ListItemIcon>
                                <ContactPage />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#about">
                            <ListItemIcon>
                                <Info />
                            </ListItemIcon>
                            <ListItemText primary="About us" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#about">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch
                                onChange={e=>setMode(mode==="light" ? "dark":"light")}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
        </Box>
    )
}

export default Sidebar