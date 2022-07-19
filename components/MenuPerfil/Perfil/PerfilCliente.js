import { Avatar,Button,Divider} from "@material-ui/core";
import useStyles from "./stylesCliente";
import { useEffect, useState } from "react";
import AssestsUser from "../../../utils/assetsUserPerfil";
import Vehiculos from "./Vehiculos";
import { AddAPhoto, Edit } from "@material-ui/icons";
import Gasolina from "./Gasolina";


export default function PerfilCliente({user, vehicule}){
  const classes = useStyles();
  const [userNow, setUserNow] = useState(null)

  const handleAdd =()=>{
    setVisible(false)
    setMessageAdd('Solicitud de amistad Enviada')
    
  }
  console.log(user);


  // useEffect(()=>{
  //   setUserNow(JSON.parse(localStorage.getItem('profile')))
  // },[])
    return(
        <div className={classes.container1}>
          <div className={classes.container2}>
            <Avatar 
                className={classes.avatar}
                alt={user?.name?.charAt(0)}>{user?.name?.charAt(0)}</Avatar>
              
            <div style={{display:'flex', flexDirection:'column'}}>
            <h3 className={classes.nombre1}>{user?.name}</h3>
              <h5 className={classes.texto6}>Cliente</h5>
            </div>
            <Edit style={{marginLeft:'15px', cursor:'pointer'}}/>
          </div>

       <div className={classes.divVehiculos}>
       <Vehiculos vehicule={vehicule} owner={user?._id} lugar={user?.ciudad} initialLetter={user?.name?.charAt(0)}/>
        <Gasolina vehicule={vehicule}/>
       </div>

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
       
    )
}