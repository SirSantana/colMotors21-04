import { Button } from "@material-ui/core";
import { Cached, CalendarToday, Edit, LocalGasStationOutlined, MoreVert } from "@material-ui/icons";
import CardGasolina from "./CardGasolina";
import{useState} from 'react'
import ModalDetalles from "./ModalDetalle";

export default function Mes({
  setIdPost,
  setEdit,
  gasolina,
  setVisibleEdit,
  setPromedio,
  tanque,
}) {
    const [visibleDetails, setVisibleDetails] =useState({bol:false, id:''})

    let monthActual = 6

  let meses = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  let datosCompartidos = [];
  let daysMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let parciales = [[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}],];

  for (let i = 0; i < gasolina.length; i++) {
    let mes = new Date(gasolina[i].fecha).getMonth();
    meses[mes] = gasolina.filter((el) => {
      let fecha = new Date(el.fecha);
      return fecha.getMonth() === mes;
    });
  }

  for (let i = 0; i < 12; i++) {
    if(meses[i].length > 0){

    if (meses[i].length > 0 && meses[i + 1].length > 0) {

      let longMes = meses[i].length;
      //FECHA
      let dias = [];
      let dineroGastado = meses[i][longMes - 1].dineroGastado;
      let firstDate = meses[i][longMes - 1];
      let lastDate = meses[i + 1][0];
      let dayFirst = new Date(firstDate.fecha);
      let daySecond = new Date(lastDate.fecha);
      let diasMonthActual = daysMeses[i] - dayFirst.getDate();
      dias.push(diasMonthActual, daySecond.getDate());
      //GASOLINAINICIAL, TIPO, KILOMETRAJE, FECHA
      let gasolinaInicial = meses[i][longMes - 1].gasolinaInicial;
      let tipoFuel = meses[i][longMes - 1].tipoGasolina;
      let kilometraje = meses[i][longMes - 1].kilometraje;
      let fecha = meses[i][longMes - 1].fecha;
      let precioGalon = meses[i][longMes - 1].precioGalon;
      let id = meses[i][longMes - 1]._id
      datosCompartidos[i] = {fecha,dineroGastado,dias,gasolinaInicial,tipoFuel,kilometraje, precioGalon, id};

      if(meses[i+1].length > 0){
        meses[i].pop() 
        meses[i].push(datosCompartidos[i])
      }
    }

        for(let j = 0; j <meses[i].length-1; j++){
          if(meses[i][j+1] !== undefined){
            console.log(i);
            console.log(j);
            let kilometrosRec = meses[i][j + 1].kilometraje.replace(/\./g, "") -meses[i][j].kilometraje.replace(/\./g, "") 
            let porcentaje1 = tanque/100
            let precioGalon = meses[i][j].precioGalon
            let galones = parseFloat((meses[i][j].dineroGastado.replace(/\./g, "") /meses[i][j].precioGalon.replace(/\./g, "")).toFixed(2))
            let gastado = meses[i][j].dineroGastado
            let fuelInicialLitros = parseFloat((porcentaje1 *meses[i][j].gasolinaInicial).toFixed(2))
            let fuelFinalLitros = parseFloat(((galones * 3.7)+fuelInicialLitros).toFixed(2))
            let fuelFinalPercentaje = parseFloat((fuelFinalLitros / porcentaje1).toFixed(2))
            let fuelPercentajeUsado = parseFloat((fuelFinalPercentaje - meses[i][j+1].gasolinaInicial).toFixed(2))
            let fuelComprado = parseFloat((fuelFinalPercentaje - meses[i][j].gasolinaInicial).toFixed(2))
            let precioPer =   parseFloat((meses[i][j].dineroGastado.replace(/\./g, "") / fuelComprado).toFixed(2))
            let dineroUsado = Math.trunc((fuelFinalPercentaje -meses[i ][j+1].gasolinaInicial) * precioPer)
            let galonesUsados =  parseFloat((dineroUsado / meses[i][j].precioGalon.replace(/\./g, "")).toFixed(3))
            let precioKm = dineroUsado / kilometrosRec;
            let galonKm = dineroUsado /  meses[i][j].precioGalon.replace(/\./g, "") ;
            let galonRecorrido = parseFloat((kilometrosRec / galonKm).toFixed(2));
            let fecha = meses[i][j].fecha
            let id = meses[i][j]._id
            let tanqueInicial = meses[i][j].gasolinaInicial
            let tipoCombustible =  meses[i][j].tipoGasolina
            let diasTanqueados = new Date(meses[i][j+1].fecha).getDate() - new Date(meses[i][j].fecha).getDate()
            parciales[i][j] ={galones, fuelInicialLitros, fuelFinalLitros, gastado,  kilometrosRec,fuelFinalPercentaje,fuelPercentajeUsado,fuelComprado,precioPer,dineroUsado,galonesUsados,precioKm,galonRecorrido, precioGalon, fecha, id,tanqueInicial,tipoCombustible,diasTanqueados}
            
        if(meses[i].length-2 === j && meses[i+1].length >0){
			let kilometrosRec = meses[i+1][0].kilometraje.replace(/\./g, "") -meses[i][meses[i].length-1].kilometraje.replace(/\./g, "")  
            let porcentaje1 = tanque/100
            let galones = parseFloat((meses[i][meses[i].length - 1].dineroGastado.replace(/\./g, "") / meses[i][meses[i].length - 1].precioGalon).toFixed(2))
            let gastado = meses[i][meses[i].length - 1].dineroGastado
            let fuelInicialLitros = parseFloat((porcentaje1 *meses[i][meses[i].length - 1].gasolinaInicial).toFixed(2))
            let fuelFinalLitros = parseFloat(((galones *3.7)+fuelInicialLitros).toFixed(2))
            let fuelFinalPercentaje = parseFloat((fuelFinalLitros / porcentaje1).toFixed(2))
            let fuelPercentajeUsado = parseFloat((fuelFinalPercentaje - meses[i+1][0].gasolinaInicial).toFixed(2))

            let fuelComprado = parseFloat((fuelFinalPercentaje - meses[i][meses[i].length-1].gasolinaInicial).toFixed(2))
            let precioPer =   parseFloat((meses[i][meses[i].length -1].dineroGastado.replace(/\./g, "") / fuelComprado).toFixed(2))
            let dineroUsado = Math.trunc((fuelFinalPercentaje -meses[i+1][0].gasolinaInicial) * precioPer)
            let galonesUsados =  parseFloat((dineroUsado / meses[i][j].precioGalon.replace(/\./g, "")).toFixed(3))
            let precioKm = dineroUsado / kilometrosRec;
            let galonKm = dineroUsado /  meses[i][j].precioGalon.replace(/\./g, "") ;
            let galonRecorrido = parseFloat((kilometrosRec / galonKm).toFixed(2));
            let fecha = meses[i][meses[i].length - 1].fecha
            let precioGalon = meses[i][meses[i].length - 1].precioGalon
            let id = meses[i][meses[i].length - 1].id
            let tanqueInicial = meses[i][meses[i].length - 1].gasolinaInicial
            let tipoCombustible = meses[i][meses[i].length - 1].tipoFuel
            let compartido = true
            //SACANDO DATOS COMPARTIDOS POR SEPARADO  
            let kmXDia = kilometrosRec / (meses[i][meses[i].length - 1].dias[0] + meses[i][meses[i].length - 1].dias[1])
            let fuelXDia = fuelPercentajeUsado / (meses[i][meses[i].length - 1].dias[0] + meses[i][meses[i].length - 1].dias[1])
            let dineroXDia = dineroUsado / (meses[i][meses[i].length - 1].dias[0] + meses[i][meses[i].length - 1].dias[1])
            let galonXDia = galonesUsados / (meses[i][meses[i].length - 1].dias[0] + meses[i][meses[i].length - 1].dias[1])
            let diasTanqueados = meses[i][meses[i].length - 1].dias[0] + meses[i][meses[i].length - 1].dias[1]
            let mesInitial = new Date(meses[i][meses[i].length - 1].fecha).getMonth()
            kilometrosRec =  [parseFloat((kmXDia* (meses[i][meses[i].length - 1].dias[0])).toFixed(2)),parseFloat((kmXDia* (meses[i][meses[i].length - 1].dias[1])).toFixed(2))] 
            
            fuelPercentajeUsado =[parseFloat((fuelXDia *meses[i][meses[i].length - 1].dias[0]).toFixed(2)), parseFloat((fuelXDia *meses[i][meses[i].length - 1].dias[1]).toFixed(2))]
                
            dineroUsado =[parseFloat((dineroXDia *meses[i][meses[i].length - 1].dias[0]).toFixed(2)), parseFloat((dineroXDia *meses[i][meses[i].length - 1].dias[1]).toFixed(2))]  
            
            galonesUsados =[parseFloat((galonXDia *meses[i][meses[i].length - 1].dias[0]).toFixed(2)), parseFloat((galonXDia *meses[i][meses[i].length - 1].dias[1]).toFixed(2))]  
                
        parciales[i][j+1]={galones, fuelInicialLitros, fuelFinalLitros, gastado,kilometrosRec,  fuelFinalPercentaje, fuelPercentajeUsado,fuelComprado,precioPer,dineroUsado,galonesUsados,precioKm,galonRecorrido,precioGalon, fecha, id,tanqueInicial,tipoCombustible,diasTanqueados,compartido,mesInitial}
           
        if(parciales[i][parciales[i].length - 1].compartido ){
          parciales[i+1][parciales[i+1].length] = parciales[i][parciales[i].length - 1]
      }
      }
            
              parciales[i].map(el=>{
                console.log(el);
              })
          }
            
            // if(meses[i+1][0] !==undefined && parciales[i+1][j] !=={}){
            //     parciales[i+1][j] = meses[i+1][j]
            // }
        }

  }
  }
  console.log(meses);
  console.log(datosCompartidos);
  console.log(parciales);
  let tanqueadaProceso = meses[monthActual][meses[monthActual].length-1]
  let fechaProceso = tanqueadaProceso !== undefined && new Date(tanqueadaProceso.fecha)
  console.log(tanqueadaProceso);
  console.log(parciales);
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

        {tanqueadaProceso !== undefined &&
       <div style={{backgroundColor:'#f50057', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
            <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <section style={{display:'flex', flexDirection:'row'}}>
            <CalendarToday style={{ color:'white', marginRight:'10px'}}/>
            <h3  style={{fontSize:'16px', color:'white', margin:0}}>{fechaProceso.toLocaleDateString()}</h3>
            </section>
            <section style={{display:'flex', flexDirection:'row'}}>
            <h5  style={{fontSize:'18px', color:'white', margin:0}}>{tanqueadaProceso.tipoGasolina}</h5>
            <MoreVert  style={{color:'white',fontSize:'30px', margin:0}}/> 
            </section>
            </div>
            <div style={{display:'flex', flexDirection:'row', margin:'20px 0'}}>
                <div style={{borderRadius:'10px',display:'flex', flexDirection:'column',backgroundColor:'white', width:'40%', alignItems:'center', padding:'10px 0'}}>
                <LocalGasStationOutlined fontSize='large' style={{fontSize:'60px', color:'#f50057'}}/>
                <h3  style={{fontSize:'24px', color:'black', margin:0}}>$ {tanqueadaProceso.dineroGastado}</h3>
                <h6  style={{color:'gray',fontSize:'18px', margin:0}}> 1gl /$ {tanqueadaProceso.precioGalon}<Edit fontSize='small'/></h6>
                </div>
                
            <div style={{display:'flex', flexDirection:'column', width:'60%', justifyContent:'center',alignItems:'center', marginLeft:'20px'}}>
                  <Cached style={{color:'white', fontSize:'32px'}}/>
                    <h3 style={{marginTop:'5px',  borderRadius:'10px', width:'fit-content', padding:'4px 16px', backgroundColor:'white', textAlign:'center', color:'#f50057', fontSize:'14px', margin:0}}>EN PROGRESO</h3>
                </div>
            
            </div>
   
   
          </div>
        }

        {parciales[monthActual] !== {}&& parciales[monthActual].length >0 &&
        parciales[6].map(el=>{
             let myDate = new Date(el.fecha);
             
            return(
                <CardGasolina el={el} myDate={myDate} setVisibleDetails={setVisibleDetails} monthActual={monthActual} />

            )
        })
        }
            {visibleDetails.bol &&<ModalDetalles setEdit={setEdit} setVisibleEdit={setVisibleEdit} setIdPost={setIdPost} id={visibleDetails.id} setVisibleDetails={setVisibleDetails} visibleDetails={visibleDetails} parciales={parciales} month={monthActual}/>}

</div>
  </>;
}
