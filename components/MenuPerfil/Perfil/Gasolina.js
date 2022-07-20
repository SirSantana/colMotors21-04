import { Error, AttachMoney, LocalGasStationOutlined } from "@material-ui/icons";
import {Button} from '@material-ui/core'
import useStyles from "./stylesCliente";
import { useState } from "react";
import ModalGasolina from "./ModalGasolina";
export default function Gasolina({vehicule}) {
  const classes = useStyles();
    const [toogle,setToogle] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)

  return (
    <div className={classes.conta1} >
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
      {/* <div style={{marginTop:'20px', display:'flex', flexDirection:'row', alignContent:'center'}}>
        <AttachMoney fontSize='large'/>
        <h3 style={{margin:0, fontWeight:'500'}}>Total Gastado</h3>
      </div> */}
      <Error fontSize='large' style={{margin:'20px auto 0 auto',alignItems:'center',display:'flex', flexDirection:'row', color:'#f50057'}}/>
      <div >
            <h3 style={{margin:'10px',marginBottom:'10px', fontWeight:'400'}}>Aun no hay datos para mostrar, añade informacion para llevar la contabilidad del consumo de tu auto</h3>
            <Button onClick={()=> setVisibleEdit(true)} variant="contained" color='secondary' fullWidth>Empieza aqui!</Button>
        </div>
        {visibleEdit &&<ModalGasolina visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit}/>}
    </div>
  );
}
