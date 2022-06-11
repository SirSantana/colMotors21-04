import { Avatar, Card, CardContent, CardHeader, Divider, Typography,} from "@material-ui/core";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { BarChart, Person, Stars } from "@material-ui/icons";
import Image from 'next/image'

export default function Perfil({ user }) {
  const classes = useStyles();

console.log(user);
  return (
    <>
      <>
        {/* <Card raised="true" elevation={6} className={classes.card1}>
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
          </div> */}

          <div className={classes.container}>
          <Card sx={{ width: "345px" }} className={classes.card} elevation={8}>
            
            <CardHeader
              style={{padding:'4px'}}
              className={classes.header}
              avatar={
                <Avatar
                src={user?.name?.charAt(0)}
                className={classes.purple}
                alt={user?.name?.charAt(0)}
              >
                {user?.name?.charAt(0)}
              </Avatar>
              }
              title={user?.name}
              subheader={'Vendedor'}
              classes={{ subheader: classes.subheader2, title: classes.title2 }}
              subheaderTypographyProps={{ variant: "body2", color:'#f1f1f1', textAlign:'center' }}
            />
            <Divider style={{width:'90%', marginLeft:'auto', marginRight:'auto'}}/>
            <CardContent style={{ width:'100%', display:'flex', flexDirection:'column',padding:'0px' }}>
              <div style={{padding:'10px'}}>
              <section style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <BarChart style={{color:"red"}} fontSize='large'/>
                <Typography className={classes.heading} >
                  Estadisticas.
                </Typography>
                </section>
                <section style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <Person fontSize="large"/>
                <Stars className={classes.iconStar}/>  <Stars className={classes.iconStar}/>  <Stars className={classes.iconStar}/><Stars className={classes.iconStar}/> <Stars style={{color:'gray'}} />
                </section>
                
                <section style={{marginTop:'10px',display:'flex',justifyContent:'center', backgroundColor:'#f1f1f1', alignItems:'center'}}>
                
                <Image src={"/images/mazdaLogo.png"} width="40px" height="40px" />
                <Image src={"/images/logoKia.png"} width="40px" height="40px" />
                <Image src={"/images/logoVolkswagen1.png"} width="40px" height="40px"
            />
                </section>
                <Typography className={classes.typography}>
                  50 Cotizaciones
                </Typography>
                <Typography className={classes.typography}>
                  30 Ventas
                </Typography>
              </div>

            </CardContent>

            </Card>
            <div style={{backgroundColor:'white', width:'70%' }}>
              <h2>Productos Vendedor</h2>
            </div>
          </div>
      </>
    </>
  );
}
