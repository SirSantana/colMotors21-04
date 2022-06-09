import {
  Paper,
  Typography,
  Grid,
  Container,
  Avatar,
  Button,
  TextField,
  ButtonBase,
} from "@material-ui/core";
import { Check, Close, LockOutlined } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import { useRouter } from "next/router";
import Input from "./Input";
import useStyles from "./styles";
import valid from "../../libs/valid";
import { signin, signup } from "../../reducers/Actions/authActions";
import { useDispatch } from "react-redux";
import { Error } from "@material-ui/icons";
import { handleLogout } from "../../utils/handleLogout";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  pais: "",
  marca: "",
};

const SignUp = () => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [messageLoad, setMessageLoad] = useState(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(
        signup(form, router, setMessage, setMessageError, setMessageLoad)
      );
    } else {
      dispatch(
        signin(form, router, setMessage, setMessageError, setMessageLoad)
      );
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <>
      {messageError !== null && (
        <Paper className={classes.paper2} elevation={3}>
          <Error style={{ paddingRight: "10px" }} />
          <Typography
            className={classes.typo}
            style={{ fontSize: "14px", color: "white", marginRight: "8px" }}
          >
            {messageError}
          </Typography>
          <ButtonBase
            onClick={() => setMessageError(messageError ? null : true)}
          >
            <Close />
          </ButtonBase>
        </Paper>
      )}

      {message !== null && (
        <Paper
          className={classes.paper2}
          style={{ backgroundColor: "#1b333d" }}
          elevation={3}
        >
          <Check style={{ paddingRight: "10px" }} />
          <Typography
            className={classes.typo}
            style={{ fontSize: "14px", color: "white", marginRight: "8px" }}
          >
            {message}
          </Typography>
        </Paper>
      )}

      {messageLoad !== null && (
        <Paper
          className={classes.paper2}
          style={{ backgroundColor: "#1b333d" }}
          elevation={3}
        >
          <Check style={{ paddingRight: "10px" }} />
          <Typography
            className={classes.typo}
            style={{ fontSize: "14px", color: "white", marginRight: "8px" }}
          >
            {messageLoad}
          </Typography>
        </Paper>
      )}

      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          {user ? (
            <>
              <Typography>Ya tienes una sesion iniciada</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={()=>handleLogout(setUser, router, dispatch)}
              >
                Cerrar Sesion
              </Button>
            </>
          ) : (
            <>
              <Typography component="h1" variant="h5">
                {isSignup ? "Registrarse" : "Iniciar Sesion"}
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {isSignup && (
                    <>
                      <Input
                        name="firstName"
                        label="Nombre"
                        placeholder="James"
                        handleChange={handleChange}
                        autoFocus
                        half
                      />
                      <Input
                        name="lastName"
                        label="Apellido"
                        placeholder="Rodriguez"
                        handleChange={handleChange}
                        half
                      />
                      <Input
                        name="marca"
                        label="Marca de Auto"
                        placeholder="Chevrolet Captiva"
                        handleChange={handleChange}
                        half
                      />
                      <Input
                        name="pais"
                        label="Ciudad y País"
                        placeholder="Bogota, Colombia"
                        handleChange={handleChange}
                        half
                      />
                    </>
                  )}

                  <Input
                    name="email"
                    label="Correo"
                    placeholder="james10@gmail.com"
                    handleChange={handleChange}
                    type="email"
                  />
                  <Input
                    name="password"
                    label="Contraseña"
                    handleChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    handleShowPassword={handleShowPassword}
                  />

                  {isSignup && (
                    <Input
                      name="confirmPassword"
                      label="Repite la contraseña"
                      handleChange={handleChange}
                      type="password"
                    />
                  )}
                </Grid>
                {isSignup && (
                  <Typography color="secondary" variant="body2">
                    Solo tenemos funcionamiento en Colombia, pronto llegaremos a
                    tu país
                  </Typography>
                )}
                <Button
                  id="test-button-form"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {isSignup ? "Registrarse" : "Iniciar Sesion"}
                </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      onClick={switchMode}
                      color="secondary"
                      variant="outlined"
                    >
                      {isSignup
                        ? "Ya tienes una cuenta, Ingresa aquí"
                        : "No tienes una cuenta? Registrate aquí"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default SignUp;
