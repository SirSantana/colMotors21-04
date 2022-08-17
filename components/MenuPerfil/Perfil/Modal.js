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
  MenuItem,
  Grid
} from "@material-ui/core";
import { useRouter } from "next/router";
import { forwardRef, useEffect,useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { convertidor } from "../../../libs/convertidorFileBase64";
import {  createVehiculo, editVehiculo } from "../../../reducers/Actions/vehiculoActions";
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
export default function Modal({ visibleEdit1, setVisibleEdit1, idVehicule, owner, tipo }) {
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
  console.log(owner);
  console.log(idVehicule);
  const handleSubmit=(e)=>{
    setVisibleModal(true)
    e.preventDefault()
    setTexto({description:'Guardando...'})


   if(idVehicule === undefined){
    if(medidas === 'galones'){
      let litros = parseFloat((form.tanqueGasolina * 3.7).toFixed(2))
      dispatch(createVehiculo({...form, marca:marcaa, tanqueGasolina:litros,tipo, nameOwner:owner.name, owner:owner.owner}, router, setTexto))
    }else{
      dispatch(createVehiculo({...form, marca:marcaa,tipo,nameOwner:owner.name, owner:owner.owner},router, setTexto))
      console.log({...form, marca:marcaa, tipo:tipo});
    }
   }else{
    if(medidas === 'galones'){
      let litros = parseFloat((form.tanqueGasolina * 3.7).toFixed(2))
      dispatch(editVehiculo({...form, marca:marcaa, tanqueGasolina:litros}, idVehicule, router, setTexto))
    }else{
      dispatch(editVehiculo({...form, marca:marcaa}, idVehicule, router, setTexto))

    }
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

        <DialogTitle id="alert-dialog-title">{tipo !== undefined? `Agregar ${tipo}`: 'Edita tu Vehiculo'}</DialogTitle>
        <DialogContent>
          <form >
            <MenuLogos marca={marcaa} setMarca={setMarca} tipo={tipo}/>
            <div style={{display:'flex', flexDirection:'row'}}>
            <TextField
              name="referencia"
              label="Referencia"
              variant="outlined"
              value={form.referencia}
              onChange={handleChange}
              minRows={1}
              placeholder="Aveo"
              style={{ marginBottom: "10px", width:'48%' }}
              
            />

            <TextField
              name="cilindraje"
              label="Cilindraje"
              variant="outlined"
              value={form.cilindraje}
              onChange={handleChange}
              minRows={1}
              placeholder="1400"
              style={{ marginBottom: "10px", width:'48%' }}
              type='number'

            />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
            <TextField
              name="tanqueGasolina"
              label="Capacidad T.Gasolina "
              variant="outlined"
              value={form.tanqueGasolina}
              onChange={handleChange}
              minRows={1}
              placeholder="14"
              style={{ marginBottom: "10px", width:'48%' }}
              type='number'
            />
             <FormControl className={classes.formControl}required={form.tanqueGasolina !== '' ? true: false} >
            <InputLabel id="demo-simple-select-label">Medida</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={medidas}
              onChange={(e)=>setMedidas(e.target.value)}
              variant="outlined"
              required={form.tanqueGasolina !== '' ? true: false}
            >
              <MenuItem value={"galones"}>Galones</MenuItem>
              <MenuItem value={"litros"}>Litros</MenuItem>
            </Select>
          </FormControl>
            
            </div>
            <TextField
              name="modelo"
              label="Modelo"
              variant="outlined"
              value={form.modelo}
              onChange={handleChange}
              minRows={1}
              placeholder="2008"
              style={{ marginBottom: "10px", width:'48%' }}
              type="number"
            />
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
