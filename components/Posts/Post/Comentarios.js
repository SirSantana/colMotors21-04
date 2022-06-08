import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../../reducers/Actions/postActions";
import useStyles from "./styles";

let conversation = [
  "Miguel: Buen dia ese precio es por el par",
  "Raul: Si señor, por el par",
];
const messageInitial = {
  message: "",
};
export default function Comentarios({user, post, Cotizacion}) {
  const classes = useStyles();
  const [mensajes, setMensajes] = useState(conversation);
  const [message, setMessage] = useState(messageInitial);
  const dispatch = useDispatch()
  
  const handleComment = (e) => {
    e.preventDefault();
    if(user){
        dispatch(createComment({...message, message:`${user?.result.name}:${message.toString()}`}, Cotizacion?._id ))
    }else{
        console.log('Debes tener un usuario para cotizar')
    }
  };

  return (
    <>
      <Paper className={classes.comentarios} elevation={3}>
        <div className={classes.containerComents}>
          {Cotizacion.comentarios.map((el) => (
            <>
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
                {el}
              </Typography>
            </>
          ))}

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
          }}
        >
          <TextField
            value={message.message}
            onChange={(e)=> setMessage(e.target.value)}
            fullWidth
            className={classes.card2}
            variant="outlined"
            label="Escribele"
            name="message"
          />

          <span onClick={handleComment}>
            <Send style={{ cursor: "pointer" }} fontSize="medium" />
          </span>
        </div>
      </Paper>
    </>
  );
}
