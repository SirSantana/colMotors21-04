import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Slide,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { useRouter } from "next/router";
import { forwardRef, useEffect,useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { convertidor } from "../../../libs/convertidorFileBase64";
import {  editVehiculo } from "../../../reducers/Actions/vehiculoActions";
import MenuLogos from "../../../utils/MenuLogos/MenuLogos";
import useStyles from "./styles";
import FileBase64 from "react-file-base64";
import Image from 'next/image'
import { CalendarToday, Check } from "@material-ui/icons";
import ModalCargando from "../../../utils/modalCargando";

const initialForm={
  referencia:'',
  modelo:'',
  cilindraje:'',
  marca:'',
  imagen:'',
  tanqueGasolina:''
}
const initialText ={
  description:'', error:false
}
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Modal({ visibleEdit1, setVisibleEdit1, idVehicule, owner }) {
  const [medidas, setMedidas] = useState(null)
  const [marcaa, setMarca] = useState(null);
  const classes = useStyles()
  const [form,setForm] = useState(initialForm) 
  const [visibleModal, setVisibleModal] = useState(false)
  const [texto, setTexto] = useState(initialText)
  const router = useRouter() 
  const dispatch = useDispatch()
  const radioGroupRef = useRef(null);

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})

  }
  console.log(form, initialForm);
  const handleSubmit=(e)=>{
   
    setVisibleModal(true)
    e.preventDefault()
    setTexto({description:'Guardando...'})
    if(medidas === 'galones'){
      let litros = parseFloat((form.tanqueGasolina * 3.7).toFixed(2))
      dispatch(editVehiculo({...form, marca:marcaa, tanqueGasolina:litros}, idVehicule, router, setTexto))
    }else{
      dispatch(editVehiculo({...form, marca:marcaa}, idVehicule, router, setTexto))

    }
    
  }
  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };
  return (
    <div>
      
      <Dialog
        open={visibleEdit1}
        TransitionProps={{ onEntering: handleEntering }}
        TransitionComponent={Transition}
      >
         {visibleModal  && <ModalCargando setVisibleModal={setVisibleModal} active={false} visibleModal={visibleModal} texto={texto.description} error={texto.error !== false && texto.error}/>}

        <DialogTitle id="alert-dialog-title">Edita tu Auto</DialogTitle>
        <DialogContent>
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
              type='number'

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
              type="number"
            />
            <TextField
              name="tanqueGasolina"
              label="Capacidad Tanque Gasolina "
              variant="outlined"
              value={form.tanqueGasolina}
              onChange={handleChange}
              minRows={1}
              style={{ marginBottom: "10px",width:'50%' }}
              type='number'
              
            />
            <FormControl className={classes.formControl}required={form.tanqueGasolina !== '' ? true: false} >
            <InputLabel id="demo-simple-select-label">Medida</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={medidas}
              onChange={(e)=>setMedidas(e.target.value)}
              variant="outlined"
              required={form.tanqueGasolina !== '' ? true: false}
            >
              <MenuItem value={"galones"}>Galones</MenuItem>
              <MenuItem value={"litros"}>Litros</MenuItem>
            </Select>
          </FormControl>
            <br/>

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
        <DialogActions style={{display:'flex', flexDirection:'column', padding:'5px 20px 20px 20px'}}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            autoFocus
            color="secondary"
            fullWidth
            disabled={form !== initialForm ? form.tanqueGasolina !== '' ? medidas !== null ? false:true:null :true }
          >
            Confirmar Cambios
          </Button>
            
          <Button style={{margin:'10px 0 0 0 '}} fullWidth onClick={()=> setVisibleEdit1(false)} variant="outlined" color='secondary'>
            No Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
