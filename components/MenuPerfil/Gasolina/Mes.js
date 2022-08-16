import { Button, Divider } from "@material-ui/core";
import { AttachMoney, Cached, CalendarToday, Edit, LocalGasStationOutlined, MoreVert } from "@material-ui/icons";
import CardGasolina from "./CardGasolina";
import{useState} from 'react'
import ModalDetalles from "./ModalDetalle";
import AlgoritmoGasolina from "../../../libs/algoritmoGasolina";

export default function Mes({
  setIdPost,
  setEdit,
  gasolinas,
  setVisibleEdit,
  tanque,
  mes
}) {
    const [visibleDetails, setVisibleDetails] =useState({bol:false, id:''})
    let meses = {0:'Enero', 1:'Febrero', 2:'Marzo', 3:'Abril', 4:'Mayo', 5:'Junio', 6:'Julio', 7:'Agosto', 8:'Septiembre', 9:'Octubre',10:'Noviembre', 11:'Diciembre'}
    let monthActual = mes !== undefined ? mes : new Date().getMonth()
  console.log(mes);

    const tanqueadas = AlgoritmoGasolina({gasolinas, tanque})
    let tanqueadasMes = tanqueadas.tanqueadas.filter(el=> el.mes === monthActual)
    tanqueadasMes.reverse()
    let detailsTanqueada = tanqueadasMes.find(el=> el._id === visibleDetails.id)
    console.log(tanqueadasMes);
    
    
    let totales ={}
    let gastado =0
    let kilometrosRecorridos;
    let galonesComprados=0
    let dineroUsado = 0
    let galonesUsados =0
    let numeroTanqueadas = 0
    let precioCombustible = 0;
    let galonRecorrido = 0
    for(let i = 0; i<tanqueadasMes.length;i++ ){
      kilometrosRecorridos=tanqueadasMes[0].kilometraje -tanqueadasMes[tanqueadasMes.length-1].kilometraje
      let dineroGastado = typeof tanqueadasMes[i].dineroGastado!== 'number' ? tanqueadasMes[i].dineroGastado.toString().replace(/\./g, ""):tanqueadasMes[i].dineroGastado
      numeroTanqueadas +=1
      precioCombustible += Number(tanqueadasMes[i].precioGalon.replace(/\./g, ""))
      gastado+= Number(dineroGastado)
      console.log(tanqueadasMes[i].galonRecorrido);
      if(tanqueadasMes[i].galonRecorrido !== undefined){
        galonRecorrido += tanqueadasMes[i].galonRecorrido
      }
    }

    for(let datos of tanqueadasMes){
      if(datos.galones !== undefined){
        galonesComprados += datos.galones
        galonesUsados+= datos.galonesUsados
        dineroUsado += datos.dineroUsado
      }
    }
    totales.dineroGastado = gastado
    totales.kilometrosRecorridos = kilometrosRecorridos
    totales.galonesComprados = galonesComprados
    totales.dineroUsado = dineroUsado
    totales.numeroTanqueadas = numeroTanqueadas
    totales.precioCombustible = precioCombustible / numeroTanqueadas
    totales.galonRecorrido = galonRecorrido !== 0 && galonRecorrido / (numeroTanqueadas-1)
    console.log(totales);
  return <>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
       
    {mes === undefined &&
    <div style={{backgroundColor:'#f1f1f1',boxShadow: "rgba(149, 157, 165, 0.8) 0px 8px 10px", marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
    <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'left'}}>
    <img
          src={"/images/carro.png"}
          alt="icon"
          style={{width:'40px', height:'40px'}}
        />
    <Divider style={{height:'30px', width:'2px', backgroundColor:'#f50057', margin:'0 10px'}}/>
    <div>
    <h3  style={{fontSize:'18px', color:'#1b333d', margin:0, lineHeight:'10px',fontWeight:'700'}}>Promedio</h3>
    <h5  style={{fontSize:'16px', color:'#1b333d', margin:0, fontWeight:'500'}}>{meses[monthActual]}</h5>
    </div>
    </div>
        <div style={{margin:'20px 0',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
            <img
          src={"/images/recorrido.png"}
          alt="icon"
          style={{width:'40px', height:'40px'}}
        />
        <h3 style={{fontSize:'16px', color:'gray', margin:0, fontWeight:400}}> Recorriste</h3>
        <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>{totales.kilometrosRecorridos}Kms</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
            <img
          src={"/images/dinero.png"}
          alt="icon"
          style={{width:'40px', height:'40px'}}
        />
        <h3 style={{fontSize:'16px', color:'gray', margin:0, fontWeight:400}}>Gastaste</h3>
        <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>${totales.dineroGastado.toLocaleString()}</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
            <img
          src={"/images/CombustibleFondo.png"}
          alt="icon"
          style={{width:'40px', height:'40px'}}
        />
        <h3 style={{fontSize:'16px', color:'gray', margin:0, fontWeight:400}}> Rendimiento</h3>
        <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>{totales.galonRecorrido!== false ? `1gl/${Math.trunc(totales.galonRecorrido)}kms` : 'Sin datos'}</h3>

            </div>
            
        </div>
        
    </div>
    }
    
        {tanqueadasMes &&
        tanqueadasMes.map(el=>{
             let myDate = new Date(el.fecha);
             
             
            return(
                <CardGasolina el={el} myDate={myDate} setVisibleDetails={setVisibleDetails} monthActual={monthActual} setIdPost={setIdPost}setVisibleEdit={setVisibleEdit}setEdit={setEdit}/>

            )
        })
        }
            {visibleDetails.bol &&<ModalDetalles setIdPost={setIdPost} detailsTanqueada={detailsTanqueada} setEdit={setEdit} setVisibleEdit={setVisibleEdit} setVisibleDetails={setVisibleDetails} visibleDetails={visibleDetails}/>}

</div>
  </>;
}
