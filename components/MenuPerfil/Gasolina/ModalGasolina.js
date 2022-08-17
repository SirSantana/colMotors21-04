import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  InputLabel,
  Select,
  MenuItem,Slide,
  FormControl,
  Slider,
  Box,
  TextField
} from "@material-ui/core";
import { useRouter } from "next/router";
import {useRef, useState, forwardRef } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { LocalGasStationOutlined } from "@material-ui/icons";
import Input from "../../Auth/Input";
import ModalCargando from "../../../utils/modalCargando";
import { addGasolina, editGasolina } from "../../../reducers/Actions/gasolinActions";

const initialForm = {
  dineroGastado: "",
  kilometraje: "",
  owner:'',
  gasolinaInicial:'',
  fecha:''
};
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const initialText ={
    description:'', error:false
  }
  const initialText2={
    precioGalon:'',tipoGasolina:'', gasolinaInicial:''
  }
export default function ModalGasolina({idPost, edit,setEdit, setVisibleEdit, vehicule }) {
  const classes = useStyles();
  const [form, setForm] = useState(initialForm);
  const [form2, setForm2]=useState(initialText2)
  const router = useRouter();
  const dispatch = useDispatch();
  const radioGroupRef = useRef(null);
  const [visibleModal, setVisibleModal] = useState(false)
  const [message, setMessage] = useState(initialText)
  const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 25,
      label: '25%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];
  const {id} = router.query
  const handleChange = (e, newValue) => {
    console.log(form);
    console.log(newValue);
    if(newValue){
    setForm({ ...form, gasolinaInicial: newValue,fecha:form.fecha.replace(/-/g, '\/').replace(/T.+/, '')});
    }else{
      setForm({ ...form, [e.target.name]: e.target.value});
    }
    if(edit){
    setForm2({...form2, [e.target.name]: e.target.value})
    }
  }
console.log(edit);
console.log(form?.gasolinaInicial?.props?.value);
console.log(form2.tipoGasolina);
console.log(form2);
  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleModal(true)
    setMessage({description:'Agregando Tanqueada...'})
    if(edit){
      if(form?.gasolinaInicial?.props?.value !== form2.tipoGasolina){
        return dispatch(editGasolina({...form2, gasolinaInicial:form.gasolinaInicial},idPost, router, setMessage))
      }else{
        return dispatch(editGasolina({...form2},idPost, router, setMessage))
        
      }
        }
    if(Number(form.kilometraje) > vehicule.kilometraje){
      dispatch(addGasolina({...form, owner:vehicule?.owner, vehiculo:vehicule?.idVehicule?.id},id, router, setMessage ))
    }else{
    setMessage({description:`El kilometraje debe ser mayor a tu anterior tanqueada ${vehicule.kilometraje}`, error:true})
    }

  };
  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };
  let fecha = new Date();
    let anio = fecha.getFullYear();
    let mes = fecha.getMonth()
    let dia = fecha.getDate()
    mes+=1
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        TransitionProps={{ onEntering: handleEntering }}
        TransitionComponent={Transition}
      >
         {visibleModal && <ModalCargando setVisibleModal={setVisibleModal} active={false} visibleModal={visibleModal} texto={message.description} error={message.error}/>}

        <LocalGasStationOutlined
          fontSize="large"
          style={{
            fontSize: "46px",
            color: "#f50057",
            alignItems: "center",
            margin: "20px auto 0 auto",
          }}
        />

        <DialogContent style={{overflow:'hidden'}}>
          {/* <DialogContentText id="alert-dialog-description" style={{lineHeight:'16px',fontSize:'14px' }}>
            1.Coloca el dinero tanqueado.<br/> 2.Coloca el kilometraje de tu auto apenas tanquees.<br/>
            3.Elige la fecha de la tanqueada en el calendario.<br/> 4.Elige el tipo de gasolina
          </DialogContentText> */}
          <DialogContentText style={{margin:'0 auto'}}>
            {edit&& 'Edita tu Tanqueada'}
          </DialogContentText>
          <form >
            <Grid container spacing={1}>
              <Input
                name="dineroGastado"
                label="Dinero tanqueado"
                placeholder="90.000"
                handleChange={handleChange}
                half="true"
            type='number'
              />
              <Input
                name="kilometraje"
                label="Kilometraje Actual"
                placeholder={vehicule.kilometraje}
                handleChange={handleChange}
                half="true"
            type='number'
              />
              
              {edit &&
              <>
              <Input
                name="precioGalon"
                label="Precio Galon"
                placeholder={vehicule.precioGalon}
                handleChange={handleChange}
                half="true"
            type='number'
              />
               <FormControl
            className={classes.formControl}
            variant="outlined"
            style={{width:'45%'}}
          >
            <InputLabel id="demo-simple-select-label">
                Tipo
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form2.tipoGasolina}
              label="Tipo"
              onChange={handleChange}
              name="tipoGasolina"

            >
              <MenuItem  value={"Extra"}>Extra</MenuItem>
              <MenuItem value={"Corriente"}>Corriente</MenuItem>
              <MenuItem value={"Diesel"}>Diesel</MenuItem>
            </Select>
          </FormControl>
              </>}
              <input 
              type='date'
              min={vehicule.fecha !== null ? new Date(vehicule.fecha).toISOString().split('T')[0]: anio+'-'+0+mes+'-'+(dia-dia)+1}
              name="fecha"
              onChange={handleChange}
              style={{padding:'10px', marginLeft:'10px'}}
              required={true}
              // helperText={!edit ? "Agrega la Fecha": "Cambia la Fecha" }
              />
          <Box name='gasolinaInicial' sx={{ width: "90%", margin:'0 auto', marginTop:'20px' }}>
          <InputLabel >
          Selecciona un aproximado de cuanto combustible tienes en el tanque. (antes de tanquear)
            </InputLabel>
            <Slider
        marks={marks}
        step={5}
        onChange={handleChange}
        valueLabelDisplay="auto"
        defaultValue={25}
        name='gasolinaInicial'
      />
    </Box>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5px 20px 20px 20px",
          }}
        >
          <Button
            onClick={handleSubmit}
            variant="contained"
            autoFocus
            color="secondary"
            fullWidth
            disabled={edit ?false: form.dineroGastado !== '' && form.kilometraje!== '' && form.fuelInitial !== '' && form.fecha !== '' ? false: true}
          >
            {edit ? 'Confirmar Cambios': 'Agregar Tanqueada'}
            
          </Button>

          <Button
            style={{ margin: "10px 0 0 0 " }}
            fullWidth
    onClick={() => {setVisibleEdit(false);setEdit(false)}}
            variant="outlined"
            color="secondary"
          >
            No Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
