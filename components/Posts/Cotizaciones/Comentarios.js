import {
  Avatar,
  Dialog,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { AddAlert, ArrowBackIos, Refresh, Send } from "@material-ui/icons";
import {  useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "../Post/styles";
import { useRouter } from "next/router";
import { createComment } from "../../../reducers/Actions/cotizacionesActions";
import { useTheme } from "@material-ui/styles";
import useStyles2 from './styles.js'

const messageInitial = {
  message: "",
};

export default function Comentarios({dataUser,PostCreator,Cotizacion}) {
  const classes = useStyles();
  const classes1 = useStyles2()
  const [message, setMessage] = useState(messageInitial);
  const dispatch = useDispatch();
  const [comentarios, setComentarios] = useState(Cotizacion?.comentarios);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [commentsCache, setCommentsCache] = useState([]);
  const radioGroupRef = useRef(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const {userId, userName} = dataUser

  const coments = Cotizacion?.comentarios;

  const handleComment = async (e) => {
    if (
      userId !== Cotizacion.creator &&
      userId !== PostCreator
    ) {
      return setError("No puedes cotizar");
    }

    const newComentarios = await dispatch(
      createComment(
        { ...message, message: `${userName} : ${message.toString()}` },
        Cotizacion?._id,
      )
    );

    setMessage(messageInitial);
    setComentarios(newComentarios);

    setError(null);
    setCommentsCache(`${userName}:${message.toString()}`);
  };

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <Dialog
          TransitionProps={{ onEntering: handleEntering }}
          open={open}
          fullScreen={fullScreen}
        >
          
          {userId=== PostCreator||
          userId === Cotizacion.creator ? (
            <Paper className={classes.comentarios} style={{height:'100%'}} elevation={3}>
              <section
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "#1b333d",
                }}
              >
                <ArrowBackIos onClick={()=> router.reload()} style={{marginLeft:'10px', cursor:'pointer'}}/>
              <Avatar
              className={classes.purple2}
              alt={Cotizacion?.nombreVendedor[0]}
            >
              {/* {two} */}
            </Avatar>
            <h3 style={{marginLeft:'20px', width:'300px'}}>{Cotizacion?.nombreVendedor}</h3>
              </section>
              <div className={classes.containerComents}>
                {comentarios?.length > 0
                  ? comentarios?.map((el) => (
                      <>
                        {/* <div ref={comentarioRef}/> */}
                        <div style={{borderRadius:'10px',backgroundColor:'#464646', marginBottom:'10px', padding:'5px'}}>
                        <Typography
                          key={el._id}
                          className={classes.typo}
                          style={{
                            fontSize: "16px",
                            color: "white",
                            textAlign: "left",
                            width: "100%", 
                            marginBottom: "5px",
                          }}
                        >
                          {el}
                        </Typography>
                        </div>
                      </>
                    ))
                  : coments?.map((el) => (
                      <>
                        <div  key={el._id} style={{borderRadius:'10px',backgroundColor:'#464646',  marginBottom:'10px',padding:'5px'}}>
                        <Typography
                         
                          className={classes.typo}
                          style={{
                            fontSize: "16px",
                            color: "white",
                            textAlign: "left",
                            width: "100%",
                            marginBottom: "5px",
                          }}
                        >
                          {el}
                        </Typography>
                        </div>
                        
                      </>
                    ))}
                    {commentsCache.length >0 &&  <div style={{borderRadius:'10px',backgroundColor:'#464646',  marginBottom:'10px',padding:'5px'}}>
                <Typography
                  className={classes.typo}
                  style={{
                    fontSize: "16px",
                    color: "white",
                    textAlign: "left",
                    width: "100%",
                    marginBottom: "5px",
                  }}
                >
                  {commentsCache}
                </Typography>
                </div>}
               
                {error !== null && (
                  <h5 style={{ color: "#f50057" }}>{error}</h5>
                )}
              </div>
              <div className={classes1.divContainer}>
                <div className={classes1.divContainer2}>
                  <TextField
                    value={message.message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    className={classes.card2}
                    variant="outlined"
                    label="Escribele"
                    name="message"
                    disabled={commentsCache.length > 0}
                  />

                  {message?.message?.length === 0 ? (
                    <span onClick={() => setError("Mensaje Vacio")}>
                      <Send style={{ cursor: "pointer" }} fontSize="medium" />
                    </span>
                  ) : (
                    <span onClick={handleComment}>
                      <Send style={{ cursor: "pointer" }} fontSize="medium" />
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "30px",
                    lineHeight: "15px",
                  }}
                >
                  <AddAlert fontSize="small" style={{ color: "#1b333d" }} />
                  <p style={{margin:0, marginLeft:'5px', width:"85%"}}>Solo puedes enviar un mensaje, se concreto</p>
                 
                </div>
              </div>
            </Paper>
          ) : null}
        </Dialog>
      </div>
    </>
  );
}
