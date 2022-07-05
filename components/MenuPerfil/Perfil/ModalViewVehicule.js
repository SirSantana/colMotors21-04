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
        <DialogTitle id="alert-dialog-title">Vistazo previo a la edicion</DialogTitle>
        <DialogContent >
          <DialogContentText style={{lineHeight:'18px'}} id="alert-dialog-description">
            Hemos creado la posibilidad que puedas agregar la imagen de tu carro, y mas detalles. Adelante!
            
          </DialogContentText>
         <img
          src={'/images/CardVehicule.png'}
          alt={'Imagen de prueba'}
          style={{width:'90%', height:'450px'}}
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
