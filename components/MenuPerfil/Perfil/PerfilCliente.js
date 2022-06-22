import { Avatar, Button, Card, CardContent, CardHeader, Divider, Paper, Typography,} from "@material-ui/core";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { Add, BarChart, Check, Person, RateReview, Stars } from "@material-ui/icons";
import Image from 'next/image'
import { useEffect, useState } from "react";


export default function PerfilCliente({user}){
  const classes = useStyles();
  const [userNow, setUserNow] = useState(null)
  const [messageAdd, setMessageAdd] = useState('')
  const [visible, setVisible] = useState(true)


  const handleAdd =()=>{
    setVisible(false)
    setMessageAdd('Solicitud de amistad Enviada')
    
  }

  useEffect(()=>{
    setUserNow(JSON.parse(localStorage.getItem('profile')))
  },[])
    return(
        <>
         {messageAdd &&
         <Paper style={{backgroundColor:'#f50057',padding:'10px', display:'flex', flexDirection:'row', alignItems:'center', height:'40px', marginBottom:'20px'}} elevation={3} >
         <Check style={{paddingRight:'10px', color:'white'}}/>
         <Typography className={classes.typo} style={{fontSize:'14px', color:'white', marginRight:'8px'}}>{messageAdd}</Typography>
        </Paper>
        }
        
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
              subheader={'Cliente'}
              
              classes={{ subheader: classes.subheader2, title: classes.title2 }}
              subheaderTypographyProps={{ variant: "body1", color:'#f1f1f1', textAlign:'center' }}
            />
            {/* <span onClick={handleAdd}>
            {visible && <Add className={classes.iconAdd} fontSize="large"/>}
            </span> */}
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
                <img src={'/images/aveo.jpg'} alt='/images/aveo.jpg' style={{borderRadius:'10px'}}/>

                <div style={{display:'flex',display:'flex', gap:'10px'}} >
                <Image src={'/images/52120.png'} width='30px' height={"35px"}/>
                {user?.marca}
                </div>
                <div style={{display:'flex',display:'flex', gap:'10px'}}>
                <Image src={'/images/27176.png'} width='30px' height={"35px"}/>
                {userNow?.result._id === user._id && 
                <Button variant="outlined" color='secondary' >Agregar tu Vehiculo</Button>
                }
                </div>

                </section>
                </div>
                <section style={{display:'flex',flexDirection:'column', marginTop:'10px',backgroundColor:'lightgray',borderRadius:'5px'}}>
                <h4 style={{margin:'5px', fontSize:'18px'}}>Cotizaciones Realizadas</h4>
                <Typography className={classes.typography} style={{marginLeft:'5px'}}>
                  {user.numeroCotizaciones} Cotizaciones
                </Typography>
                </section>
                <section style={{display:'flex',flexDirection:'column', marginTop:'10px',backgroundColor:'lightgray',borderRadius:'5px'}}>
                <h4 style={{margin:'5px', fontSize:'18px'}}>Compras Realizadas</h4>
                <Typography className={classes.typography} style={{marginLeft:'5px'}}>
                  30 Compras
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