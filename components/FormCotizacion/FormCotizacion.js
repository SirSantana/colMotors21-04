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
  
  const initial = {
    marca: "",
    precio: "",
    garantia: "",
    vendedor: "",
    idVendedor: "",
    comentarios: [],
    cliente:""
  };
  export default function FormCotizacion({ OnePost,  user }) {
    const classes = useStyles();
    const [form, setForm] = useState(initial);
    const dispatch = useDispatch();
    
  
    const handleChange = (e) => {
      setForm({
        ...form,
        cliente: OnePost?.nombreCreador[0],
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    //   dispatch(postCotizacion(form, id));
      setForm(initial);
    //   setVisibleCotizacion(false);
    };
    return (
      <>
  
        <div style={{width:'350px'}}>
        <div className={classes.header}>
            <Typography gutterBottom className={classes.typo}>
              <b>Cotización</b> 
              
            </Typography>
            <Image
              src={`/images/${OnePost?.marca}.png`}
              width='40'
              height='40'
              />
        </div>
        <Paper className={classes.paper} raised elevation={6}>
          <form onSubmit={handleSubmit}>
            <Typography gutterBottom className={classes.typo}>
                <b>Auto:</b>{OnePost?.referencia}
            </Typography>

            <Typography gutterBottom className={classes.typo}>
            <Build style={{color: '#1b333d', marginRight:'5px'}}/>
                {OnePost?.repuesto}
            </Typography>
            <TextField
              name="marca"
              label="Envia valor unitario, marcas/origen de los productos"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              multiline
              className={classes.marca}
              required
              rows={3}
              value={form.marca}
            />
            <div className={classes.div}>
              <TextField
                name="garantia"
                label="Garantía Meses"
                required
                className={classes.garantia1}
                onChange={handleChange}
                value={form.garantia}
              />
              <TextField
                name="precio"
                label="Valor Total"
                onChange={handleChange}
                className={classes.garantia}
                required
                value={form.precio}
              />
            </div>
            
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              type="submit"
            >
              Envia tu Cotizacion
            </Button>
          </form>
        </Paper>
        </div>
      </>
    );
  }
  