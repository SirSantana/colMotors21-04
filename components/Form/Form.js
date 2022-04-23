import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import FileBase from "react-file-base64";
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

  const handleChange=(e)=>{
    setPostData({...postData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(createPost(postData))
    setPostData(initial)
  };
  

  return (
    <>
      <Paper className={classes.paper1} raised="true" elevation={6}>
        <Typography className={classes.typo}>Cotiza tus repuestos</Typography>
      </Paper>
      <div className={classes.paper} >
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
