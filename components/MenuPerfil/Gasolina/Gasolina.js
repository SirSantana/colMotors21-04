import { Error,AddBox } from "@material-ui/icons";
import {Button} from '@material-ui/core'
import useStyles from "../Perfil/stylesCliente";
import { useEffect, useState } from "react";
import ModalGasolina from "./ModalGasolina";
import { useDispatch } from "react-redux";
import { getGasolina } from "../../../reducers/Actions/gasolinActions";
import {useRouter} from 'next/router'
import EsteAño from "./EsteAño";
import Mes from "./Mes";

export default function Gasolina({gasolina, tanque, datosVehicule}) {
  const classes = useStyles();
  const [toogle,setToogle] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const [mes, setMes] = useState(null)
  const [edit, setEdit]=useState(false)
  const [idPost, setIdPost]=useState('')
  let tanqueadasGlobal;
  console.log(tanqueadasGlobal);
  console.log(datosVehicule);

  let length = gasolina.length
    let vehicule ={
      idVehicule:router.query,
      kilometraje: gasolina.length > 0 ?  gasolina[length-1].kilometraje: null,
      owner:datosVehicule.ownerVehicule
    }
  return (
    <div className={classes.conta2}   >
      <div style={{display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center'}}>
      <img
        style={{ margin: "0", width: "60px", height: "60px" }}
        src={`/images/${datosVehicule.marca}.png`}
        alt={'combustible'}
      />
      <h4 style={{margin:0, fontSize:'22px', color:'#1b333d',fontWeight:'600'}}>{datosVehicule.referencia}</h4>

      </div>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:'20px 0'}}>
          <div style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
          <h2 className={classes.titulo1}>Hola {datosVehicule.nombre.split(" ",1)}! </h2>
          </div>
         <div onClick={()=> setVisibleEdit(true)} style={{display:'flex', cursor:'pointer', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
             <AddBox style={{color:"#f50057", fontSize:'30px'}}/>
      <h2 style={{margin:'0 0 5px 5px', fontSize:'18px', color:'#f50057',fontWeight:'400'}}>Agregar Tanqueada</h2>
         </div>
      </div>
      <div  style={{display:'flex',boxShadow: "rgba(149, 157, 165, 0.6) 0px 5px 10px",alignItems:'center', flexDirection:'row',justifyContent:'center', width:'100%',height:'40px', backgroundColor:'#f50057', margin:'0 auto', borderRadius:'10px'}}>
          <h4 onClick={()=>setToogle(false)}  style={{cursor:'pointer', backgroundColor:!toogle && 'white',color:!toogle ? '#f50057':'white',borderRadius:!toogle && '10px',textAlign:'center', width:'48%',margin:0, fontSize:'22px',fontWeight:'400'}}>Este Mes</h4>
          <h4 onClick={()=>setToogle(true)} style={{cursor:'pointer', backgroundColor:toogle && 'white',borderRadius:toogle && '10px',color:!toogle ? 'white':'#f50057',textAlign:'center',width:'48%',margin:0, fontSize:'22px',fontWeight:'400'}}>Este Año</h4>
      </div>
      
      {gasolina.length >=1
      ? !toogle ? <Mes setIdPost={setIdPost} setEdit={setEdit} gasolinas={gasolina} setVisibleEdit={setVisibleEdit} tanque={tanque}/> :<EsteAño setIdPost={setIdPost} setEdit={setEdit} gasolinas={gasolina} setVisibleEdit={setVisibleEdit} tanque={tanque}  setMes={setMes} mes={mes}/>
    : <>
    <Error fontSize='large' style={{margin:'20px auto 0 auto',alignItems:'center',display:'flex', flexDirection:'row', color:'#f50057'}}/>
    <div >
          <h3 style={{margin:'10px',marginBottom:'10px', fontWeight:'400'}}>Aun no hay datos para mostrar, añade informacion para llevar la contabilidad del consumo de tu auto</h3>
          
          {tanque !== undefined 
          ?<Button onClick={()=> setVisibleEdit(true)} variant="contained" color='secondary' fullWidth>Empieza aqui!</Button>
        :
          <Button variant="outlined"
          color="secondary"
          style={{marginBottom:'20px'}}
          onClick={()=> router.push(`/users/${datosVehicule.ownerVehicule}`)}
          fullWidth
          >Agrega el tamaño del tanque de tu auto 
          </Button>
          }
      </div>
    </>}
        {visibleEdit&&<ModalGasolina idPost={idPost} edit={edit} setEdit={setEdit} visibleEdit={visibleEdit}  setVisibleEdit={setVisibleEdit} vehicule={vehicule} />}
    </div>
  );
}
