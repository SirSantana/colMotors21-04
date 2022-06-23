import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { calificacionUser } from "../../../reducers/Actions/authActions";

const initial={
    calificacion:''
}

export default function Modal({creator}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initial)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log(creator);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(calificacionUser(creator, form))
  }
  return (
    <>
      <div style={{marginLeft:'auto', marginRight:'auto'}}> 
        <Button  variant="outlined" color='secondary' onClick={handleClickOpen}>
          Califica al Vendedor
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
          Califica la Cotizacion y Atencion del Vendedor
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             Para nosotros es muy importante mejorar la calidad de vendedores, y cotizaciones,
            por eso es de gran ayuda que califiques al vendedor 1 siendo lo mas bajo, 5 siendo
             la mejor calificacion
            </DialogContentText>
            <div >
              <FormControl variant="outlined" style={{width:'200px'}}>
                <InputLabel id="demo-simple-select-label">
                  Calificacion
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={form.calificacion}
                  label="Calificacion"
                  onChange={handleChange}
                  name="calificacion"
                >
                  <MenuItem value={"1"}>1</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                  <MenuItem value={"3"}>3</MenuItem>
                  <MenuItem value={"4"}>4</MenuItem>
                  <MenuItem value={"5"}>5</MenuItem>
                </Select>
              </FormControl>

              
            </div>
          </DialogContent>
          <DialogActions style={{width:'80%', marginLeft:'18px'}}>
            <Button variant="outlined"
                color="secondary"  onClick={handleClose}>No calificar</Button>
            <Button
                style={{ width: "50%" }}
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                disabled={form.calificacion.length <=0}
              >
                Enviar Calificacion
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
