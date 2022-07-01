import {
  Avatar,
  Dialog,
  Paper,
  Slide,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { AddAlert, ArrowBackIos, Refresh, Send } from "@material-ui/icons";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { createComment } from "../../../reducers/Actions/cotizacionesActions";
import { useTheme } from "@material-ui/styles";
import useStyles2 from "./styles.js";

const messageInitial = {
  message: "",
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Comentarios({ dataUser, PostCreator, Cotizacion }) {
  const classes1 = useStyles2();
  const [message, setMessage] = useState(messageInitial);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const router = useRouter();
  const [commentsCache, setCommentsCache] = useState([]);
  const radioGroupRef = useRef(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const allComments = useRef(Cotizacion?.comentarios);
  const newComment = useRef(null);

  const { userId, userName } = dataUser;


  const handleComment = async (e) => {
    if (userId !== Cotizacion.creator && userId !== PostCreator) {
      return setError("No puedes cotizar");
    }
    newComment.current.innerHTML = `${userName} : ${message.toString()}`;
    newComment.current.setAttribute('style', 'background-color:#464646')
    newComment.current.scrollIntoView()
    setCommentsCache(`${userName} : ${message.toString()}`);

    await dispatch(
      createComment(
        { ...message, message: `${userName} : ${message.toString()}` },
        Cotizacion?._id
      )
    );
    setMessage(messageInitial);
    setError(null);
  };

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  return (
    <>
      <Dialog
        TransitionProps={{ onEntering: handleEntering }}
        open={open}
        fullScreen={fullScreen}
        style={{ width: "100vw" }}
        TransitionComponent={Transition}
        keepMounted
      >
        {userId === PostCreator || userId === Cotizacion.creator ? (
          <Paper className={classes1.comentarios} elevation={3}>
            <section className={classes1.sectionContainer}>
              <ArrowBackIos
                onClick={() => router.reload()}
                style={{ marginLeft: "10px", cursor: "pointer" }}
              />
              <Avatar
                className={classes1.purple2}
                alt={Cotizacion?.nombreVendedor[0][0]}
              >
                {Cotizacion?.nombreVendedor[0][0]}
              </Avatar>
              <h3 style={{ marginLeft: "20px", width: "300px" }}>
                {Cotizacion?.nombreVendedor}
              </h3>
            </section>
            <div className={classes1.containerComents}>
            <div className={classes1.container5}>
                <AddAlert fontSize="small" style={{ color: "#1b333d" }} />
                <h4 style={{ margin: '0 0 5px 5px', width: "85%" }}>
                  Solo puedes enviar un mensaje, se concreto
                </h4>
              </div>
              {allComments.current.map((el) => (
                <>
                  <div className={classes1.divNewMessage} style={{backgroundColor:'#464646'}}>
                    <Typography key={el._id} className={classes1.typo}>
                      {el}
                    </Typography>
                  </div>
                </>
              ))}
              <div
                ref={newComment}
                className={classes1.divNewMessage}
              >
                <h2></h2>
              </div>
              

              {/* {comentarios?.length > 0
                  ? comentarios?.map((el) => (
                      <>
                        <div className={classes1.container3}>
                          <Typography key={el._id} className={classes1.typo}>
                            {el}
                          </Typography>
                        </div>
                      </>
                    ))
                  : coments?.map((el) => (
                      <>
                        <div
                          key={el._id}
                          style={{
                            borderRadius: "10px",
                            backgroundColor: "#464646",
                            marginBottom: "10px",
                            padding: "5px",
                          }}
                        >
                          <Typography
                            className={classes1.typo}
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
                {commentsCache.length > 0 && (
                  <div
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#464646",
                      marginBottom: "10px",
                      padding: "5px",
                    }}
                  >
                    <Typography className={classes1.typo}>
                      {commentsCache}
                    </Typography>
                  </div>
                )}
                {error !== null && (
                  <h5 style={{ color: "#f50057"}}>{error}</h5>
                )} */}
            </div>
            <div className={classes1.divContainer}>
              <div className={classes1.divContainer2}>
                <TextField
                  value={message.message}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                  className={classes1.card1}
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
              
            </div>
          </Paper>
        ) : null}
      </Dialog>
    </>
  );
}
