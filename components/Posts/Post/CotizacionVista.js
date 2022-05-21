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
  import useStyles from "./styles";

export default function CotizacionVista({user, OnePost, cotizacion}){
  const classes = useStyles();

    return(
        <>
        <div className={classes.card}>
        <div className={classes.header1}>
          <Typography gutterBottom className={classes.typo}>
            {user?.result._id === OnePost?.creator
            ? <b>Cotización Vendedor</b>
          : <b>Tu Cotización</b>}
          </Typography>
        </div>
        <Card sx={{ width: "345px" }} className={classes.card1} elevation={8}>
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

          <Divider style={{backgroundColor:'white', marginRight:'12px', marginLeft:'12px'}}></Divider>

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
                <AttachMoney fontSize="large" style={{color:'#949494'}} />
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
                <Build fontSize="medium" style={{color:'#949494'}}/>
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
                style={{ color: '#949494', width: "30px", height: "30px" }}
              />
              <Typography style={{ marginLeft: "5px" }} variant="body1">
                {cotizacion?.pais}
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
    )
}