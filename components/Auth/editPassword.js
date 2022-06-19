import { Card, TextField } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import useStyles from "./styles";

const initial ={
    password:'',
    confirmPassword:''
}
export default function EditPassword(){
  const classes = useStyles();

    const [form, setForm] = useState(initial)
    const [user, setUser] = useState(null)
    const handleChange=(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    console.log(user);
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('email')))
    },[])

    return(
        <>
        <Card  className={classes.paper}
        style={{
          marginTop: "0",
          backgroundColor: "gray",
          color: "white",
          width: "300px",
          textAlign: "center",
        }}
        elevation={3}>
            <LockOutlined />

        <h2 style={{marginTop:0}}>Cambio de contraseña</h2>
        <form>
        <TextField
        name="password"
        label="Contraseña"
        variant="filled"
        fullWidth
        onChange={handleChange}
        multiline
        style={{backgroundColor:'white', marginBottom:'10px'}}
        type='password'
        />
        <TextField
        name="confirmPassword"
        label="Confirmar Contraseña"
        variant="filled"
        fullWidth
        onChange={handleChange}
        multiline
        style={{backgroundColor:'white'}}
        type='password'

        />
        </form>
        </Card>
        </>
    )
}

