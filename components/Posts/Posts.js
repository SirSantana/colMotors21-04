import useStyles from "./styles";
import {Button, CircularProgress, Grid} from "@material-ui/core"
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import PostCard from "../../utils/PostCard/postCard";


export default function Posts({user}) {
  const classes = useStyles();
  const router = useRouter()
  const [posts, setPosts] = useState(null)
  console.log(posts);

  useEffect(()=>{
    fetch('/api/posts',{
        method:'GET',
        headers:{'Content-type': 'application/json'}
    })
    .then(res=> {
        return res.json()
    })
    .then(data=> {
        return setPosts(data)
    })
    .catch(err=> console.log(err))
},[])

  return (
    <>
            <Grid className={classes.container} container  alignItems='stretch' spacing={3} >
              {posts !== null ? posts?.data?.map((Post)=>(
                <Grid key={Post._id} item xs={12} sm={12} lg={4} md={6}>
                <PostCard Post={Post} User={user}/>
                </Grid>
              )
          ): <h2>Loading...</h2> }
               

          <div style={{marginRight:'auto', marginLeft:'auto', marginTop:'20px', }}>
          {user && <Button variant="contained" color="secondary" onClick={()=> router.push(`/home/${user?.result._id}`)}>Ver mis cotizaciones</Button>}

          </div>
        </Grid>

        
        </>

  );
}

