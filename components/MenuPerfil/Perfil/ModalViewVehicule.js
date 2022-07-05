import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useState } from "react";
import Image from 'next/image'
import useStyles from "./styles";


export default function ModalViewVehicule({ visibleEdit, setVisibleEdit1, setVisibleEdit, owner }) {
  const [marcaa, setMarca] = useState(null);
  const classes = useStyles()
  const [image, setImage] = useState(null)
  

  return (
    <div>
      <Dialog
        open={open || visibleEdit}
        onClose={()=> setVisibleEdit1(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Trabajamos dia a dia para ofrecerte una experiencia unica</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Para ello hemos creado la posibilidad que puedas agregar imagen de tu carro, y mas detalles.
            En la imagen veras como quedara tu perfil editando los datos, adelante!
          </DialogContentText>
         <img
          src={'/images/CardVehicule.png'}
          alt={'Imagen de prueba'}
          style={{width:'100%', height:'500px'}}
         /> 
          
        </DialogContent>
        <DialogActions>
          <Button
            onClick={()=> setVisibleEdit1(true)}
            variant="contained"
            autoFocus
            color="secondary"
          >
            Editar 
          </Button>
          <Button onClick={()=> setVisibleEdit(false)} variant="contained">
            Editar Mas Tarde
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
