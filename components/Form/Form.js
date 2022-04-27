import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import MenuLogos from "../MenuLogos/MenuLogos";
import useStyles from "./styles";
// import {useDispatch} from 'react-redux'
// import { createPost } from "../../Reducers/Actions/postActions";
const initial = {
  marca: "",
  referencia: "",
  repuesto: "",
  selectedFile: "",
};

export default function Form() {
  const classes = useStyles();
  // const dispatch = useDispatch()
  const [postData, setPostData] = useState(initial);
  const [marcaa, setMarca] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPosts({ ...postData, marca: marcaa });
    setPostData(initial);
  };
  const createPosts = async (postData) => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(postData),
      });
      const data = await res.json();
      if (data) {
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Paper className={classes.paper1} raised="true" elevation={6}>
        <Typography className={classes.typo}>Cotiza tus repuestos</Typography>
      </Paper>
      <div className={classes.paper}>
        <MenuLogos marca={marcaa} setMarca={setMarca} />
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <div className={classes.fileInput}>
            <TextField
              name="referencia"
              label="Referencia/Modelo.(Corsa 1.3 Modelo 96)"
              variant="outlined"
              fullWidth
              value={postData.referencia}
              onChange={handleChange}
              multiline
              minRows={2}
              className={classes.card}
            />
            <TextField
              name="repuesto"
              label="Repuesto.(Kit de Clutch, ...)"
              variant="outlined"
              fullWidth
              multiline
              minRows={4}
              value={postData.repuesto}
              onChange={handleChange}
              className={classes.card}
            />

            {marcaa !== null &&
            postData.referencia !== initial.referencia &&
            postData.repuesto !== initial.repuesto ? null : (
              <Typography color="secondary" variant="body2">
                Recuerda llenar todos los campos, la foto es opcional
              </Typography>
            )}

            <FileBase64
              type="file"
              multiply={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            type="submit"
            className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="medium"
            fullWidth
            disabled={
              marcaa !== null &&
              postData.referencia !== initial.referencia &&
              postData.repuesto !== initial.repuesto
                ? false
                : true
            }
          >
            {" "}
            Cotiza
          </Button>
        </form>
      </div>
    </>
  );
}
