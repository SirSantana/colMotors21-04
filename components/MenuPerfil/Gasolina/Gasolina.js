import { Error, AttachMoney, LocalGasStationOutlined, Delete, Router } from "@material-ui/icons";
import {Button} from '@material-ui/core'
import useStyles from "../Perfil/stylesCliente";
import { useEffect, useState } from "react";
import ModalGasolina from "./ModalGasolina";
import { useDispatch } from "react-redux";
import { getGasolina } from "../../../reducers/Actions/gasolinActions";

export default function Gasolina({vehicule, gasolina}) {
  const classes = useStyles();
    const [toogle,setToogle] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const dispatch = useDispatch()

  if(gasolina !== undefined && gasolina.length >1){
    let totalKm =gasolina[gasolina.length - 1].kilometraje - gasolina[0].kilometraje  
    let kilometrosAndados = gasolina[1].kilometraje - gasolina[0].kilometraje
  let precioKilometro = gasolina[0].dineroGastado / kilometrosAndados
  console.log(totalKm);
  }

  
  return (
    <div className={classes.conta1}  >
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'10px'}}>
      <LocalGasStationOutlined fontSize='large' style={{fontSize:'46px', color:'#f50057'}}/>

      </div>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
          <h2 style={{margin:0, fontSize:'30px', color:'#f50057',marginLeft:'5px',fontWeight:'700'}}>Gasolina</h2>
          </div>
         <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginTop:'10px'}}>
             <img
        style={{ marginLeft: "10px", width: "40px", height: "40px" }}
        src={`/images/Combustible.png`}
        alt={vehicule?.marca}
      />
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h2 style={{margin:0, fontSize:'20px', color:'black',marginLeft:'10px',fontWeight:'600'}}>Promedio</h2>
      <h4 style={{margin:0, fontSize:'18px', color:'gray',marginLeft:'10px',fontWeight:'400'}}>1Km/$430</h4>
      <h5 style={{margin:0, fontSize:'18px', color:'#f50057',marginLeft:'10px',fontWeight:'400'}}>+$38</h5>
      </div>
         </div>
      </div>
      <div style={{display:'flex',alignItems:'center', flexDirection:'row',justifyContent:'center', width:'100%',height:'40px', backgroundColor:'lightGray', margin:'0 auto', borderRadius:'10px'}}>
          <h4 onClick={()=>setToogle(false)}  style={{cursor:'pointer', backgroundColor:!toogle && 'white',borderRadius:!toogle && '10px',textAlign:'center', width:'48%',margin:0, fontSize:'22px',fontWeight:'400'}}>Esta Semana</h4>
          <h4 onClick={()=>setToogle(true)} style={{cursor:'pointer', backgroundColor:toogle && 'white',borderRadius:toogle && '10px',textAlign:'center',width:'48%',margin:0, fontSize:'22px',fontWeight:'400'}}>Este Mes</h4>
      </div>
      
      {gasolina !== undefined 
      ?
       <div style={{marginTop:'20px', display:'flex', flexDirection:'column', alignContent:'center'}}>
         <div style={{display:'flex', flexDirection:'row', marginBottom:'10px'}}>
         <AttachMoney fontSize='medium'/>
        <h3 style={{margin:0, fontWeight:'500'}}>Total Gastado</h3>
         </div>
        {gasolina.map(el=>{
        let myDate = new Date(el.fecha)
        return(
          <>
          <div style={{display:'flex',marginBottom:'10px', flexDirection:'row', marginLeft:'30px',justifyContent:'space-between',alignItems:'center'}}>
            <h4 className={classes.texto7}>{myDate.toLocaleDateString()}</h4>
            <h4 className={classes.texto7} style={{fontWeight:'500', color:'black'}}>{el.dineroGastado.toString().length <=3? el.dineroGastado + '.000': el.dineroGastado }</h4>
            <h4 className={classes.texto7} style={{color:'#f50057',fontWeight:'600'}}>{el.tipoGasolina}</h4>
            <Delete/>
          </div>
          </>
        )
})}
        <div style={{display:'flex', flexDirection:'row', marginBottom:'10px'}}>
        <img
        style={{ width: "30px", height: "35px" }}
        src={`/images/distance.png`}
        alt={vehicule?.marca}
      />
        <h3 style={{margin:0, fontWeight:'500'}}>Distancia Recorrida</h3>
         </div>

          <Button onClick={()=> setVisibleEdit(true)} variant="contained" color='secondary' fullWidth>Editar</Button>

      </div> 
    : <>
    <Error fontSize='large' style={{margin:'20px auto 0 auto',alignItems:'center',display:'flex', flexDirection:'row', color:'#f50057'}}/>
    <div >
          <h3 style={{margin:'10px',marginBottom:'10px', fontWeight:'400'}}>Aun no hay datos para mostrar, añade informacion para llevar la contabilidad del consumo de tu auto</h3>
          <Button onClick={()=> setVisibleEdit(true)} variant="contained" color='secondary' fullWidth>Empieza aqui!</Button>
      </div>
    </>}
        {visibleEdit &&<ModalGasolina visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit} idVehiculo={vehicule._id}/>}
    </div>
  );
}
