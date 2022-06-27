import { TextField, Button, Typography, Paper, ButtonBase } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../reducers/Actions/postActions";
import MenuLogos from "../MenuLogos/MenuLogos";
import useStyles from "./styles";
import Link from 'next/link'
import {useSelector} from 'react-redux'
import { Check } from "@material-ui/icons";
import Buscador from "../Navbar/Buscador";
// import {useDispatch} from 'react-redux'
const initial = {
  marca: "",
  referencia: "",
  repuesto: "",
  selectedFile: "",
  nombreCreador: '',
  creator: '',
  lugar:''
};

export default function Form({ user}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [change, setChange] = useState(false)
  // const dispatch = useDispatch()
  const [postData, setPostData] = useState(initial);
  const [marcaa, setMarca] = useState(null);
  const router = useRouter();
  const {posts, isLoading} = useSelector(state=> state.posts)

  console.log(isLoading);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setChange(change ? false: true)
      dispatch(createPost({ ...postData, marca: marcaa, nombreCreador: user?.result?.name, creator:user?.result?._id, lugar:user?.result?.pais }, router))
      // createPosts({ ...postData, marca: marcaa, nombreCreador: user?.result?.name, creator:user?.result?._id, lugar:user?.result?.pais });
      if(isLoading === true){
       router.push(`/users/micuenta/${user?.result?._id}`);

      }
      setPostData(initial);
  };
  return (
    <>
      <Paper className={classes.paper1} raised="true" elevation={6}>
        <Typography className={classes.typo}>Cotiza tus repuestos </Typography>
      </Paper>


      {change && 
      <Paper className={classes.paper2} elevation={3} >
      <Check style={{paddingRight:'10px'}}/>
    <Typography className={classes.typo} style={{fontSize:'14px', color:'white', marginRight:'8px'}}>Cotizando...</Typography>
    </Paper>}

      {user === null &&
      <Paper className={classes.paper2} elevation={3}>
      <Typography className={classes.typo} style={{fontSize:'14px', color:'white', marginRight:'8px'}}>Inicia Sesion o Registrate para poder Cotizar!</Typography>
      <br/>
      <Link href="/auth">
          <a>
          <Button  variant='contained' style={{fontSize:'15px', lineHeight:'18px', color:'black' ,backgroundColor:'white'}}>Aquí</Button>
          </a>
          </Link>
      </Paper>}
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
              label="Coloca aquí la Referencia/Modelo.(Corsa 1.3 Modelo 96)"
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
              label="Coloca aquí el Repuesto.(Kit de Clutch, ...)"
              variant="outlined"
              fullWidth
              multiline
              minRows={4}
              value={postData.repuesto}
              onChange={handleChange}
              className={classes.card}
            />

            

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
               user?.result.status === 'VERIFIED' && user?.result.role.length ===1 &&
              postData.repuesto !== initial.repuesto && user!==null
                ? false
                : true
            }
          >
            {" "}
            Cotiza
          </Button>
          {marcaa !== null &&
            postData.referencia !== initial.referencia &&
            postData.repuesto !== initial.repuesto ? null : (
              <Typography color="secondary" variant="body2">
                *Recuerda llenar todos los campos, la foto es opcional
              </Typography>
            )}
          {/* {user === null && 
          <>
          <Typography color="secondary" style={{fontSize:'14px'}}>¡Inicia Sesion o Registrate para poder cotizar!</Typography>
          
          </>} */}
        </form>
      </div>
    </>
  );
}
