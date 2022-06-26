import { Avatar, Card, CardContent, CardHeader, Divider, Typography,} from "@material-ui/core";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { BarChart, Person, RateReview, Stars } from "@material-ui/icons";
import Image from 'next/image'
import StarsDoradas from "../../../utils/starsDorada";
import StarsGray from "../../../utils/starsGray";


export default function PerfilVendedor({user}){
  const classes = useStyles();
  const marcas = user?.marcasComercializadas
  const calif = user?.calificacion

  let data=0
  for(let numero of calif){
  data += parseInt(numero)
  }
  const result = Math.round(data/calif.length)
    return(
        <>
        <div className={classes.container}>
          <Card sx={{ width: "345px" }} className={classes.card} elevation={8}>
                <section  style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'gray', padding:'10px', paddingBottom:0}}>
                {result === 1 &&  <><StarsDoradas/> <StarsGray/><StarsGray/><StarsGray/><StarsGray/></>}
                {result === 2 &&  <><StarsDoradas/><StarsDoradas/> <StarsGray/><StarsGray/><StarsGray/></>}
                {result === 3 &&  <><StarsDoradas/><StarsDoradas/><StarsDoradas/> <StarsGray/><StarsGray/></>}
                {result === 4 &&  <><StarsDoradas/><StarsDoradas/><StarsDoradas/><StarsDoradas/><StarsGray/> </>}
                {result === 5 &&  <><StarsDoradas/><StarsDoradas/><StarsDoradas/><StarsDoradas/><StarsDoradas/></>}
                </section>
          <CardHeader
              style={{padding:'4px'}}
              className={classes.header}
              avatar={
                <Avatar
                
                className={classes.purple}
                alt={user?.name?.charAt(0)}
              >
                {user?.name?.charAt(0)}
                </Avatar>
              }
              title={user?.name}
              subheader={ 'Vendedor'}
              classes={{ subheader: classes.subheader2, title: classes.title2 }}
              subheaderTypographyProps={{textAlign:'center', variant: "body1", color:'#f1f1f1', }}
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
                <h4 style={{margin:'5px', fontSize:'18px'}}>Marcas Comercializadas</h4>
                
                <section style={{display:'flex',display:'flex', }}>

                {marcas?.map(el=> <Image src={`/images/${el}.png`} width="40px" height="40px" />)}
                </section>
                </div>
                <section style={{display:'flex',flexDirection:'column', marginTop:'10px',backgroundColor:'lightgray',borderRadius:'5px'}}>
                <h4 style={{margin:'5px', fontSize:'18px'}}>Cotizaciones Respondidas</h4>
                <Typography className={classes.typography} style={{marginLeft:'5px'}}>
                  {user?.numeroCotizaciones} Cotizaciones Respondidas
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
            <div style={{backgroundColor:'white', width:'65%' }}>
              <h2>Productos Vendedor</h2>
            </div>
          </div>
        </>
    )
}