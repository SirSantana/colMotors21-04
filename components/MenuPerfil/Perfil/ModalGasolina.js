import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { LocalGasStationOutlined } from "@material-ui/icons";
import Input from "../../Auth/Input";

const initialForm = {
  tipoGasolina: "",
  dinero: "",
  kilometraje: "",
  fecha: "",
};

export default function ModalGasolina({ visibleEdit, setVisibleEdit }) {
  const classes = useStyles();
  const [form, setForm] = useState(initialForm);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Dialog
        open={open || visibleEdit}
        onClose={() => setVisibleEdit(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <LocalGasStationOutlined
          fontSize="large"
          style={{
            fontSize: "46px",
            color: "#f50057",
            alignItems: "center",
            margin: "20px auto 0 auto",
          }}
        />

        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{lineHeight:'20px'}}>
            1.Coloca el dinero tanqueado.<br/> 2.Coloca el kilometraje de tu auto apenas tanquees.<br/>
            3.Elige la fecha de la tanqueada en el calendario.<br/> 4.Elige el tipo de gasolina
          </DialogContentText>

          <form >
            <Grid container spacing={1}>
              <Input
                name="gastado"
                label="Dinero Tanqueado"
                placeholder="90.000"
                handleChange={handleChange}
                autoFocus
                half="true"
              />
              <Input
                name="kilometraje"
                label="Kilometraje Inicial"
                placeholder="13.870"
                handleChange={handleChange}
                autoFocus
                half="true"
              />
              <Input
                name="fecha"
                label="Fecha"
                handleChange={handleChange}
                autoFocus
                half="true"
                type='date'
              />
               <FormControl
            className={classes.formControl}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-label">
                Tipo de Gasolina
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form.estado}
              label="Estado"
              onChange={handleChange}
              name="estado"
            >
              <MenuItem value={"Nuevo"}>Extra</MenuItem>
              <MenuItem value={"Segunda"}>Corriente</MenuItem>
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
