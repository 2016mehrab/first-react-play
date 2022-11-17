import React from 'react'
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material';

const Rightbar = () => {
    return (
        <Box flex={2} p={2}
            sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="woman"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="woman"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="woman"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="woman"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="woman"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="woman"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="woman"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="woman"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
            </Box>
        </Box>
    )
}

export default Rightbar