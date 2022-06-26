import {Card,Button,Typography,Divider,CardHeader,Avatar,Paper,} from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useRouter } from "next/router";
import FormCotizacion from "../../FormCotizacion/FormCotizacion";
import { useDispatch, useSelector } from "react-redux";
import { Check, Close, Error } from "@material-ui/icons";
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import deletePost from "../../../utils/deletePost";
import VisibleDelete from "../../../utils/PostCard/visibleDelete";
import PostCard from "../../../utils/PostCard/postCard";

export default function PostCo({ OnePost, visibleCoti}) {
  const classes = useStyles();
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [message, setMessage] = useState(null);
  const [cotizar, setCotizar] = useState(false);
  const router = useRouter(); 
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { id } = router.query;
  const idCreator = OnePost?.creator;
  const [visiCoti, setVisiCoti] = useState(true)
  const [messageCotizar, setMessageCotizar] = useState(null)

  const handleDelete = () => {
    deletePost(OnePost._id, router, setMessage);
  };


  let cotiza = OnePost?.cotizaciones;
  let arrayCotizaciones = [];
  let cotizacionCreada;
  if(cotiza.length>0){
  arrayCotizaciones.push(cotiza?.split(","));

  }
  if (OnePost.cotizaciones.length > 0) {
    cotizacionCreada = user?.result?.cotizaciones?.find(
      (ele) => ele == arrayCotizaciones[0]?.find((item) => item == ele)
    );
  }
 

const handleIr=()=>{
  setVisiCoti(false)
    if(arrayCotizaciones.length >=1 && cotizacionCreada=== undefined){
      router.push(
        {
          pathname: `/cotizaciones/${arrayCotizaciones[0]}`,
          query:{
            idd:OnePost._id,
          }
        })
    }else{
      router.push(
        {
          pathname: `/cotizaciones/${cotizacionCreada}`,
          query:{
            idd:OnePost._id,
            cliente:'vendedor'
          },
        })
    }
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  },[]);

  return (
    <>
        {visibleDelete === true && <VisibleDelete  message={message} handleDelete={handleDelete} setVisibleDelete={setVisibleDelete}/>}
      
      
      <div className={classes.container}>
        <div className={classes.card} >
          {id !== undefined && (
            <div className={classes.header1}>
              <Typography gutterBottom className={classes.typo}>
                {user?.result._id === idCreator ? (
                  <b>Tu Cotización</b>
                ) : (
                  <b>Cotización Cliente</b>
                )}
              </Typography>
            </div>
          )}

          <PostCard Post={OnePost} User={user}/>

        </div>

        {user?.result._id !== OnePost.creator && !cotizacionCreada ? (
          id !== undefined ? (
            <div className={classes.cotizarr}>
              {id !== undefined && (
                <FormCotizacion user={user} OnePost={OnePost} />
              )}
            </div>
          ) : (
            <div>
              {id !== undefined && (
                <FormCotizacion user={user} OnePost={OnePost} />
              )}
            </div>
          )
        ) :
        cotizacionCreada && id !== undefined ? (
        <Paper className={classes.paper3} elevation={3}>
      <Check fontSize="large" style={{paddingRight:'10px', color:'#f50057', }}/>
      <Typography className={classes.typo} style={{fontSize:'18px', color:'white',marginBottom:'20px'}}>¡Ya Cotizaste!</Typography>

        <Typography className={classes.typo} style={{fontSize:'14px', color:'white'}}>Espera a que el cliente te escriba</Typography>
        <br/>
             <Button onClick={handleIr} color='secondary' style={{width:'98%'}}  variant='contained'>Ver tu Cotizacion</Button>
        </Paper>   

          
        ) : null}



        
        {visibleCoti !== false && user?.result._id === OnePost.creator && id !== undefined ?
        <div>
            {OnePost.cotizaciones.length>=1 ?
            <Paper className={classes.paper3} elevation={3}>
              <SentimentVerySatisfied fontSize="large" style={{paddingRight:'10px', color:'#f50057', }} />
            <Typography className={classes.typo} style={{fontSize:'18px', color:'white',marginBottom:'20px', marginRight:'8px'}}>¡Genial!</Typography>
      
              <Typography className={classes.typo} style={{fontSize:'14px', color:'white'}}>Recibiste {arrayCotizaciones[0].length} Cotizaciones!</Typography>
              <br/>
                   <Button onClick={handleIr} color='secondary' style={{width:'98%'}}  variant='contained'>Miralas Ahora!</Button>
              </Paper>  
            : 
            <Paper className={classes.paper3} elevation={3}>
              <SentimentVeryDissatisfied fontSize="large" style={{paddingRight:'10px', color:'#f50057', }}/>
            <Typography className={classes.typo} style={{fontSize:'18px', color:'white',marginBottom:'20px'}}>¡Espera!</Typography>
      
              <Typography className={classes.typo} style={{fontSize:'14px', color:'white'}}>Aún no has recibido Cotizaciones!</Typography>
              <br/>
                   <Button  color='secondary' style={{width:'98%'}}  variant='contained'>Vuelve Pronto</Button>
              </Paper>  
          }
        </div>
        :null}
       
      </div>

      {/* </a> */}
      {/* </Link> */}
    </>
  );
}
