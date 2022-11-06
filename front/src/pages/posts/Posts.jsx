import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect, useState } from 'react';
import { postList } from '../../api/post.api';
import CreatePostModal from '../../components/Modal';
import { PostContext } from '../../contexts/PostContext';

function Posts() {

    const { posts, setPosts, deletePost } = useContext(PostContext)

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setPosts(postList)
    }, [])

    return (
        <>
            <CreatePostModal open={open} setOpen={setOpen} />

            <Card sx={{ maxWidth: 500, margin: 5 }}>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={10}  >
                        <Typography variant="h6" padding={2} color="inherit" component="div">
                            Create new post
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <AddCircleRoundedIcon style={{ fontSize: 40, color: 'red' }} onClick={() => setOpen(true)} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>

            {posts.map(p => {
                return (
                    <Card sx={{ maxWidth: 500, margin: 5 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://www.postplanner.com/hs-fs/hubfs/how%20to%20write%20a%20facebook%20post.jpg?noresize&width=980&height=515&name=how%20to%20write%20a%20facebook%20post.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {p.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {p.body}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="error" onClick={() => deletePost(p.id)} size="small">Delete</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </>
    )
}

export default Posts;
