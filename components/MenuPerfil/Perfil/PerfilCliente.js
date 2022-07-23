import { Avatar,Button,Divider} from "@material-ui/core";
import useStyles from "./stylesCliente";
import { useEffect, useState } from "react";
import AssestsUser from "../../../utils/assetsUserPerfil";
import Vehiculos from "./Vehiculos";
import { AddAPhoto, Edit, LocalGasStationOutlined } from "@material-ui/icons";
import Link from 'next/link'

export default function PerfilCliente({user, vehicule}){
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
       <div className={classes.container8} >
            <Link href={`/users/${vehicule._id}/gasolina`}>
            <a>
            <section style={{borderRadius:'10px', display:'flex',backgroundColor:'#f50057', width:'100px', height:'100px', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
           <LocalGasStationOutlined fontSize='large' style={{color:'white', fontSize:'50px'}}/>
           <h4 style={{margin:'0', color:'white', fontWeight:'500'}}>Gasolina</h4>
           </section>
            </a>
            </Link>
           <section style={{borderRadius:'10px', display:'flex',backgroundColor:'#f50057', width:'100px', height:'100px', justifyContent:'center', alignItems:'center'}}>
           <LocalGasStationOutlined fontSize='large' style={{color:'white', fontSize:'50px'}}/>
           </section>
           <section style={{borderRadius:'10px', display:'flex',backgroundColor:'#f50057', width:'100px', height:'100px', justifyContent:'center', alignItems:'center'}}>
           <LocalGasStationOutlined fontSize='large' style={{color:'white', fontSize:'50px'}}/>
           </section>
       </div>
       </div>
        </div>
       
    )
}