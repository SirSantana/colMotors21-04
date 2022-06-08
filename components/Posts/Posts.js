import Link from "next/link";
import PostCo from '../../components/Posts/Post/Post'
import useStyles from "./styles";
import {Button, CircularProgress, Grid} from "@material-ui/core"
import useLazyLoad from "../../utils/useLazyLoad";
import { useEffect, useRef, useState } from "react";
import styles from './loader.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";


export default function Posts({posts, user}) {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [veces,setVeces] = useState(0)
  const triggerRef = useRef(null);
  const router = useRouter()
  


  return (
    <>
            <Grid className={classes.container} container  alignItems='stretch' spacing={3} >
              {posts?.map((Post)=>(
                  <Grid key={Post._id} item xs={12} sm={12} lg={4} md={6}>
                <PostCo OnePost={Post}/>
                </Grid>
              )
          )}
          <div style={{marginRight:'auto', marginLeft:'auto', marginTop:'20px', }}>
          <Button variant="contained" color="secondary" style={{marginRight:"20px"}}>Ver mas cotizaciones</Button>
          {user && <Button variant="contained" color="secondary" onClick={()=> router.push(`/home/${user?.result._id}`)}>Ver mis cotizaciones</Button>}

          </div>
        </Grid>

        
        </>

  );
}

