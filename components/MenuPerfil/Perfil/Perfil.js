import {
  Card,
  CardContent,
  Button,
  Typography,
  Divider,
  Paper,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { useEffect, useState } from "react";
import { getUser } from "../../../reducers/Actions/authActions";
import {useRouter} from 'next/router'
import Link from 'next/link'
import { Stars,} from "@material-ui/icons";

export default function Perfil({user}) {
  // const { users , user }= useSelector((state) => state.users);
  const router = useRouter()
  const classes = useStyles();
  const { id } = router.query;
  const dispatch = useDispatch();



  // useEffect(() => {
  //   dispatch(getUser(id));

  // }, [id]);

  return (
    <>
      {/* {userr?.result?._id === user?._id ? (
        <div style={{width:'100%', maxWidth:'800px'}}>
          <Card raised={true} elevation={6} className={classes.card1}>
            <Typography className={classes.typography}>Mi Perfil</Typography>
          </Card>
            <Card raised={true} elevation={6} className={classes.card}>
              <CardContent>
                <Typography variant="body1" component="h2">
                 <b>Nombre: </b> {user?.name}
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
                <Typography variant="body1" component="h2">
                 <b>Correo: </b> {user?.email}
                </Typography>
                <Divider style={{ margin: "20px 0" }} />

                <Typography variant="body1" component="h2">
                  <b>Telefono: ...</b>
                </Typography>
                <Divider style={{ margin: "20px 0" }} />

                <Typography variant="body1" component="h2">
                  <b>Compras: ...</b>
                </Typography>
                <Divider style={{ margin: "20px 0" }} />

                <Typography variant="body1" component="h2">
                 <b> Ventas: ...</b>
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
                <Link href="/home">
                <a>
                <Button
                  color="secondary"
                  variant="contained"
                >
                  Regresar
                </Button>
                </a>
                </Link>
                <Link href="/home">
                <a>
                <Button 
                  style={{marginLeft:'10px'}}
                  color="primary"
                  variant="contained"
                >
                  Editar Perfil
                </Button>
                </a>
                </Link>
                
              </CardContent>
            </Card>
        </div>
      ) : ( */}
        <>
        <Card raised="true" elevation={6} className={classes.card1}>
          <div style={{display:'flex', flexDirection:'row'}}>
          <Stars className={classes.iconStar}/>  <Stars className={classes.iconStar}/>  <Stars className={classes.iconStar}/><Stars className={classes.iconStar}/> <Stars style={{color:'white'}} />
          </div>
            <Typography className={classes.typography}><b>Vendedor </b> {user?.name}</Typography>
          </Card>
          <div className={classes.container}>
            <Card raised="true" elevation={6} className={classes.card}>
              <CardContent>
              <Typography variant="body1" component="h2">
                  Calificacion: <Stars className={classes.iconStar}/> <Stars className={classes.iconStar}/> <Stars className={classes.iconStar}/> <Stars />
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
                <Typography variant="body1" component="h2">
                  Compras: ...
                </Typography>
                <Divider style={{ margin: "20px 0" }} />

                <Typography variant="body1" component="h2">
                  Ventas: ...
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
                <Typography variant="body1" component="h2">
                  Ubicacion: {user?.pais}
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
              </CardContent>
            </Card>
          </div></>
      {/* )} */}
    </>
  );
}
