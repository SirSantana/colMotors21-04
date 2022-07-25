import { Button, Paper,  } from "@material-ui/core";
import {  Error } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import Input from "./Input";
import ModalCargando from "../../utils/modalCargando";
import { theme } from "../../utils/theme";

const initial = {
    email: "",
  };

export default function ForgotPasswordComponent({sendMessage}) {
  const [form, setForm] = useState(initial);
  const classes = useStyles();
  const [message, setMessage] = useState(null)
  const [visibleModal, setVisibleModal] = useState(false)

  const handleChange=(e)=>{

      setForm({...form, [e.target.name]: e.target.value})

  }
  const handleSubmit=(e)=>{
      e.preventDefault()
      // dispatch(forgotPassword({...form, setError, setMessage}))
     
      sendMessage(form)
      setVisibleModal(true)
      setForm(initial)
      setMessage('Mensaje Enviado')
    }
   
  return (
    <>
    <ModalCargando setVisibleModal={setVisibleModal} active={false} visibleModal={visibleModal} texto={'El mensaje fue enviado a tu correo'}/>
     
      <Paper
        className={classes.paper}
        style={{
          marginTop: "0",
          backgroundColor: 'white',
          width: "300px",
          textAlign: "center",
        }}
        elevation={3}
      >
        <Error fontSize="large" style={{color:'#f50057'}} />
        <h4 style={theme.font.subtitle}>Ingresa el correo que tienes registrado en la pagina. Te enviaremos un email para que puedas restaurar tu contraseña</h4>
        <form style={{marginTop:'10px'}} onSubmit={handleSubmit}>
        <Input
              name="email"
              label="Email"
              value={form.email}
              fullWidth
              handleChange={handleChange}
              type='email'
              required
            />
          <Button
            id="test-button-form"
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
           Enviar
          </Button>
        </form>
      </Paper>
    </>
  );
}
