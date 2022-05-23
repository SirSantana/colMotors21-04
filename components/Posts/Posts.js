import Link from "next/link";
import PostCo from '../../components/Posts/Post/Post'
import useStyles from "./styles";
import {CircularProgress, Grid} from "@material-ui/core"
import useLazyLoad from "../../utils/useLazyLoad";
import { useRef, useState } from "react";
import clsx from "clsx";


const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;
export default function Posts({Postss}) {
 
  // const {posts, isLoading} = useSelector(state=> state.posts)
  const classes = useStyles();
  const [veces,setVeces] = useState(1)
  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
      // This would be where you'll call your API
      return new Promise((resolve) => {
      setTimeout(() => {
          const data = Postss.slice(((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,NUM_PER_PAGE * (currentPage%TOTAL_PAGES))
          console.log(data);
          resolve(data);
          setVeces(prev=> prev + 1)
      }, 1000);
      });
    }
    console.log(Postss.reverse());
    console.log(Postss);

    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  return (
      // isLoading ? <CircularProgress/>:
        <>
        <Grid className={classes.container} container  alignItems='stretch' spacing={3} >
            {data?.map((Post)=>{
              return(
                <Grid key={Post._id} item xs={12} sm={12} lg={4} md={6}>
                    <PostCo OnePost={Post}/>
                    
                </Grid>
              )
                
              })}
            </Grid>
            {veces <= Math.round(Postss.length / 6) ?<div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <h2>Cargando ...</h2>
        </div>:null }
        </>

  );
}


