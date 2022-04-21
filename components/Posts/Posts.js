import Link from "next/link";
import PostCo from '../../components/Posts/Post/Post'
import useStyles from "./styles";
import {Grid} from "@material-ui/core"

export default function Posts({ Postss }) {
  const classes = useStyles();

  return (
    <>
        <Grid className={classes.container} container  alignItems='stretch' spacing={3} >
            {Postss?.map((Post)=>(
                <Grid key={Post._id} item xs={12} sm={12} lg={3} md={6}>
                    <PostCo Post={Post} />
                    
                </Grid>
            ))}
            </Grid>
        
    </>
  );
}


