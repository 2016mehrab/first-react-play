import React from 'react'
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Rating, Typography } from '@mui/material';
import { MoreVert, Favorite, BookmarkBorder, Bookmark, FavoriteBorder } from '@mui/icons-material';

function Post() {
    const [value, setValue] = React.useState(1);
    return (
        <div>
            <Card sx={{ maxWidth: {xs:340, sm:"60%"}, margin:"25px" }}>
                <CardHeader
                    // avatar={
                    //     <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    //         R
                    //     </Avatar>
                    // }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Avengers: Endgame"
                    subheader="2019"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
                    alt="Avengers Endgame"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        {/* 
                        <Checkbox

                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite sx={{color:"red"}} />}
                        /> */}
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Checkbox

                            icon={<BookmarkBorder />}
                            checkedIcon={<Bookmark />}
                        />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post