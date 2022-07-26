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
  FormControl
} from "@material-ui/core";
import { useRouter } from "next/router";
import {useRef, useState, forwardRef } from "react";
import { useDispatch } from "react-redux";
import useStyles from "../Perfil/styles";
import { LocalGasStationOutlined } from "@material-ui/icons";
import Input from "../../Auth/Input";
import ModalCargando from "../../../utils/modalCargando";
import { addGasolina } from "../../../reducers/Actions/gasolinActions";

const initialForm = {
  tipoGasolina: "",
  dineroGastado: "",
  kilometraje: "",
  fecha: "",
  owner:''
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


  const {id} = router.query
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleModal(true)
    setMessage({description:'Agregando Tanqueada...'})
    if(form.kilometraje > vehicule.kilometraje){
      console.log(vehicule?.idVehiculo?.id);
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
          <DialogContentText id="alert-dialog-description" style={{lineHeight:'20px', }}>
            1.Coloca el dinero tanqueado.<br/> 2.Coloca el kilometraje de tu auto apenas tanquees.<br/>
            3.Elige la fecha de la tanqueada en el calendario.<br/> 4.Elige el tipo de gasolina
          </DialogContentText>

          <form >
            <Grid container spacing={1}>
              <Input
                name="dineroGastado"
                label="$ Gastado"
                placeholder="90.000"
                handleChange={handleChange}
                half="true"
            variant="standard"
              />
              <Input
                name="kilometraje"
                label="Kilometraje"
                placeholder="13.870"
                handleChange={handleChange}
                half="true"
            variant="standard"

              />
              <input
                name="fecha"
                label="Fecha"
                handleChange={handleChange}
                type='date'
                variant="outlined"
                style={{width:'48%', color:'white'}}
              />
               <FormControl
            className={classes.formControl}
            variant="standard"
          >
            <InputLabel id="demo-simple-select-label">
                Tipo
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form.tipoGasolina}
              label="Tipo"
              onChange={handleChange}
              name="tipoGasolina"
            >
              <MenuItem value={"Extra"}>Extra</MenuItem>
              <MenuItem value={"Corriente"}>Corriente</MenuItem>
            </Select>
          </FormControl>
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
            disabled={form.dineroGastado !== '' && form.kilometraje!== '' && form.fecha!== '' && form.tipoGasolina!== '' ? false: true}
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
