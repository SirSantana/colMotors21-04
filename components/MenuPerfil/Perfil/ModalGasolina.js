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
  import Image from 'next/image'
  import { AttachMoneyOutlined, CalendarToday, Check, LocalGasStationOutlined } from "@material-ui/icons";
  import ModalCargando from "../../../utils/modalCargando";
  
  const initialForm={
    referencia:'',
    modelo:'',
    tipoGasolina:'',
    marca:'',
    imagen:'',
    dinero:''
  }
  
  export default function ModalGasolina({ visibleEdit, setVisibleEdit, }) {
    const [marcaa, setMarca] = useState(null);
    const classes = useStyles()
    const [imagen, setImagen] = useState(null)
    const [form,setForm] = useState(initialForm) 
    const [cotizando, setCotizando]= useState(null)
    const [visibleModal, setVisibleModal] = useState(false)
    const router = useRouter() 
    const dispatch = useDispatch()
  
  
    const handleChange=(e)=>{
      setForm({...form, [e.target.name]: e.target.value})
      console.log(form);
  
    }
    const handleSubmit=(e)=>{
     
      setVisibleModal(true)
      e.preventDefault()
      
      
    }
  
    return (
      <div>
        
        <Dialog
          open={open || visibleEdit}
          onClose={()=> setVisibleEdit(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
      <LocalGasStationOutlined fontSize='large' style={{fontSize:'46px', color:'#f50057', alignItems:'center', margin:'20px auto 0 auto'}}/>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Empieza a manejar tus gastos, añade tus gastos en combustible cada vez que tanquees
            </DialogContentText>
  
            <form >
              <section style={{
              }}>
              <TextField
                name="dinero"
                label="Dinero Tanqueado"
                variant="outlined"
                value={form.dinero}
                onChange={handleChange}
                minRows={1}
                style={{ marginBottom: "10px" }}
                type='number'
                half='true'
              />
  
              
               
              <TextField
                name="tipoGasolina"
                label="Tipo de Gasolina"
                variant="outlined"
                value={form.tipoGasolina}
                onChange={handleChange}
                minRows={1}
                style={{ marginBottom: "10px" }}
                half='true'
              />
              
              <TextField
                name="modelo"
                variant="outlined"
                fullWidth
                value={form.modelo}
                onChange={handleChange}
                minRows={1}
                style={{ marginBottom: "10px" }}
                type='date'
              />
              </section>
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
              Confirmar Cambioss
            </Button>
              
            <Button style={{margin:'10px 0 0 0 '}} fullWidth onClick={()=> setVisibleEdit(false)} variant="outlined" color='secondary'>
              No Guardar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  