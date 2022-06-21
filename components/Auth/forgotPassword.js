import { Button, ButtonBase, Input, Paper, TextField, Typography } from "@material-ui/core";
import { Check, Close, Error, ErrorOutlineRounded, ErrorTwoTone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../reducers/Actions/authActions";
import useStyles from "./styles";

const initial = {
    email: "",
  };

export default function ForgotPasswordComponent({sendMessage}) {
  const [form, setForm] = useState(initial);
  const classes = useStyles();
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const handleChange=(e)=>{

      setForm({...form, [e.target.name]: e.target.value})

  }
  const handleSubmit=(e)=>{
      e.preventDefault()
      // dispatch(forgotPassword({...form, setError, setMessage}))
     
      sendMessage(form)
      setForm(initial)
      setMessage('Mensaje Enviado')
    }
   
  return (
    <>
     {message !== null && (
        <Paper className={classes.paper2} elevation={3}>
          <Check style={{ paddingRight: "10px" }} />
          <Typography
            className={classes.typo}
            style={{ fontSize: "14px", color: "white", marginRight: "8px" }}
          >
            {message}
          </Typography>
          <ButtonBase
            onClick={() => setMessage(message ? null : true)}
          >
            <Close />
          </ButtonBase>
        </Paper>
      )}
      <Paper
        className={classes.paper}
        style={{
          marginTop: "0",
          backgroundColor: "gray",
          color: "white",
          width: "300px",
          textAlign: "center",
        }}
        elevation={3}
      >
        <Error fontSize="large" style={{color:'#f50057'}} />
        <h4>Ingresa el correo que tienes registrado en la pagina. Te enviaremos un email para que puedas restaurar tu contraseña</h4>
        <form onSubmit={handleSubmit}>
        <TextField
              name="email"
              label="Email"
              variant="filled"
              fullWidth
              onChange={handleChange}
              multiline
              className={classes.card}
              style={{backgroundColor:'white'}}
              value={form.email}
              required
            />
          <Button
            id="test-button-form"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Enviar
          </Button>
        </form>
      </Paper>
    </>
  );
}
