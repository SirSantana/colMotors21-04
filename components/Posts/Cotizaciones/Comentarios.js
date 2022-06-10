import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "../Post/styles";
import {useRouter} from 'next/router'
import { createComment } from "../../../reducers/Actions/cotizacionesActions";

const messageInitial = {
  message: "",
};
export default function Comentarios({user, post, Cotizacion}) {
  const classes = useStyles();
  const [message, setMessage] = useState(messageInitial);
  const dispatch = useDispatch()
  const [comentarios, setComentarios] = useState(Cotizacion?.comentarios)
  const [error, setError] = useState(null)
  const router = useRouter()
  const comentarioRef = useRef()
  const [carga, setCarga] = useState(null)
  const [cargado, setCargado] = useState('')
  const [commentsCache, setCommentsCache] = useState([])

  const coments = Cotizacion?.comentarios

  
  const handleComment =async (e) => {
    if(user.result._id !== Cotizacion.creator && user.result._id !== post.creator ){
       return setError('No puedes cotizar')
    }
       const newComentarios = await dispatch(createComment({...message, message:`${user?.result.name}:${message.toString()}`}, Cotizacion?._id, setCarga, setCargado, ))
       //  comentarioRef.current.scrollIntoView({behavior:'smooth'})
       
      //  router.reload()
       setComentarios(newComentarios)
       setMessage(messageInitial)
       setCommentsCache(`${user?.result.name}:${message.toString()}`)

  };

  console.log(commentsCache);
  
  return (
    <>
        {error !== null && <h2>{error}</h2>}
      {user?.result._id === post?.creator || user?.result._id === Cotizacion.creator ?
      <Paper className={classes.comentarios} elevation={3}>
      <div className={classes.containerComents}>
        
        {comentarios?.length >0 ? (
            
            comentarios?.map((el) => (
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
                
              
        ))): coments?.map((el) => (
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
          </>))
                  }
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

        <div style={{margin:0, padding:0}}>
        <p style={{margin:0, padding:0}}>{carga}</p>
        <p style={{margin:0, padding:0}}>{cargado}</p>
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
          disabled={commentsCache.length >0 }
        />

        <span  onClick={handleComment}>
          <Send style={{ cursor: "pointer" }}  fontSize="medium" />
        </span>
        
      </div>
    </Paper>:null
    }
    </>
  );
}
