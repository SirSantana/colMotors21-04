import {Avatar,Button,Card,CardActions,CardContent,CardHeader,Divider,Typography,} from "@material-ui/core";
import {AttachMoney,Place} from "@material-ui/icons";
import useStyles from "../Post/styles";
import { useRouter } from "next/router";
import { useState } from "react";
import Comentarios from "./Comentarios";
import Image from "next/image";
import Modal from "./Modal";
import Link from 'next/link'

export default function CotizacionVista({ Cotizacion, PostCreator, dataUser }) {
  const classes = useStyles();
  const router = useRouter();
  const { userId } = dataUser;

  const [visibleEdit, setVisibleEdit] = useState(false);

  return (
    <>
      {userId === Cotizacion.creator || userId === PostCreator ? (
        <div className={classes.container} style={{ gap: "30px" }}>
          <div className={classes.card}>
            <div className={classes.header1}>
              <Typography gutterBottom className={classes.typo}>
                {userId === PostCreator ? (
                  <b>Cotizacion Vendedor</b>
                ) : (
                  <b>Tu Cotización</b>
                )}
              </Typography>
            </div>
            <Card className={classes.card1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link href={`/users/${Cotizacion.creator}`}>
                <a>
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
                </a>
                </Link>
                <section
                  style={{
                    marginRight: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      marginBottom: "10px",
                      backgroundColor: "#f50057",
                      padding: "10px",
                      color: "#f1f1f1",
                    }}
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
                    <AttachMoney
                      fontSize="large"
                      style={{ color: "lightGray", marginLeft: "3px" }}
                    />

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
                      src={"/images/iconoPiston.png"}
                      alt={"/images/iconoPiston.png"}
                      width={40}
                      height={40}
                    />
                    <Typography
                      style={{ marginTop: "10px", color: "#f1f1f1" }}
                      className={classes.typography1}
                    >
                      {Cotizacion?.repuestos}
                      <Typography
                        className={classes.typography1}
                        style={{ color: "#f1f1f1" }}
                      >
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
                    marginLeft: "3px",
                    marginBottom: "5px",
                  }}
                >
                  <Place
                    style={{ color: "lightGray", width: "30px", height: "30px" }}
                  />
                  <Typography style={{ marginLeft: "5px" }} variant="body1">
                    {Cotizacion?.pais}
                  </Typography>
                </div>
              </CardActions>
              {userId === PostCreator ? (
                <>
                  {/* <Button
                    variant="contained"
                    fullWidth
                    className={classes.cotizar1}
                    onClick={() => router.push(`/users/${Cotizacion.creator}`)}
                    color="secondary"
                  >
                    Ver Pefil Vendedor
                  </Button> */}
                  <Button
                    variant="contained"
                    fullWidth
                    className={classes.cotizar1}
                    onClick={() => setVisibleEdit(true)}
                    color="secondary"
                  >
                    Enviar Mensaje
                  </Button>
                </>
              ) : (
                <>
                <Button
                  color="secondary"
                  variant="contained"
                  fullWidth
                  className={classes.cotizar}
                >
                  Eliminar cotizacion
                </Button>
                <Button
                variant="contained"
                fullWidth
                className={classes.cotizar}
                onClick={() => setVisibleEdit(true)}
                color="secondary"
              >
                Enviar Mensaje
              </Button>
                </>
                
              )}

              {visibleEdit && (
                <Comentarios
                  dataUser={dataUser}
                  PostCreator={PostCreator}
                  Cotizacion={Cotizacion}
                />
              )}

              {Cotizacion.comentarios.length > 0 &&
                Cotizacion?.calificado !== true && userId !== Cotizacion.creator && (
                  <Modal
                    creator={Cotizacion.creator}
                    cotizacionId={Cotizacion._id}
                  />
                )}
            </Card>
          </div>
        </div>
      ) : null}
    </>
  );
}
