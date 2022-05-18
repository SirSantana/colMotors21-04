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
import { getCotizacion, getCotizaciones } from "../../../reducers/Actions/cotizacionesActions";
import PostContent from "./PostContent";
import useStyles from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { LOGOUT } from "../../../reducers/type";

export default function CotizacionVendedor({user,OnePost, el}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter()
  const { cotizacion, cotizaciones } = useSelector((state) => state.cotizaciones);
  
  // console.log(el);
  
  

  
  // const cotis = cotizaciones?.filter(ele=> ele._id === el)
  console.log(cotizacion);
  
  
  // let cotizacion;
    // let name = cotizacion?.nombreVendedor[0].toString();
  // let indice;
  // let two;
  //   for (let letter in name) {
  //     if (name[letter] === " ") {
  //       indice = letter + name[letter];
  //     }
  //   let secondLetter = name?.slice(indice, parseInt(indice) + 2);
  //   let twoLetters = name[0] + secondLetter
  //    two = twoLetters.replace(/ /g, "")
  // }
  // setTimeout(()=>{
  //   if(!cotizacion){
  //     dispatch({ type: LOGOUT });
  //   return router.push('/auth')
  // }
  // },5000)
  useEffect(()=>{
    dispatch(getCotizaciones());
    if (el) {
      dispatch(getCotizacion(el));
    }
  },[dispatch])
  
  return (
    <>
      <div className={classes.card}>
        <div className={classes.header1}>
          <Typography gutterBottom className={classes.typo}>
            {user?.result._id === OnePost?.creator
            ? <b>Cotización Vendedor</b>
          : <b>Tu Cotización</b>}
          </Typography>
        </div>
        <Card sx={{ width: "345px" }} className={classes.card1} elevation={2}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardHeader
              className={classes.header}
              avatar={
                <Avatar
                className={classes.purple2}
                  alt={cotizacion?.nombreVendedor[0]}
                >
                  {/* {two} */}
                </Avatar>
              }
              title={cotizacion?.nombreVendedor[0]}
              classes={{ subheader: classes.subheader, title: classes.title }}
              subheaderTypographyProps={{ variant: "body2" }}
              subheader="Vendedor"
            />
            <section
              style={{
                marginRight: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Menu />
            </section>
          </div>

          <Divider></Divider>

          <CardContent
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "8px",
              paddingLeft: "4px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <AttachMoney fontSize="large" />
                <Typography className={classes.title}>
                  {cotizacion?.precio}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "5px",
                }}
              >
                <Build fontSize="medium" />
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
                {cotizacion?.creator.pais}
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
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                className={classes.cotizar}
              >
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
