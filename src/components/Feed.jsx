import React from 'react'
import Post from './Post';
 import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Rating, Typography } from '@mui/material';
// import { MoreVert, Favorite, BookmarkBorder, Bookmark, FavoriteBorder } from '@mui/icons-material';


const Feed = () => {

    return (
        <Box p={2} sx={{ flex: { xs: 1, sm: 5 } }}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>

    )
}

export default Feed