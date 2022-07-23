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
import { useEffect, useState } from "react";
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
  imagen:''
}
const initialText ={
  description:'', error:false
}
export default function Modal({ visibleEdit1, setVisibleEdit1, idVehicule, owner }) {
  const [marcaa, setMarca] = useState(null);
  const classes = useStyles()
  const [imagen, setImagen] = useState(null)
  const [form,setForm] = useState(initialForm) 
  const [cotizando, setCotizando]= useState(null)
  const [visibleModal, setVisibleModal] = useState(false)
  const [texto, setTexto] = useState(initialText)
  const router = useRouter() 
  const dispatch = useDispatch()


  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})

  }
  const handleSubmit=(e)=>{
   
    setVisibleModal(true)
    e.preventDefault()
    setTexto({description:'Guardando...'})
    dispatch(editVehiculo({...form, marca:marcaa}, idVehicule, router, setTexto))
    
  }

  return (
    <div>
      
      <Dialog
        open={open || visibleEdit1}
        onClose={()=> setVisibleEdit1(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
         {visibleModal  && <ModalCargando setVisibleModal={setVisibleModal} active={false} visibleModal={visibleModal} texto={texto.description} error={texto.error !== false && texto.error}/>}

        <DialogTitle id="alert-dialog-title">Edita tu Auto</DialogTitle>
        <DialogContent>
          <form >
            <MenuLogos marca={marcaa} setMarca={setMarca} />
            <section style={{
              display: "flex",
              margin: "0",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <img
              src={"/images/iconCAR.png"}
              alt={"/images/iconCAR.png"}
              style={{marginRight:'10px', width:'30px', height:'30px'}}
            />
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

            </section>
            <section style={{
              display: "flex",
              margin: "0",
              flexDirection: "row",
              alignItems: "center",
            }}>
              <img
              src={'/images/engine.png'}
              alt='engine'
              style={{width:'30px', height:'30px',marginRight:'13px'}}
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
            </section>
            
            <section style={{
              display: "flex",
              margin: "0",
              flexDirection: "row",
              alignItems: "center",
            }}>
               <CalendarToday fontSize='large' style={{marginRight:'10px'}}/>
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
            </section>
            

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
