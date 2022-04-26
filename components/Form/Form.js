import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MenuLogos from "../MenuLogos/MenuLogos";
import FileBase from 'react-file-base64'
import useStyles from "./styles";
// import {useDispatch} from 'react-redux'
// import { createPost } from "../../Reducers/Actions/postActions";
const initial = {
  marca: "",
  referencia:"",
  repuesto: "",
  selectedFile: "",
};

export default function Form() {
  const classes = useStyles();
  // const dispatch = useDispatch()
  const [postData, setPostData] = useState(initial);
  const [message, setMessage] = useState(null)
  const [marcaa, setMarca] = useState(null)
  const router = useRouter()

  console.log(marcaa)

  const handleChange=(e)=>{
    setPostData({...postData, [e.target.name]: e.target.value})
  }
  const handleChangeBase64=async(e)=>{
    const file = e.target.files[0] 
    const base64 = await convertFile(file)
    setPostData({...postData, selectedFile: base64})   
    console.log(postData);
  }
  const convertFile=(file)=>{
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = ()=>{
        resolve(fileReader.result)
      }

      fileReader.onerror=()=>{
        reject((err)=> console.log(err))
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createPosts({...postData,marca: marcaa})
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
        <MenuLogos marca={marcaa} setMarca={setMarca} />
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <div className={classes.fileInput}>
          
          <TextField
            name="referencia"
            label="Referencia/Cilindraje/Modelo. (Corsa 1.4 2002)"
            variant="outlined"
            fullWidth
            value={postData.referencia}
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

              {/* <FileBase
              style={{color:'black'}}
              type="file"
              multiply={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            /> */}
            <input
             type='file'
             onChange={(e)=>handleChangeBase64(e)}
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
