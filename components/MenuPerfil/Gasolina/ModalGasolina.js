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
  Box
} from "@material-ui/core";
import { useRouter } from "next/router";
import {useRef, useState, forwardRef } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { LocalGasStationOutlined } from "@material-ui/icons";
import Input from "../../Auth/Input";
import ModalCargando from "../../../utils/modalCargando";
import { addGasolina } from "../../../reducers/Actions/gasolinActions";

const initialForm = {
  dineroGastado: "",
  kilometraje: "",
  owner:'',
  fuelInitial:'',
};
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const initialText ={
    description:'', error:false
  }
export default function ModalGasolina({ visibleEdit, setVisibleEdit, vehicule }) {
  const classes = useStyles();
  const [form, setForm] = useState(initialForm);
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

    if(newValue){
    setForm({ ...form, fuelInitial: newValue });
    }else{
      setForm({ ...form, [e.target.name]: e.target.value});
    }
    console.log(newValue, form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleModal(true)
    setMessage({description:'Agregando Tanqueada...'})

    if(Number(form.kilometraje) > vehicule.kilometraje){
      dispatch(addGasolina({...form, owner:id, vehiculo:vehicule?.idVehicule?.id},id, router, setMessage ))
    }else{
    setMessage({description:`El kilometraje debe ser mayor a tu anterior tanqueada ${vehicule.kilometraje}`, error:true})
    }

  };
  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

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

          <form >
            <Grid container spacing={1}>
              <Input
                name="dineroGastado"
                label="Dinero tanqueado"
                placeholder="90.000"
                handleChange={handleChange}
                half="true"
            variant="standard"
            type='number'

              />
              <Input
                name="kilometraje"
                label="Kilometraje Actual"
                placeholder={vehicule.kilometraje}
                handleChange={handleChange}
                half="true"
            variant="standard"
            type='number'
              />
          
          <Box name='fuelInitial' sx={{ width: "90%", margin:'0 auto', marginTop:'20px' }}>
          <InputLabel >
          Selecciona un aproximado de cuanto combustible tienes en el tanque. (antes de tanquear)
            </InputLabel>
            <Slider
        marks={marks}
        step={5}
        onChange={handleChange}
        valueLabelDisplay="auto"
        defaultValue={25}
        
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
            disabled={form.dineroGastado !== '' && form.kilometraje!== '' && form.fuelInitial !== ''  ? false: true}
          >
            Confirmar Cambioss
          </Button>

          <Button
            style={{ margin: "10px 0 0 0 " }}
            fullWidth
            onClick={() => setVisibleEdit(false)}
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
