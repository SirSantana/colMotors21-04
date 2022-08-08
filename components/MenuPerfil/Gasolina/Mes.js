import { Button } from "@material-ui/core";
import { AttachMoney, Cached, CalendarToday, Edit, LocalGasStationOutlined, MoreVert } from "@material-ui/icons";
import CardGasolina from "./CardGasolina";
import{useState} from 'react'
import ModalDetalles from "./ModalDetalle";

export default function Mes({
  setIdPost,
  setEdit,
  gasolinas,
  setVisibleEdit,
  tanque,
  mes
}) {
    const [visibleDetails, setVisibleDetails] =useState({bol:false, id:''})
    let tanqueadas =[]
    let daysMeses = [31,28,31,30,31,30,31,31,30,31,30,31]
    let meses = {1:'Enero', 2:'Febrero', 3:'Marzo', 4:'Abril', 5:'Mayo', 6:'Junio', 7:'Julio', 8:'Agosto', 9:'Septiembre', 10:'Octubre',11:'Noviembre', 12:'Diciembre'}
    let monthActual = new Date().getMonth()
    // let month =??? asignar mes actual o un mes que busquen numero
    let gasolina = gasolinas.sort((a, b) =>{
      return new Date(a.fecha) - new Date(b.fecha)
    })
    for(let i = 0; i<gasolina.length; i++){
     
      if(gasolina[i+1]!== undefined){
        
      let month = new Date(gasolina[i].fecha).getMonth()
      let nextMonth = new Date(gasolina[i+1]?.fecha).getMonth()
    let tanqueada ={}
    let tanqueadaCompartida ={}
        let porcentaje1 = tanque/100
        let galones = parseFloat((gasolina[i].dineroGastado.replace(/\./g, "") /gasolina[i].precioGalon.replace(/\./g, "")).toFixed(2))
        
      if(month !== nextMonth){
        let firstDay = new Date(gasolina[i].fecha).getDate()
        let lastDay = new Date(gasolina[i+1].fecha).getDate()
        let diasMonthActual = daysMeses[month] - firstDay
        let dias = diasMonthActual + lastDay
        let kilometrosRec1 = parseFloat(((gasolina[i+1]?.kilometraje.replace(/\./g, "") -gasolina[i]?.kilometraje.replace(/\./g, "") )/(dias) * diasMonthActual).toFixed(2))
        let kilometrosRec2 = parseFloat(((gasolina[i+1]?.kilometraje.replace(/\./g, "") -gasolina[i]?.kilometraje.replace(/\./g, "") )/(dias) * lastDay).toFixed(2))
        let fuelInicialLitros = parseFloat((porcentaje1 *gasolina[i].gasolinaInicial).toFixed(2))
        let fuelFinalLitros = parseFloat(((galones * 3.7)+fuelInicialLitros).toFixed(2))
        let fuelFinalPercentaje = parseFloat((fuelFinalLitros / porcentaje1).toFixed(2))
        let fuelPercentajeUsado = parseFloat(((fuelFinalPercentaje - gasolina[i+1].gasolinaInicial)/(diasMonthActual+lastDay)).toFixed(2))
        let fuelPerUsado1 = Math.trunc(fuelPercentajeUsado * diasMonthActual)
        let fuelPerUsado2 = Math.trunc(fuelPercentajeUsado * lastDay)
        let fuelComprado = parseFloat((fuelFinalPercentaje - gasolina[i].gasolinaInicial).toFixed(2))
        let precioPer =   parseFloat((gasolina[i].dineroGastado.replace(/\./g, "") / fuelComprado).toFixed(2))
        let dineroUsado1 = Math.trunc(((fuelFinalPercentaje -gasolina[i+1].gasolinaInicial) * precioPer)/dias)*diasMonthActual
        let dineroUsado2 = Math.trunc(((fuelFinalPercentaje -gasolina[i+1].gasolinaInicial) * precioPer)/dias)*lastDay
        let galonesUsados1 =  parseFloat((dineroUsado1 / gasolina[i].precioGalon.replace(/\./g, "")).toFixed(3))
        let galonesUsados2 =  parseFloat((dineroUsado2 / gasolina[i].precioGalon.replace(/\./g, "")).toFixed(3))
        let precioKm = dineroUsado1 / kilometrosRec1;
       let galonKm = dineroUsado1 /  gasolina[i].precioGalon.replace(/\./g, "") ;
        let galonRecorrido = parseFloat((kilometrosRec1 / galonKm).toFixed(2));
        let kilometraje1 = Number(gasolina[i].kilometraje)
        let kilometraje2 = Number(gasolina[i].kilometraje) +Number(Math.trunc(kilometrosRec1))
        tanqueada.dineroGastado = Math.trunc((gasolina[i]?.dineroGastado.replace(/\./g, "") / dias) * diasMonthActual)
        tanqueada.kilometrosRecorridos = kilometrosRec1
        tanqueada.fecha = gasolina[i]?.fecha
        tanqueada.precioGalon = gasolina[i]?.precioGalon
        tanqueada.mes = month
        tanqueada.compartida = true
        tanqueada.fuelInicialLitros = fuelInicialLitros
        tanqueada.fuelFinalLitros = fuelFinalLitros
        tanqueada.fuelInicialPercentaje = gasolina[i]?.gasolinaInicial
        tanqueada.fuelFinalPercentaje = fuelFinalPercentaje
        tanqueada.fuelPercentajeUsado =fuelPerUsado1
        tanqueada.dias = dias
        tanqueada.dineroUsado = dineroUsado1
        tanqueada.fuelComprado = fuelComprado
        tanqueada.galones = galones
        tanqueada.galonesUsados = galonesUsados1
        tanqueada.precioKm = precioKm
        tanqueada.galonRecorrido = galonRecorrido
        tanqueada.kilometraje =kilometraje1
        tanqueada.tipoGasolina = gasolina[i].tipoGasolina
        tanqueada._id = gasolina[i]._id
        tanqueada.estado ="finalizado"
        
        tanqueadaCompartida.dineroGastado = Math.trunc(gasolina[i]?.dineroGastado.replace(/\./g, "") / dias) * lastDay
        tanqueadaCompartida.kilometrosRecorridos = kilometrosRec2
        tanqueadaCompartida.fecha = gasolina[i]?.fecha
        tanqueadaCompartida.precioGalon = gasolina[i]?.precioGalon
        tanqueadaCompartida.mes =nextMonth
        tanqueadaCompartida.compartida = true
        tanqueadaCompartida.fuelInicialLitros = fuelInicialLitros
        tanqueadaCompartida.fuelFinalLitros = fuelFinalLitros
        tanqueadaCompartida.fuelInicialPercentaje = gasolina[i]?.gasolinaInicial
        tanqueadaCompartida.fuelFinalPercentaje = fuelFinalPercentaje
        tanqueadaCompartida.fuelPercentajeUsado =fuelPerUsado2
        tanqueadaCompartida.dias = dias
        tanqueadaCompartida.dineroUsado = dineroUsado2
        tanqueadaCompartida.fuelComprado = fuelComprado
        tanqueadaCompartida.galones = galones
        tanqueadaCompartida.galonesUsados = galonesUsados2
        tanqueadaCompartida.precioKm = precioKm
        tanqueadaCompartida.galonRecorrido = galonRecorrido
        tanqueadaCompartida.kilometraje = kilometraje2
        tanqueadaCompartida.tipoGasolina = gasolina[i].tipoGasolina
        tanqueadaCompartida._id = gasolina[i]._id
        tanqueadaCompartida.estado ="finalizado"
        
        tanqueadas.push(tanqueada)
        tanqueadas.push(tanqueadaCompartida)
        
      }else{
        let kilometrosRec = gasolina[i+1]?.kilometraje.replace(/\./g, "") -gasolina[i]?.kilometraje.replace(/\./g, "")
        let fuelInicialLitros = parseFloat((porcentaje1 *gasolina[i].gasolinaInicial).toFixed(2))
        let fuelFinalLitros = parseFloat(((galones * 3.7)+fuelInicialLitros).toFixed(2))
        
        let fuelFinalPercentaje = parseFloat((fuelFinalLitros / porcentaje1).toFixed(2))
   
        
        let dias = new Date(gasolina[i+1].fecha).getDate() -new Date(gasolina[i].fecha).getDate()
        let fuelComprado = parseFloat((fuelFinalPercentaje - gasolina[i].gasolinaInicial).toFixed(2))
        
        let fuelPercentajeUsado = parseFloat((fuelFinalPercentaje - gasolina[i+1].gasolinaInicial).toFixed(2))
        
        let precioPer =   parseFloat((gasolina[i].dineroGastado.replace(/\./g, "") / fuelComprado).toFixed(2))
        let dineroUsado = Math.trunc(fuelPercentajeUsado * precioPer)
       
        let galonesUsados =  parseFloat((dineroUsado / gasolina[i].precioGalon.replace(/\./g, "")).toFixed(3))
        let precioKm = dineroUsado / kilometrosRec;
    let galonKm = dineroUsado /  gasolina[i].precioGalon.replace(/\./g, "") ;
        let galonRecorrido = parseFloat((kilometrosRec / galonKm).toFixed(2));
        let kilometraje = Number(gasolina[i].kilometraje)

        tanqueada.dineroGastado = gasolina[i]?.dineroGastado
        tanqueada.kilometrosRecorridos = kilometrosRec
        tanqueada.fecha = gasolina[i]?.fecha
        tanqueada.precioGalon = gasolina[i]?.precioGalon
        tanqueada.mes = month
        tanqueada.compartida = false
        tanqueada.fuelInicialLitros = fuelInicialLitros
        tanqueada.fuelFinalLitros = fuelFinalLitros
        tanqueada.fuelInicialPercentaje = gasolina[i]?.gasolinaInicial
        tanqueada.fuelFinalPercentaje = fuelFinalPercentaje
        tanqueada.fuelPercentajeUsado = fuelPercentajeUsado
        tanqueada.dias = dias
        tanqueada.dineroUsado = dineroUsado
        tanqueada.fuelComprado = fuelComprado
        tanqueada.galones = galones
        tanqueada.galonesUsados = galonesUsados
        tanqueada.precioKm = precioKm
        tanqueada.galonRecorrido = galonRecorrido
        tanqueada.kilometraje = kilometraje
        tanqueada.tipoGasolina = gasolina[i].tipoGasolina
        tanqueada._id = gasolina[i]._id
        tanqueada.estado ="finalizado"
        
        tanqueadas.push(tanqueada)
      }
      }else{
        let mes = new Date(gasolina[i].fecha).getMonth()
      tanqueadas.push({...gasolina[i],estado:'progreso', mes})
        
      }
      
    }

    let tanqueadasMes = tanqueadas.filter(el=> el.mes === monthActual)
    tanqueadasMes.reverse()
    let detailsTanqueada = tanqueadasMes.find(el=> el._id === visibleDetails.id)
    console.log(tanqueadasMes);
    let totales ={}
    let gastado =0
    let kilometrosRecorridos=tanqueadasMes[0].kilometraje -tanqueadasMes[tanqueadasMes.length-1].kilometraje
    let galonesComprados=0
    let dineroUsado = 0
    let galonesUsados =0
    let numeroTanqueadas = 0
    let precioCombustible = 0;
    for(let i = 0; i<tanqueadasMes.length;i++ ){
      let dineroGastado = typeof tanqueadasMes[i].dineroGastado!== 'number' ? tanqueadasMes[i].dineroGastado.toString().replace(/\./g, ""):tanqueadasMes[i].dineroGastado
      numeroTanqueadas +=1
      precioCombustible += Number(tanqueadasMes[i].precioGalon.replace(/\./g, ""))
      gastado+= Number(dineroGastado)
    }

    for(let datos of tanqueadasMes){
      if(datos.galones !== undefined){
        galonesComprados += datos.galones
        galonesUsados+= datos.galonesUsados
        dineroUsado += datos.dineroUsado
      }
    }
    console.log(precioCombustible);
    totales.dineroGastado = gastado
    totales.kilometrosRecorridos = kilometrosRecorridos
    totales.galonesComprados = galonesComprados
    totales.dineroUsado = dineroUsado
    totales.numeroTanqueadas = numeroTanqueadas
    totales.precioCombustible = precioCombustible / numeroTanqueadas
console.log(totales);
console.log(meses[1]);
  return <>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
       <Button
      onClick={() => setVisibleEdit(true)}
      variant="outlined"
      color="secondary"
      style={{marginBottom:'20px'}}
    >
      Añadir
    </Button>

    <div style={{border:'1px solid #464646', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
    <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
    <h3  style={{fontSize:'16px', color:'black', margin:0}}>Este Mes...</h3>
    <h5  style={{fontSize:'18px', color:'black', margin:0}}>{meses[monthActual]}</h5>
    </div>
        <div style={{margin:'20px 0',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
            <img
          src={"/images/recorrido.png"}
          alt="icon"
          style={{width:'40px', height:'40px'}}
        />
        <h3 style={{fontSize:'16px', color:'gray', margin:0, fontWeight:400}}> Recorriste</h3>
        <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>500Kms</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
            <img
          src={"/images/dinero.png"}
          alt="icon"
          style={{width:'40px', height:'40px'}}
        />
        <h3 style={{fontSize:'16px', color:'gray', margin:0, fontWeight:400}}>Gastaste</h3>
        <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>$290.000</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
            <img
          src={"/images/CombustibleFondo.png"}
          alt="icon"
          style={{width:'40px', height:'40px'}}
        />
        <h3 style={{fontSize:'16px', color:'gray', margin:0, fontWeight:400}}> Rendimiento</h3>
        <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>1gl/21Kms</h3>
            </div>
            
        </div>
        
    </div>


        {tanqueadasMes &&
        tanqueadasMes.map(el=>{
             let myDate = new Date(el.fecha);
             
             
            return(
                <CardGasolina el={el} myDate={myDate} setVisibleDetails={setVisibleDetails} monthActual={monthActual} />

            )
        })
        }
            {visibleDetails.bol &&<ModalDetalles setIdPost={setIdPost} detailsTanqueada={detailsTanqueada} setEdit={setEdit} setVisibleEdit={setVisibleEdit} setVisibleDetails={setVisibleDetails} visibleDetails={visibleDetails}/>}

</div>
  </>;
}
