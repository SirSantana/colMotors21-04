import {Paper,Typography,Grid,Container,Avatar,Button,ButtonBase,} from "@material-ui/core";
import { Check, Close, LockOutlined } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Input from "./Input";
import useStyles from "./styles";
import { signin, signup } from "../../reducers/Actions/authActions";
import { useDispatch } from "react-redux";
import { Error } from "@material-ui/icons";
import { handleLogout } from "../../utils/handleLogout";
import Link from 'next/link'
import MenuLogos from "../../utils/MenuLogos/MenuLogos";
import ModalCargando from "../../utils/modalCargando";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  pais: "Colombia",
  // marca: "",
  ciudad:''
};
const initialText ={
  description:'', error:false
}

const SignUp = () => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState(initialText);
  const [marca, setMarca] = useState(null)
  const [visibleModal,setVisibleModal] = useState(false)

  const router = useRouter();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleModal(true)
    setMessage({description:'Espere un momento...'})
    if (isSignup) {
        dispatch(signup({...form}, router, setMessage))
    } else {
        dispatch(
          signin(form, router, setMessage)
        );
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <>

      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
         {visibleModal  && <ModalCargando setVisibleModal={setVisibleModal} active={false} visibleModal={visibleModal} texto={message.description} error={message.error !== false && message.error}/>}
          
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
                        half='true'
                        

                      />
                      <Input
                        name="lastName"
                        label="Apellido"
                        placeholder="Rodriguez"
                        handleChange={handleChange}
                        half='true'

                      />
                      {/* <MenuLogos marca={marca} setMarca={setMarca}/> */}
                      <Input
                        name="pais"
                        label="Colombia"
                        placeholder="Colombia"
                        half='true'
                        value={form.pais}
                        disabled='true'
                      />
                      <Input
                        name="ciudad"
                        label="Ciudad"
                        placeholder="Bogotá"
                        handleChange={handleChange}
                        half='true'
                      />
                     
                    </>
                  )}

                  <Input
                    name="email"
                    label="Correo"
                    placeholder="james10@gmail.com"
                    handleChange={handleChange}
                    type="email"
                    fullWidth
                  />
                  <Input
                    name="password"
                    label="Contraseña"
                    handleChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    handleShowPassword={handleShowPassword}
                    fullWidth
                  />

                  {isSignup && (
                    <Input
                      name="confirmPassword"
                      label="Repite la contraseña"
                      handleChange={handleChange}
                      type="password"
                      fullWidth
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
                  <Link href={'/auth/forgotPassword'}>
                  <a>
                  <p style={{cursor:'pointer', color:'#f50057'}}>Olvistaste tu contraseña?</p>
                  </a>
                  </Link>

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
