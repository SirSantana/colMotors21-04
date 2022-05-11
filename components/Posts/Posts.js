import Link from "next/link";
import PostCo from '../../components/Posts/Post/Post'
import useStyles from "./styles";
import {CircularProgress, Grid} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../../reducers/Actions/postActions";

export default function Posts({Postss}) {
  // const {posts, isLoading} = useSelector(state=> state.posts)
  const classes = useStyles();
  return (
      // isLoading ? <CircularProgress/>:
        <Grid className={classes.container} container  alignItems='stretch' spacing={3} >
            {Postss?.map((Post)=>(
                <Grid key={Post._id} item xs={12} sm={12} lg={4} md={9}>
                    <PostCo OnePost={Post} />
                    
                </Grid>
            ))}
            </Grid>
  );
}


