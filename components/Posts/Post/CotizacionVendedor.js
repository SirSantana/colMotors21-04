import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@material-ui/core";
import { AttachMoney, Build, Delete, Menu, Place } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCotizacion } from "../../../reducers/Actions/cotizacionesActions";
import PostContent from "./PostContent";
import useStyles from "./styles";
import Link from "next/link";

export default function CotizacionVendedor({ user, OnePost, cotizacionCreada }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {cotizacion} = useSelector(state=> state.cotizaciones)

  const letterFirst = cotizacion?.nombreVendedor[0].toString();
  useEffect(()=>{
    dispatch(getCotizacion(cotizacionCreada[0]))
  },[dispatch])
  return (
    <>
      <div className={classes.card}>
        <div className={classes.header1}>
          <Typography gutterBottom className={classes.typo}>
            <b>Tu Cotización</b>
          </Typography>
        </div>
        <Card sx={{ width: "345px" }} className={classes.card1} elevation={2}>
          <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <CardHeader
            className={classes.header}
            avatar={
              <Avatar className={classes.purple2} alt={cotizacion?.nombreVendedor}>
                {letterFirst?.substr(0, 1)}
              </Avatar>
            }
            title={cotizacion?.nombreVendedor[0]}
            classes={{ subheader: classes.subheader, title: classes.title }}
            subheaderTypographyProps={{ variant: "body2" }}
              subheader='Vendedor'
          />
          <section style={{marginRight:'10px', justifyContent:'center', alignItems:'center'}}>
          <Menu/>
          </section>

          </div>

          <Divider></Divider>

          <CardContent
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding:'8px',
              paddingLeft:'4px'
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              
              <div style={{ display: "flex", flexDirection: "row", alignItems:'center', marginBottom:'8px'  }}>
                <AttachMoney fontSize="large"/>
                <Typography
                  className={classes.title}
                >
                  {cotizacion?.precio}
                </Typography>
              </div>
              <div style={{ display: "flex", flexDirection: "row", marginLeft:'5px' }}>
                <Build  fontSize="medium"/>
                <Typography
                  style={{ marginLeft: "5px" }}
                  className={classes.typography1}
                >
                  {cotizacion?.repuestos}
                </Typography>
              </div>
            </div>
          </CardContent>

         
          <CardActions
            style={{ width: "90%", paddingLeft: "8px", paddingBottom: "0" }}
          >
            <div
              style={{
                display: "flex",
                flexDirecction: "row",
                alignItems: "center",
              }}
            >
              <Place
                style={{ color: "#1b333d", width: "30px", height: "30px" }}
              />
              <Typography style={{ marginLeft: "5px" }} variant="body1">
                {cotizacion?.creator[0].pais}
              </Typography>
            </div>

            
          </CardActions>
          {user?.result?._id === OnePost.creator ? (
            <>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className={classes.cotizar}
            >
              Ver Pefil Vendedor
            </Button>
            <Button color="secondary"
              variant="contained"
              fullWidth
              className={classes.cotizar}>
             Enviale un Mensaje
            </Button>
            </>
          ) : (
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              className={classes.cotizar}
            >
              Eliminar cotizacion
            </Button>
            
          )}
        </Card>
      </div>
    </>
  );
}
