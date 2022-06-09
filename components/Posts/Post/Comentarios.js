import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../../reducers/Actions/postActions";
import useStyles from "./styles";
import {useRouter} from 'next/router'

const messageInitial = {
  message: "",
};
export default function Comentarios({ post, Cotizacion}) {
  const classes = useStyles();
  const [message, setMessage] = useState(messageInitial);
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
    const router = useRouter()


  const handleComment = (e) => {
    e.preventDefault();
    if(user.result._id !== Cotizacion.creator && user.result._id !== post.creator ){
       return setError('No puedes cotizar')
    }
    if(user && message?.message !== messageInitial.message){
        dispatch(createComment({...message, message:`${user?.result.name}:${message.toString()}`}, Cotizacion?._id ))
    
    }else{
        console.log('Debes tener un usuario para cotizar')
    }
    setMessage(messageInitial)
     router.push(window.location.href)
  };
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  },[dispatch]);
  return (
    <>
        {error !== null && <h2>{error}</h2>}
      {user?.result._id === post?.creator || user?.result._id === Cotizacion.creator ?
      <Paper className={classes.comentarios} elevation={3}>
      <div className={classes.containerComents}>
        {Cotizacion.comentarios.map((el) => (
          <>
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
          <Send style={{ cursor: "pointer" }}  fontSize="medium" />
        </span>
        
      </div>
    </Paper>:null
    }
    </>
  );
}
