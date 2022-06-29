import {
  Avatar,
  Button,
  Dialog,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { AddAlert, Refresh, Send } from "@material-ui/icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "../Post/styles";
import { useRouter } from "next/router";
import { createComment } from "../../../reducers/Actions/cotizacionesActions";
import Link from "next/link";
import { useTheme } from "@material-ui/styles";

const messageInitial = {
  message: "",
};

export default function Comentarios({user,post,Cotizacion,setVisibleEdit,visibleEdit,}) {
  const classes = useStyles();
  const [message, setMessage] = useState(messageInitial);
  const dispatch = useDispatch();
  const [comentarios, setComentarios] = useState(Cotizacion?.comentarios);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [carga, setCarga] = useState(null);
  const [cargado, setCargado] = useState("");
  const [commentsCache, setCommentsCache] = useState([]);
  const radioGroupRef = useRef(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const coments = Cotizacion?.comentarios;

  const handleComment = async (e) => {
    if (
      user.result._id !== Cotizacion.creator &&
      user.result._id !== post.creator
    ) {
      return setError("No puedes cotizar");
    }

    const newComentarios = await dispatch(
      createComment(
        { ...message, message: `${user?.result.name} : ${message.toString()}` },
        Cotizacion?._id,
        setCarga,
        setCargado
      )
    );
    //  comentarioRef.current.scrollIntoView({behavior:'smooth'})

    //  router.reload()
    setMessage(messageInitial);
    setComentarios(newComentarios);

    setError(null);
    setCommentsCache(`${user?.result.name}:${message.toString()}`);
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
          
          {user?.result._id === post?.creator ||
          user?.result._id === Cotizacion.creator ? (
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
              <Avatar
              className={classes.purple2}
              alt={Cotizacion?.nombreVendedor[0]}
              style={{marginLeft:'20px'}}
            >
              {/* {two} */}
            </Avatar>
            <h3 style={{marginLeft:'20px', width:'300px'}}>{Cotizacion?.nombreVendedor}</h3>
                
                {/* <a onClick={() => router.reload()}>
                  <Refresh
                    fontSize="medium"
                    style={{
                      cursor: "pointer",
                      marginLeft: "8px",
                      marginTop: "3px",
                    }}
                  />
                </a> */}
              </section>
              <div className={classes.containerComents}>
                {comentarios?.length > 0
                  ? comentarios?.map((el) => (
                      <>
                        {/* <div ref={comentarioRef}/> */}
                        <Typography
                          key={el._id}
                          className={classes.typo}
                          style={{
                            fontSize: "14px",
                            color: "white",
                            textAlign: "left",
                            width: "100%",
                            marginBottom: "5px",
                          }}
                        >
                          {el}
                        </Typography>
                      </>
                    ))
                  : coments?.map((el) => (
                      <>
                        {/* <div ref={comentarioRef}/> */}
                        <Typography
                          key={el._id}
                          className={classes.typo}
                          style={{
                            fontSize: "14px",
                            color: "white",
                            textAlign: "left",
                            width: "100%",
                            marginBottom: "5px",
                          }}
                        >
                          {el}
                        </Typography>
                      </>
                    ))}
                <Typography
                  className={classes.typo}
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textAlign: "left",
                    width: "100%",
                    marginBottom: "5px",
                  }}
                >
                  {commentsCache}
                </Typography>
                {error !== null && (
                  <h5 style={{ color: "#f50057" }}>{error}</h5>
                )}
                <div style={{ margin: 0, padding: 0 }}>
                  <p style={{ margin: 0, padding: 0 }}>{carga}</p>
                  <p style={{ margin: 0, padding: 0 }}>{cargado}</p>
                </div>

                <br />
              </div>
              <div
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  gap: "10px",
                  width: "95%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "95%",
                   }}
                >
                  <TextField
                    value={message.message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    className={classes.card2}
                    variant="outlined"
                    label="Escribele"
                    name="message"
                    disabled={commentsCache.length > 0}
                    multiline
                    minRows={3}
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
                  {/* <p style={{margin:0, marginLeft:'5px', width:"85%"}}>Solo puedes enviar un mensaje, se concreto</p> */}
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => router.reload()}
                    color="secondary"
                  >
                    Regresar
                  </Button>
                </div>
              </div>
            </Paper>
          ) : null}
        </Dialog>
      </div>
    </>
  );
}
