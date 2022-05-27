import Link from "next/link";
import PostCo from '../../components/Posts/Post/Post'
import useStyles from "./styles";
import {Button, CircularProgress, Grid} from "@material-ui/core"
import useLazyLoad from "../../utils/useLazyLoad";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from './loader.module.css'
import { useDispatch, useSelector } from "react-redux";


const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 5;
export default function Posts() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [veces,setVeces] = useState(0)
  const triggerRef = useRef(null);
  const {posts, isLoading} = useSelector(state=> state.posts)

  console.log(posts);
  // const onGrabData = (currentPage) => {
  //     // This would be where you'll call your API
  //     return new Promise((resolve) => {
  //     setTimeout(() => {
  //         const data = posts?.data
  //         resolve(data);
  //         setVeces(prev=> prev + 1)
  //     }, 10);
  //     });
  //   }

  //   const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  return (
    <>
      {isLoading ? <div className={styles.ldsellipsis}><div></div><div></div><div></div><div></div></div>:
            <Grid className={classes.container} container  alignItems='stretch' spacing={3} >
              {posts?.data?.map((Post)=>(
                  <Grid key={Post._id} item xs={12} sm={12} lg={4} md={6}>
                <PostCo OnePost={Post}/>
                
                </Grid>
              )
          )}
          <Button variant="contained" color="secondary">Ver mas cotizaciones</Button>
        </Grid>

        
          }
        </>

  );
}
