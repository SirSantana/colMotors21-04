import {Avatar,Button,Card,CardActions,CardContent,CardHeader,Dialog,DialogActions,DialogContentText,DialogTitle,Divider,FormControl,FormHelperText,InputLabel,MenuItem,Select,Typography,} from "@material-ui/core";
import { AttachMoney, Build, Delete, Menu, Money, Place } from "@material-ui/icons";
import OnePost from "../Post/OnePost";
import useStyles from "../Post/styles";
import { useRouter } from "next/router";
import { useState } from "react";
import Comentarios from "./Comentarios";
import Image from "next/image";
import Modal from "./Modal";


export default function CotizacionVista({Cotizacion,Post,user,setRecarga,}) {
  const classes = useStyles();
  const router = useRouter();
  const [visibleCalificacion, setVisibleCalificacion] = useState(false);

  
  return (
    <>
      
      {user?.result._id === Cotizacion.creator ||
      user?.result._id === Post.creator ? (
        <div className={classes.container} style={{ gap: "30px" }}>
          <div className={classes.card}>
            <div className={classes.header1}>
              <Typography gutterBottom className={classes.typo}>
                {user?.result._id === Post.creator ? (
                  <b>Cotizacion Vendedor</b>
                ) : (
                  <b>Tu Cotización</b>
                )}
              </Typography>
            </div>
            <Card
              className={classes.card1}
            >
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
                      alt={Cotizacion?.nombreVendedor[0]}
                    >
                      {/* {two} */}
                    </Avatar>
                  }
                  title={Cotizacion?.nombreVendedor[0]}
                  classes={{
                    subheader: classes.subheader,
                    title: classes.title,
                  }}
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
                  <Typography
                      style={{ marginBottom:'10px', backgroundColor:'#f50057', padding:'10px' }}
                      className={classes.typography1}
                    >
                      {Cotizacion?.estado}
                    </Typography>
                </section>
              </div>

              <Divider
                style={{
                  backgroundColor: "white",
                  marginRight: "12px",
                  marginLeft: "12px",
                }}
              ></Divider>

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
                    {/* <Image
                  src={'/images/precio.png'}
                  alt={'/images/precio.png'}
                  width={40}
                  height={40}
                  style={{color:'white'}}
                 /> */}
                 <AttachMoney fontSize="large" style={{color:'gray', marginLeft:'3px'}}/>
    
                    <Typography className={classes.title}>
                      {Cotizacion?.precio}
                    </Typography>

                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Image
                     src={'/images/iconoPiston.png'}
                     alt={'/images/iconoPiston.png'}
                     width={40}
                     height={40}
                    />
                    <Typography
                      style={{ marginTop:'10px',  }}
                      className={classes.typography1}
                    >
                      {Cotizacion?.repuestos}
                      <Typography className={classes.typography1}>
                      Marca: {Cotizacion?.marca}
                      </Typography>
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
                    marginLeft:'3px',
                    marginBottom:'5px'
                  }}
                >
                  <Place
                    style={{color:'gray', width: "30px", height: "30px" }}
                  />
                  <Typography style={{ marginLeft: "5px" }} variant="body1">
                    {Cotizacion?.pais}
                  </Typography>
                </div>
              </CardActions>
              {user?.result?._id === Post.creator ? (
                <>
                  <Button
                    variant="contained"
                    fullWidth
                    className={classes.cotizar1}
                    onClick={() => router.push(`/users/${Cotizacion.creator}`)}
                    color="secondary"
                  >
                    Ver Pefil Vendedor
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

              <Comentarios user={user} post={Post} Cotizacion={Cotizacion} />
              
              {Cotizacion.comentarios.length > 0&& <Modal creator={Cotizacion.creator}/>}
              
                
              
            </Card>
          </div>
        </div>
      ) : null}
    </>
  );
}
