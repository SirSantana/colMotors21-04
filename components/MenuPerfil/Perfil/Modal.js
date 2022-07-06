import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { convertidor } from "../../../libs/convertidorFileBase64";
import {  editVehiculo } from "../../../reducers/Actions/vehiculoActions";
import MenuLogos from "../../../utils/MenuLogos/MenuLogos";
import useStyles from "./styles";
import FileBase64 from "react-file-base64";

const initialForm={
  referencia:'',
  modelo:'',
  cilindraje:'',
  marca:'',
  imagen:''
}

export default function Modal({ visibleEdit1, setVisibleEdit1, idVehicule, owner }) {
  const [marcaa, setMarca] = useState(null);
  const classes = useStyles()
  const [imagen, setImagen] = useState(null)
  const [form,setForm] = useState(initialForm) 
  const router = useRouter() 
  const dispatch = useDispatch()
  console.log(idVehicule);

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form);

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form);
    
    dispatch(editVehiculo({...form, marca:marcaa}, idVehicule, router, owner))

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

            {/* <input
              type="file"
              multiple
              onChange={(e) => convertidor(e.target.files, setImagen)}
            /> */}
            <label >Imagen de tu Auto</label>
            <FileBase64
            style={{color:'black'}}
              type="file"
              multiply={false}

              onDone={({ base64 }) =>
                setForm({ ...form, imagen: base64 })
              }
            />

           
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
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
