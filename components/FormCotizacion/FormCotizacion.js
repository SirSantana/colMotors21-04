import {
  TextField,
  Typography,
  Paper,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { postCotizacion } from "../../reducers/Actions/cotizacionesActions";
import { useRouter } from "next/router";
import Image from "next/image";
import ModalCargando from "../../utils/modalCargando";

const initial = {
  repuestos: "",
  precio: "",
  vendedor: "",
  idVendedor: "",
  idPost: "",
  ciudad: "",
  marca: "",
  estado: "",
};
const initialText = {
  description: "",
  error: false,
};
export default function FormCotizacion({ OnePost, user }) {
  const classes = useStyles();
  const [form, setForm] = useState(initial);
  const dispatch = useDispatch();
  const router = useRouter();
  const [message, setMessage] = useState(initialText);
  const [visibleModal, setVisibleModal] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      cliente: OnePost?.nombreCreador[0],
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleModal(true);
    setMessage({ description: "Cotizando..." });
    dispatch(
      postCotizacion(
        {
          ...form,
          nombreVendedor: user?.result.name,
          idVendedor: user?.result._id,
          idPost: OnePost._id,
          pais: user?.result.pais,
        },
        router,
        setMessage
      )
    );
    setForm(initial);
    // setVisibleCotizacion(false);
  };
  return (
    <>
      {visibleModal && (
        <ModalCargando
          setVisibleModal={setVisibleModal}
          active={false}
          visibleModal={visibleModal}
          texto={message.description}
          error={message.error !== false && message.error}
        />
      )}

      <div className={classes.header}>
        <Typography gutterBottom className={classes.typo}>
          <b>Tu Cotización</b>
        </Typography>
      </div>
      <Paper className={classes.paper} raised="true" elevation={6}>
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
          <section
            style={{
              display: "flex",
              margin: "0",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <Image
            src={'/images/iconoPiston.png'}
            alt={'/images/iconoPiston.png'}
            width={40}
            height={40}
            /> */}
            <Image
              src={"/images/Papel.png"}
              alt={"/images/Papel.png"}
              width={40}
              height={40}
            />
            <TextField
              name="repuestos"
              label="Descripcion de los productos"
              fullWidth
              onChange={handleChange}
              multiline
              required
              variant="outlined"
              minRows={3}
              value={form.repuestos}
              style={{
                marginBottom: "10px",
                marginLeft: "10px",
                paddingTop: "10px",
              }}
            />
          </section>
          <section
            style={{
              display: "flex",
              margin: "0",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              src={"/images/marcas.png"}
              alt={"/images/marcas.png"}
              width={40}
              height={40}
            />
            <TextField
              name="marca"
              label="Marca u Origen"
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              value={form.marca}
              style={{ marginBottom: "10px", marginLeft: "10px" }}
            />
          </section>
          <Image
            src={"/images/quality.png"}
            alt={"/images/quality.png"}
            width={40}
            height={40}
            style={{ marginRight: "3px" }}
          />
          <FormControl
            style={{
              width: "83%",
              backgroundColor: "white",
              marginLeft: "4px",
              marginBottom: "10px",
            }}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-label">
              Estado del Producto
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form.estado}
              label="Estado"
              onChange={handleChange}
              name="estado"
            >
              <MenuItem value={"Nuevo"}>Nuevo</MenuItem>
              <MenuItem value={"Segunda"}>De Segunda</MenuItem>
              <MenuItem value={"Restaurado"}>Restaurado</MenuItem>
            </Select>
          </FormControl>
          <section
            style={{
              display: "flex",
              margin: "0",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              src={"/images/precio.png"}
              alt={"/images/precio.png"}
              width={40}
              height={40}
            />
            <TextField
              name="precio"
              label="Valor Total"
              onChange={handleChange}
              fullWidth
              variant="outlined"
              style={{ marginLeft: "10px" }}
              required
              value={form.precio}
            />
          </section>

          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            type="submit"
          >
            Envia tu Cotizacion
          </Button>
        </form>
      </Paper>
    </>
  );
}
