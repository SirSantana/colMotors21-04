import {Card,Button,Typography,Divider,CardHeader,Avatar,Paper,} from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useRouter } from "next/router";
import FormCotizacion from "../../FormCotizacion/FormCotizacion";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Check, Close, Error } from "@material-ui/icons";
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import deletePost from "../../../utils/deletePost";

export default function PostCo({ OnePost, visibleCoti}) {
  const classes = useStyles();
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [message, setMessage] = useState(null);
  const [cotizar, setCotizar] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null);
  const nombreCreador = OnePost?.nombreCreador?.toString();
  const dispatch = useDispatch();
  const { id } = router.query;
  const idCreator = OnePost?.creator;
  const [visiCoti, setVisiCoti] = useState(true)


  const handleDelete = () => {
    deletePost(OnePost._id, router, setMessage);
  };

  const handleCotizar = (e) => {
    setCotizar(cotizar ? false : true);
    if (user?.result) {
      router.push(`/posts/${OnePost._id}`);
    } else {
      router.push("/auth");
    }
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
      {visibleDelete === true && (
        <>
          <Paper className={classes.paper2} elevation={3}>
            <Error style={{ paddingRight: "10px" }} />
            <Typography
              className={classes.typo}
              style={{ fontSize: "14px", color: "white" }}
            >
              {message
                ? message
                : "Esta seguro que quiere eliminar esta cotizacion?"}{" "}
            </Typography>

            <br />
            {message ? null : (
              <>
                <Button
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  onClick={() => setVisibleDelete(false)}
                >
                  <Close fontSize="medium" />
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleDelete}
                >
                  <Check fontSize="medium" />
                </Button>
              </>
            )}
          </Paper>
        </>
      )}

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

          <Card sx={{ width: "345px" }} className={classes.card} elevation={2}>
            <CardHeader
            style={{padding:'4px'}}
              className={classes.header}
              avatar={
                <Avatar
                  src={`/images/${OnePost?.marca}.png`}
                  className={classes.purple}
                  alt={OnePost?.marca}
                >
                  {nombreCreador?.substr(0, 1)}
                </Avatar>
              }
              title={OnePost?.referencia}
              classes={{ subheader: classes.subheader2, title: classes.title2 }}
              subheaderTypographyProps={{ variant: "body2" }}
              subheader={moment(OnePost?.date).fromNow()}
            />

            <Divider></Divider>

            <PostContent OnePost={OnePost} />

            <PostActions
              user={user}
              OnePost={OnePost}
              setVisibleDelete={setVisibleDelete}
            />

            {user?.result?._id === idCreator ? (
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
                {Math.round(OnePost.cotizaciones.length / 24)+ ' Cotizaciones'}
              </Button>
            ) : (
              user?.result.role.length >1 ? <Button
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
              // onClick={handleCotizar}
            >
              Crea tu cotizacion
            </Button>
            )}
          </Card>
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
