import { Button, ButtonBase, Paper, TextField, Typography } from "@material-ui/core";
import { Check, Close, Error, ErrorOutlineRounded, ErrorTwoTone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../reducers/Actions/authActions";
import useStyles from "./styles";
import Input from "./Input";
import ModalCargando from "../../utils/modalCargando";

const initial = {
    email: "",
  };

export default function ForgotPasswordComponent({sendMessage}) {
  const [form, setForm] = useState(initial);
  const classes = useStyles();
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
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
     {/* {message !== null && (
        <Paper className={classes.paper2} elevation={3}>
          <Check style={{ paddingRight: "10px" }} />
          <Typography
            className={classes.typo}
            style={{ fontSize: "14px", color: "white", marginRight: "8px" }}
          >
            {message}
          </Typography>
          
        </Paper>
      )} */}
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
        <h4 style={{fontWeight:'400'}}>Ingresa el correo que tienes registrado en la pagina. Te enviaremos un email para que puedas restaurar tu contraseña</h4>
        <form onSubmit={handleSubmit}>
        <Input
              name="email"
              label="Email"
              variant="filled"
              value={form.email}
              fullWidth
              handleChange={handleChange}
              type='email'
              style={{backgroundColor:'white'}}
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
