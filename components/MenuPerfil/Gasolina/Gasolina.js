import { Error, AttachMoney, LocalGasStationOutlined, Delete, Router } from "@material-ui/icons";
import {Button} from '@material-ui/core'
import useStyles from "../Perfil/stylesCliente";
import { useEffect, useState } from "react";
import ModalGasolina from "./ModalGasolina";
import { useDispatch } from "react-redux";
import { getGasolina } from "../../../reducers/Actions/gasolinActions";
import {useRouter} from 'next/router'
import EsteMes from "./EsteMes";

export default function Gasolina({ gasolina}) {
  const classes = useStyles();
    const [toogle,setToogle] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const idVehicule = router.query

  console.log(gasolina);
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
        alt={'combustible'}
      />
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h2 style={{margin:0, fontSize:'20px', color:'black',marginLeft:'10px',fontWeight:'600'}}>Promedio</h2>
      <h4 style={{margin:0, fontSize:'18px', color:'gray',marginLeft:'10px',fontWeight:'400'}}>1Km/$430</h4>
      <h5 style={{margin:0, fontSize:'18px', color:'#f50057',marginLeft:'10px',fontWeight:'400'}}>+$38</h5>
      </div>
         </div>
      </div>
      <div style={{display:'flex',alignItems:'center', flexDirection:'row',justifyContent:'center', width:'100%',height:'40px', backgroundColor:'lightGray', margin:'0 auto', borderRadius:'10px'}}>
          <h4 onClick={()=>setToogle(false)}  style={{cursor:'pointer', backgroundColor:!toogle && 'white',borderRadius:!toogle && '10px',textAlign:'center', width:'48%',margin:0, fontSize:'22px',fontWeight:'400'}}>Este Mes</h4>
          <h4 onClick={()=>setToogle(true)} style={{cursor:'pointer', backgroundColor:toogle && 'white',borderRadius:toogle && '10px',textAlign:'center',width:'48%',margin:0, fontSize:'22px',fontWeight:'400'}}>Este Año</h4>
      </div>
      
      {gasolina.length >=1
      ?
       <EsteMes gasolina={gasolina} setVisibleEdit={setVisibleEdit}/>
    : <>
    <Error fontSize='large' style={{margin:'20px auto 0 auto',alignItems:'center',display:'flex', flexDirection:'row', color:'#f50057'}}/>
    <div >
          <h3 style={{margin:'10px',marginBottom:'10px', fontWeight:'400'}}>Aun no hay datos para mostrar, añade informacion para llevar la contabilidad del consumo de tu auto</h3>
          <Button onClick={()=> setVisibleEdit(true)} variant="contained" color='secondary' fullWidth>Empieza aqui!</Button>
      </div>
    </>}
        {visibleEdit &&<ModalGasolina visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit} idVehiculo={idVehicule}/>}
    </div>
  );
}
