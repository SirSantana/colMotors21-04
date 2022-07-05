import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { convertidor } from "../../../libs/convertidorFileBase64";
import { createVehiculo } from "../../../reducers/Actions/vehiculoActions";
import MenuLogos from "../../../utils/MenuLogos/MenuLogos";
import useStyles from "./styles";

const initialForm={
  referencia:'',
  modelo:'',
  cilindraje:'',
  marca:'',
  owner:'',
  image:''
}

export default function Modal({ visibleEdit1, setVisibleEdit1, owner }) {
  const [marcaa, setMarca] = useState(null);
  const classes = useStyles()
  const [image, setImage] = useState(null)
  const [form,setForm] = useState(initialForm)  
  const dispatch = useDispatch()
  console.log(owner);

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(createVehiculo({...form, owner:owner, imagen:image}))
    console.log(form);

  }

  return (
    <div>
      <Dialog
        open={open || visibleEdit}
        onClose={()=> setVisibleEdit1(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edita tu Auto</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Agrega una foto de tu vehiculo, lleva la contabilidad de los gastos,
            repuestos, y mejoras que le hagas a tu carro.
          </DialogContentText>

          <form >
            <MenuLogos marca={marcaa} setMarca={setMarca} />
            <TextField
              name="referencia"
              label="Referencia (Aveo)"
              variant="outlined"
              fullWidth
              value={form.referencia}
              onChange={handleChange}
              minRows={1}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              name="cilindraje"
              label="Cilindraje (1400)"
              variant="outlined"
              fullWidth
              value={form.cilindraje}
              onChange={handleChange}
              minRows={1}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              name="modelo"
              label="Modelo (2008)"
              variant="outlined"
              fullWidth
              value={form.modelo}
              onChange={handleChange}
              minRows={1}
              style={{ marginBottom: "10px" }}
            />

            <input
              type="file"
              multiple
              onChange={(e) => convertidor(e.target.files, setImage)}
            />

           
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={()=> setVisibleEdit1(false) && handleSubmit}
            variant="contained"
            autoFocus
            color="secondary"
          >
            Confirmar Cambios
          </Button>
          <Button onClick={()=> setVisibleEdit1(false)} variant="contained">
            No Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
