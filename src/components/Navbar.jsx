import React from 'react'
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import DeblurIcon from '@mui/icons-material/Deblur';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications, Search } from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Tearch = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    [theme.breakpoints.down("sm")]:{
        width:"55%"
    }
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const handleClose = () => {
    console.log("You clicked some menu?");

};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>StickyChan</Typography>
                <DeblurIcon sx={{ display: { xs: "block", sm: "block" } }} />
                <Tearch><InputBase placeholder="Search..." /></Tearch>
                <Icons >
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo by RF._.studio from Pexels"
                        sx={{ width: 35, height: 35 }}
                        onClick={e => setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo by RF._.studio from Pexels"
                        sx={{ width: 35, height: 35 }}
                        onClick={e => setOpen(true)}
                    />
                    {/* <Typography variant="span">Zura</Typography> */}
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"

                open={open}
                onClose={ e=> setOpen(false)}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: 'left',
                }}>

                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </AppBar>
    )
}

export default Navbar