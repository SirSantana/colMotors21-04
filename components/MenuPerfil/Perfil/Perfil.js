import { useParams } from "react-router-dom";
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
import { getUser } from "../../../Reducers/Actions/authActions";
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Perfil({userr}) {
  const { users , user }= useSelector((state) => state.users);
  const router = useRouter()
  const classes = useStyles();
  const { id } = router.query;
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getUser(id));

  }, [id]);

  return (
    <>
      {userr?.result?._id === user?._id ? (
        <>
          <Card raised={true} elevation={6} className={classes.card1}>
            <Typography className={classes.typography}>Mi Perfil</Typography>
          </Card>
          <div className={classes.container}>
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
                <Link href="/">
                <a>
                <Button
                  color="primary"
                  variant="contained"
                >
                  Regresar
                </Button>
                </a>
                </Link>
                
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <>
        <Card raised="true" elevation={6} className={classes.card1}>
            <Typography className={classes.typography}>Perfil:{user?.name}</Typography>
          </Card>
          <div className={classes.container}>
            <Card raised="true" elevation={6} className={classes.card}>
              <CardContent>
                <Typography variant="body1" component="h2">
                  Compras: ...
                </Typography>
                <Divider style={{ margin: "20px 0" }} />

                <Typography variant="body1" component="h2">
                  Ventas: ...
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
                
              </CardContent>
            </Card>
          </div></>
      )}
    </>
  );
}
