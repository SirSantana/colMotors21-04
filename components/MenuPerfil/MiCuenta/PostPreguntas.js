import { Button,Divider,Paper,Typography } from "@material-ui/core";
import {Build, ShareIcon} from '@material-ui/icons';
import useStyles from './stylesPost'
import {useDispatch} from 'react-redux'
import Image from 'next/image'
import { useEffect, useState } from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'
import PostCard from "../../../utils/PostCard/postCard";
import deletePost from "../../../utils/deletePost";
import VisibleDelete from "../../../utils/PostCard/visibleDelete";

export default function PostPreguntas({post, User}){
    const dispatch = useDispatch()
    const classes = useStyles()
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [message, setMessage] = useState(null);
    const router = useRouter();
    const [messageCotizar, setMessageCotizar] = useState(null)
    const idCreator = post?.creator;
    const [cotizar, setCotizar] = useState(false);
    
    const handleDelete=()=>{
        deletePost(post?._id,router, setMessage)
    }
    const handleCotizar = (e) => {
      setCotizar(cotizar ? false : true);
      if (User?.result) {
        router.push(`/posts/${post._id}`);
      } else {
        router.push("/auth");
      }
    };

    let cotiza = post?.cotizaciones;
  let arrayCotizaciones = [];
  let cotizacionCreada;
  if(cotiza.length>0){
  arrayCotizaciones.push(cotiza?.split(","));

  }
  if (post.cotizaciones.length > 0) {
    cotizacionCreada = User?.result?.cotizaciones?.find(
      (ele) => ele == arrayCotizaciones[0]?.find((item) => item == ele)
    );
  }

    return(
        <>
        {visibleDelete === true && <VisibleDelete message={message} handleDelete={handleDelete}/>}
        <PostCard Post={post} User={User} setVisibleDelete={setVisibleDelete} />

        {/* {messageCotizar!== null &&
            <Paper className={classes.paper2} style={{width:'250px'}} elevation={3}>
            <Typography
            className={classes.typo}
            style={{ fontSize: "14px", color: "white" }}
              >
              {messageCotizar}
            </Typography>
            </Paper>
            }
            {User?.result?._id === idCreator ? (
              <Button
                color="primary"
                variant="contained"
                className={classes.cotizar}
                onClick={handleCotizar}
              >
                Mira las Cotizaciones
              </Button>
            ) : id !== undefined ? (
              <Button
                color="primary"
                variant="contained"
                fullWidth
                className={classes.cotizar}
              >
                {Math.round(post?.cotizaciones.length / 24)+ ' Cotizaciones'}
              </Button>
            ) : (
              User?.result.role.length >1 ? <Button
              color={cotizacionCreada ? 'primary': 'secondary'}
              variant="contained"
              fullWidth
              className={classes.cotizar}
              onClick={handleCotizar}
            >
              {cotizacionCreada ? "Ya Cotizaste" : "Cotiza ya!"}
            </Button>
            :
            <Button
              color={cotizacionCreada ? 'primary': 'secondary'}
              fullWidth
              variant="outlined"
              className={classes.cotizar}
              onClick={()=>setMessageCotizar('Si estas en Movil, en la parte superior encontraras el formulario, si estas en computador, al lado derecho superior')}
            >
              Crea tu cotizacion
            </Button>
            )} */}
        {/* <div style={{display:'flex', flexDirection:'row',alignItems:'center', marginLeft:'20px'}}>
          <Build fontSize='medium' style={{marginRight:'18px'}}/>
        <Typography variant="h6" gutterBottom>
         {post?.repuesto}
        </Typography>
        </div>
        
        {
          post?.selectedFile &&
          <div>
          <Image 
          src={post?.selectedFile}
          width='100px'
          height='100px'
          />
        </div>
        }
        <div style={{ marginLeft:'20px'}}>
        <Typography variant="body1" style={{color:'black'}}>
        <strong>Fecha:</strong> {post?.date}
        </Typography>
        </div>
        <div  className={classes.buttons}>
        <Link href={`/posts/${post?._id}`}>
        <a>
            <Button style={{marginRight:"10px", marginTop:'10px'}} color='primary' variant='contained'>Ver Cotizacion</Button>
        </a>
        </Link>

        <Button style={{ marginTop:'10px'}} color='secondary' variant='contained' onClick={handleDelete} >
            Eliminar
        </Button>
        </div> */}
        
        </>
    )
}