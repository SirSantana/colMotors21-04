import { Avatar,Button,Divider} from "@material-ui/core";
import useStyles from "./stylesCliente";
import { useEffect, useState } from "react";
import AssestsUser from "../../../utils/assetsUserPerfil";
import Vehiculos from "./Vehiculos";
import { AddAPhoto } from "@material-ui/icons";


export default function PerfilCliente({user}){
  const classes = useStyles();
  const [userNow, setUserNow] = useState(null)

  const handleAdd =()=>{
    setVisible(false)
    setMessageAdd('Solicitud de amistad Enviada')
    
  }

  // useEffect(()=>{
  //   setUserNow(JSON.parse(localStorage.getItem('profile')))
  // },[])
    return(
        <div>
        <div className={classes.container1}>
          <div className={classes.container2}>
            <div  className={classes.container3}>
            <Avatar 
                className={classes.avatar}
                alt={user?.name?.charAt(0)}>{user?.name?.charAt(0)}</Avatar>
              <h3 className={classes.nombre1}>{user?.name}</h3>
              <h5 className={classes.texto6}>Cliente</h5>
            </div>

            <div className={classes.container4}>
            <div style={{width:'55%', margin:'auto'}}>
              <h3 style={{marginLeft:0}}className={classes.texto5}>Cotizaciones</h3>
              <h5 className={classes.texto5}>{user?.numeroCotizaciones}</h5>
            </div>

            <Divider style={{backgroundColor:'white', height:'50px',width:'2px'}}/>
            <div style={{width:'40%',margin:'auto'}}>
              <h3 className={classes.texto5}>Compras</h3>
              <h5 className={classes.texto5}>3</h5>
            </div>
            </div>
          </div>

        <Vehiculos userMarca={user?.marca}/>
        
            {/* <div className={classes.container4} style={{margin:'20px auto 0 auto', backgroundColor:'#f1f1f1', alignItems:'center', width:'330px'}}>
            <div style={{borderRadius:'5px', border:'2px solid lightGray', padding:'30px', width:'100px'}}>
            <AddAPhoto/>
            </div>
            <div style={{margin:'0 auto'}}>
              <h2 className={classes.nombre1} style={{marginBottom:'10px'}}>{user?.marca}</h2>
              <Button variant="contained" color='secondary'>
              Edita tu Auto
            </Button>
            </div>
            
            </div> */}
        </div>
       
        </div>
    )
}