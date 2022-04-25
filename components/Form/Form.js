import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import MenuLogos from "../MenuLogos/MenuLogos";
import useStyles from "./styles";
// import {useDispatch} from 'react-redux'
// import { createPost } from "../../Reducers/Actions/postActions";
const initial = {
  marca: "",
  repuesto: "",
  selectedFile: "",
};

export default function Form() {
  const classes = useStyles();
  // const dispatch = useDispatch()
  const [postData, setPostData] = useState(initial);
  const [message, setMessage] = useState(null)
  const router = useRouter()

  const handleChange=(e)=>{
    setPostData({...postData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createPosts(postData)
    setPostData(initial)
  };
  const createPosts = async (postData) => {
    try {
      const res = await fetch('/api/posts', {
        method: "POST",
        headers: {"Content-type": 'application/json'},
        body: JSON.stringify(postData),
      });
      const data = await res.json();
        if(data){
          router.push('/home');
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Paper className={classes.paper1} raised="true" elevation={6}>
        <Typography className={classes.typo}>Cotiza tus repuestos</Typography>
    {message &&<h2>Cargando</h2>}

      </Paper>
      <div className={classes.paper} >
        <MenuLogos/>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <div className={classes.fileInput}>
          <TextField
            name="marca"
            label="MARCA. (Por Ejemplo: Chevrolet Corsa 1.4 2002"
            variant="outlined"
            fullWidth
            value={postData.marca}
            onChange={handleChange}
            multiline
            required
            minRows={2}
            className={classes.card}
          />
          <TextField
            name="repuesto"
            label="REPUESTO. (Por ejemplo: Kit de Clutch, ..."
            variant="outlined"
            required
            fullWidth
            multiline
            minRows={4}
            value={postData.repuesto}
            onChange={handleChange}
            className={classes.card}

          />

          <FileBase
            type="file"
            multiply={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          type="submit"
          onClick={handleSubmit}
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="medium"
          fullWidth
        >
          {" "}
          Cotiza
        </Button>
      </form>
    </div>

    </>
  );
}
