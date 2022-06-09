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
import {useRouter} from 'next/router'
import { Stars,} from "@material-ui/icons";

export default function Perfil({user}) {
  const router = useRouter()
  const classes = useStyles();

  return (
    <>
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
    </>
  );
}
