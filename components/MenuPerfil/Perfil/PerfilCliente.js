import { Avatar, Card, CardContent, CardHeader, Divider, Typography,} from "@material-ui/core";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { BarChart, Person, RateReview, Stars } from "@material-ui/icons";
import Image from 'next/image'


export default function PerfilCliente({user}){
  const classes = useStyles();

    return(
        <>
        <div className={classes.container}>
          <Card sx={{ width: "345px" }} className={classes.card} elevation={8}>
                <section  style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#464646', padding:'10px', paddingBottom:0}}>
                <Stars className={classes.iconStar}/>  <Stars className={classes.iconStar}/>  <Stars className={classes.iconStar}/><Stars className={classes.iconStar}/> <Stars style={{color:'white'}} />
                </section>
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
              subheader={'Cliente'}
              classes={{ subheader: classes.subheader2, title: classes.title2 }}
              subheaderTypographyProps={{ variant: "body1", color:'#f1f1f1', textAlign:'center' }}
            />
            <Divider style={{width:'90%', marginLeft:'auto', marginRight:'auto'}}/>
            <CardContent style={{ width:'100%', display:'flex', flexDirection:'column',padding:'0px',  }}>
              <div className={classes.transparent} style={{padding:'10px'}}>
              <section  style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#464646', borderRadius:'5px', padding:'5px'}}>
                <BarChart style={{color:"red"}} fontSize='large'/>
                <Typography className={classes.heading} style={{color:'#f1f1f1'}} >
                  Estadisticas
                </Typography>
                </section>
                
                <div style={{ alignItems:'center', backgroundColor:'lightgray', borderRadius:'5px', padding:'5px', marginTop:'10px'}}>
                <h4 style={{margin:'5px', fontSize:'18px'}}>{'Vehiculos'}</h4>
                
                <section style={{display:'flex',display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex',display:'flex', gap:'10px'}} >
                <Image src={'/images/52120.png'} width='30px' height={"35px"}/>
                {user?.role.length <=1 && user?.marca}
                </div>
                <div style={{display:'flex',display:'flex', gap:'10px'}}>
                <Image src={'/images/27176.png'} width='30px' height={"35px"}/>
                {'Yamaha MT-09'}
                
                </div>
                </section>
                </div>
                <section style={{display:'flex',flexDirection:'column', marginTop:'10px',backgroundColor:'lightgray',borderRadius:'5px'}}>
                <h4 style={{margin:'5px', fontSize:'18px'}}>Cotizaciones Realizadas</h4>
                <Typography className={classes.typography} style={{marginLeft:'5px'}}>
                  50 Cotizaciones
                </Typography>
                </section>
                <section style={{display:'flex',flexDirection:'column', marginTop:'10px',backgroundColor:'lightgray',borderRadius:'5px'}}>
                <h4 style={{margin:'5px', fontSize:'18px'}}>Ventas Realizadas</h4>
                <Typography className={classes.typography} style={{marginLeft:'5px'}}>
                  30 Ventas
                </Typography>
                </section>
                <section style={{display:'flex',flexDirection:'column', marginTop:'10px',backgroundColor:'lightgray',borderRadius:'5px'}}>
                <h4 style={{margin:'5px', fontSize:'18px'}}>Opiniones</h4>
                <Typography className={classes.typography} style={{marginLeft:'5px'}}>
                  Miguel Salazar : Muy atento
                </Typography>
                </section>
              </div>

            </CardContent>

            </Card>
          </div>
        </>
    )
}