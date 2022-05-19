import {
    Card,
    TextField,
    Typography,
    Paper,
    Divider,
    Button,
  } from "@material-ui/core";
  import { useState } from "react";
  import { useDispatch } from "react-redux";
  import Image from 'next/image'
  import useStyles from "./styles";
import { Build } from "@material-ui/icons";
import { postCotizacion } from "../../reducers/Actions/cotizacionesActions";
  import {useRouter} from 'next/router'
  const initial = {
    repuestos: "",
    precio: "",
    vendedor: "",
    idVendedor: "",
    idPost:'',
    ciudad:''
  };
  export default function FormCotizacion({ OnePost,  user, createCotizacion }) {
    const classes = useStyles();
    const [form, setForm] = useState(initial);
    const dispatch = useDispatch()
    const router = useRouter()
    const handleChange = (e) => {
      setForm({
        ...form,
        cliente: OnePost?.nombreCreador[0],
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(postCotizacion({...form, nombreVendedor:user?.result.name, idVendedor:user?.result._id, idPost:OnePost._id, pais:user?.result.pais}, router ))
      setForm(initial);
      // setVisibleCotizacion(false);
    };
    return (
      <>
  
        <div className={classes.header}>
            <Typography gutterBottom className={classes.typo}>
              <b>Tu Cotización</b> 
              
            </Typography>
        </div>
        <Paper className={classes.paper} raised elevation={6}>
          <form onSubmit={handleSubmit}>
            
            <TextField
              name="repuestos"
              label="Envia valor unitario, marcas/origen de los productos"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              multiline
              className={classes.repuestos}
              required
              minRows={3}
              value={form.repuestos}
            />
              
              <TextField
                name="precio"
                label="Valor Total"
                onChange={handleChange}
                className={classes.precio}
                required
              variant="outlined"
                value={form.precio}
              />
            
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
  