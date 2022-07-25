import { TextField, Button, Typography, Paper, ButtonBase } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../reducers/Actions/postActions";
import MenuLogos from "../../utils/MenuLogos/MenuLogos";
import useStyles from "./styles";
import ModalCargando from "../../utils/modalCargando";
import ButtonLink from "../Button";

const initial = {
  marca: "",
  referencia: "",
  repuesto: "",
  selectedFile: "",
  nombreCreador: '',
  creator: '',
  lugar:''
};

export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const [change, setChange] = useState(false)
  const [postData, setPostData] = useState(initial);
  const [marcaa, setMarca] = useState(null);
  const router = useRouter();
  const [visibleModal, setVisibleModal] = useState(false)


  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      setChange(change ? false: true)
      setVisibleModal(true)
      dispatch(createPost(
        {...postData, marca: marcaa, 
          nombreCreador: user?.result?.name, 
          creator:user?.result?._id, 
          lugar:`${user?.result?.ciudad}, ${user?.result.pais}` }
          , router))
     
      setPostData(initial);
  };
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[])
  return (
    <>
      <Paper className={classes.paper1} raised="true" elevation={6}>
        <Typography className={classes.typo}>Cotiza tus repuestos </Typography>
      </Paper>


      {visibleModal && <ModalCargando setVisibleModal={setVisibleModal} active={false} visibleModal={visibleModal} texto={'Cotizando...'}/>}
      

      {user === null &&
      <Paper className={classes.paper2} elevation={3}>
      <Typography className={classes.typo} style={{fontSize:'14px', color:'white', marginRight:'8px'}}>Inicia Sesion o Registrate para poder Cotizar!</Typography>
      <br/>
      <ButtonLink to={'/auth'} variant='contained'  text={'Ingresar'}/>
      </Paper>}
      <div className={classes.paper} >

    
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
              multiline
              minRows={4}
              value={postData.repuesto}
              onChange={handleChange}
              className={classes.card}
            />

            <FileBase64
            style={{color:'black'}}
              type="file"
              multiply={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
        {/* <input style={{color:'black'}} type="file" onChange={(e)=>convertidor(e.target.files, setImage)} /> */}

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
          
        </form>
      </div>
    </>
  );
}
