import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FormAddVehiculos from "./FormAddVehiculos";

const initial={
    calificacion:''
}

export default function Modal({visibleEdit, setVisibleEdit}) {

  const handleClickOpen = () => {
    setVisibleEdit(true)

  };

  const handleClose = () => {
    setVisibleEdit(false)
  };

  return (
    <div>
      
      <Dialog
        open={open|| visibleEdit}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Edita tu Auto
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Agrega una foto de tu vehiculo, lleva la contabilidad de los gastos, repuestos, y mejoras que le hagas a tu carro.
          </DialogContentText>
          <FormAddVehiculos/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' autoFocus color='secondary'>Confirmar Cambios</Button>
          <Button onClick={handleClose}  variant='contained' >
            No Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
