import { Button, ButtonBase, Card, Paper, TextField, Typography } from "@material-ui/core";
import { Close, LockOutlined, Error, Check } from "@material-ui/icons";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import Input from "./Input";
import {useDispatch} from 'react-redux'
import {updatePassword} from '../../reducers/Actions/authActions'
import { useRouter } from "next/router";


const initial = {
  password: "",
  confirmPassword: "",
};
export default function EditPassword() {
  const classes = useStyles();
  const [form, setForm] = useState(initial);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePassword(form, {email:user?.result}, setMessage, setError, router))
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("email")));
  }, []);

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
      {error !== null && (
        <Paper className={classes.paper2} elevation={3}>
          <Error style={{ paddingRight: "10px" }} />
          <Typography
            className={classes.typo}
            style={{ fontSize: "14px", color: "white", marginRight: "8px" }}
          >
            {error}
          </Typography>
          <ButtonBase
            onClick={() => setError(error ? null : true)}
          >
            <Close />
          </ButtonBase>
        </Paper>
      )}
      <Card
        className={classes.paper}
        style={{
          marginTop: "0",
          backgroundColor: "white",
          color: "black",
          width: "300px",
          textAlign: "center",
        }}
        elevation={3}
      >
        <LockOutlined style={{ color: "#f50057" }} />

        <h2 style={{ marginTop: 0 }}>Cambio de contraseña</h2>
        <form onSubmit={handleSubmit}>
          <Input
            name="password"
            label="Contraseña"
            handleChange={handleChange}
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
          />
          <Input
            name="confirmPassword"
            label="Repite la contraseña"
            handleChange={handleChange}
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Cambiar Contraseña
          </Button>
        </form>
      </Card>
    </>
  );
}
