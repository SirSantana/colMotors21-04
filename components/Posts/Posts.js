import Link from "next/link";
import PostCo from '../../components/Posts/Post/Post'
import useStyles from "./styles";
import {CircularProgress, Grid} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Posts() {
  const {posts, isLoading} = useSelector(state=> state.posts)
  const classes = useStyles();

  return (
      isLoading ? <CircularProgress/>:
        <Grid className={classes.container} container  alignItems='stretch' spacing={3} >
            {posts?.map((Post)=>(
                <Grid key={Post._id} item xs={12} sm={12} lg={4} md={6}>
                    <PostCo OnePost={Post} />
                    
                </Grid>
            ))}
            </Grid>
  );
}


