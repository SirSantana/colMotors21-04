import { AttachMoney, Cached, CalendarToday, Delete, Edit, LocalGasStationOutlined, MoreVert } from "@material-ui/icons";
import { Button, Dialog, Menu, MenuItem } from "@material-ui/core";
import useStyles from "./styles";
import { theme } from "../../../utils/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ModalDetalles from "./ModalDetalle";
import CardGasolina from "./CardGasolina";
export default function EsteMes({setIdPost,setEdit, gasolina, setVisibleEdit, setPromedio, tanque }) {
  const classes = useStyles();
  const [visibleDetails, setVisibleDetails] =useState({bol:false, id:''})
  const router = useRouter()
  
  let date = new Date();
  let gasolinaMes = [];
  let fechaPosts;
  let parciales =[]
  let totales = {
    kilometrosRecorridos: 0,
    dineroGastado: 0,
    precioKm: 0,
    kmGalones: 0,
  };
  let fechaString = date.toLocaleString("en-US", { month: "short" })



  //CAMBIAR PARA QUE SOLO SE EJECUTE ANUALMENTE ABAJO
  let meses =[{},{},{},{},{},{},{},{},{},{},{},{}]
  let dataMen =[{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0},{kilometrosRec:0}]
  let datos=[{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]},{kilometrosRec:[], galones:[],fuelInicialLitros:[]}]

  for(let i = 0; i < gasolina.length; i++){
    let mes = new Date(gasolina[i].fecha).getMonth()
    meses[mes] =gasolina.filter(el=> {
      let fecha = new Date(el.fecha)
      return(
      fecha.getMonth() === mes
      )
  })
  }
  console.log(meses);

  let daysMeses = [31,28,31,30,31,30,31,31,30,31,30,31]
  let datosCompartidos =[[],[],[],[],[],[],[],[],[],[],[],[]]
  for(let i = 0; i <12; i++){
    if(meses[i].length>0){
      if(meses[i+1].length>0){
        console.log(meses);
  let long = meses[i].length
      let gasolinaGastada = meses[i][long - 1].dineroGastado
      
      let kilometraje=[]
      let dias=[]
      let firstDay = meses[i][long- 1]
       let lastDay = meses[i+1][0]
       let dayFirst = new Date(firstDay.fecha)
       let daySecond = new Date(lastDay.fecha)	
       let diasMonthActual = daysMeses[i] - dayFirst.getDate()
       dias.push(diasMonthActual,daySecond.getDate())
       let gasolinaInicial = meses[i][long - 1].gasolinaInicial
       let myDate = new Date(meses[i][long-1].fecha)
         kilometraje.push(meses[i+1][0].kilometraje.replace(/\./g, "")) 
         kilometraje.push(meses[i][long-1].kilometraje.replace(/\./g, "")) 
        let diasTotales = diasMonthActual + daySecond.getDate()
        let idDatoCompartido= meses[i][long- 1]._id
     
     datosCompartidos[i].kilometrajeCompartido  = kilometraje
     datosCompartidos[i].dias  = dias
     datosCompartidos[i].dineroCompartido  = gasolinaGastada
     datosCompartidos[i].gasolinaInicial  = gasolinaInicial
     datosCompartidos[i].fecha  = myDate
     datosCompartidos[i].diasTotales  = diasTotales
     datosCompartidos[i].idDatoCompartido  = idDatoCompartido
     let dineroPorDia = datosCompartidos[i].dineroCompartido.replace(/\./g, "") / (datosCompartidos[i].dias[0] + datosCompartidos[i].dias[1] )
     datosCompartidos[i].dineroPorDia  = Math.trunc(parseFloat(dineroPorDia))
     meses[i].push(datosCompartidos[i])
     console.log(meses[i]);
      }

//       for(let j = 0; j<meses[i].length - 1; j++){
//         let kilometrosRec = meses[i][j + 1].kilometraje.replace(/\./g, "") -meses[i]				[j].kilometraje.replace(/\./g, "") 
//         let porcentaje1 = tanque/100
//         console.log(porcentaje1)
//         let galones = parseFloat((meses[i][j].dineroGastado.replace(/\./g, "") / meses[i][j].precioGalon.replace(/\./g, "")).toFixed(3))
//         let fuelInicialLitros = parseFloat((porcentaje1 *meses[i][j].gasolinaInicial).toFixed(2))
// let fuelFinalLitros = parseFloat(((galones * 3.7)+fuelInicialLitros).toFixed(2))
//       datos[i].kilometrosRec.push(kilometrosRec)
//     datos[i].galones.push(galones)
//     datos[i].fuelInicialLitros.push(fuelInicialLitros)
//       }
    }
  }



  //CAMBIAR PARA QUE SOLO SE EJECUTE ANUALMENTE ARRIBA



  let gasolinaMensual = gasolina.filter(el=> el.fecha.split(" ", 2)[1] === fechaString)
  console.log(gasolinaMensual);
  if (gasolina !== undefined && gasolina.length >= 1) {
    fechaPosts = gasolina.filter((el) =>el.fecha.split(" ", 2)[1] ===fechaString);

    for (let i = 0; i < gasolina.length - 1; i++) {

      if (gasolina[i].fecha.split(" ", 2)[1] ===fechaString) {
        gasolinaMes.push(gasolina[i]);

        let porcentaje1 = tanque/100
        let galones = parseFloat((gasolina[i].dineroGastado.replace(/\./g, "") / gasolina[i].precioGalon.replace(/\./g, "")).toFixed(3))
        let fuelInicialLitros = parseFloat((porcentaje1 * gasolina[i].gasolinaInicial).toFixed(2))
        let fuelFinalLitros = parseFloat(((galones * 3.7)+fuelInicialLitros).toFixed(2))
         
        let fuelFinalPercentaje = parseFloat((fuelFinalLitros / porcentaje1).toFixed(2))
        let fuelPercentajeUsado = fuelFinalPercentaje - gasolina[i+1].gasolinaInicial
        let fuelComprado = parseFloat((fuelFinalPercentaje - gasolina[i].gasolinaInicial).toFixed(2))
        let precioGastado = parseFloat((fuelFinalPercentaje - gasolina[i+1].gasolinaInicial).toFixed(2))
        let precioPer =  gasolina[i].dineroGastado.replace(/\./g, "") / fuelComprado
        let dineroUsado = Math.trunc((fuelFinalPercentaje -gasolina[i +1].gasolinaInicial) * precioPer)
        let galonesUsados =  parseFloat((dineroUsado / gasolina[i].precioGalon.replace(/\./g, "")).toFixed(3))
        
        

        let kilometrosRec =
          gasolina[i + 1].kilometraje.replace(/\./g, "") -gasolina[i].kilometraje.replace(/\./g, "");
        // let difDias = gasolinaMensual[i+1].fecha.split(" ", 3)[2] - gasolinaMensual[i].fecha.split(" ", 3)[2]
        
        let precioKm =
          dineroUsado / kilometrosRec;
          // kmPrecio.push(parseFloat(precioKm.toFixed(2)));

        let galonKm = dineroUsado /  gasolina[i].precioGalon.replace(/\./g, "") ;
        let galonDi = kilometrosRec / galonKm;
        
        gasolina[i].dineroGastado.replace(/\./g, "");
        // galon.push(parseFloat(galonDi.toFixed(2)));
        totales.kilometrosRecorridos += kilometrosRec;
        totales.dineroGastado += Number(
          gasolina[i].dineroGastado.replace(/\./g, "")
        );
        totales.precioKm += precioKm;
        setPromedio(parseFloat((totales.precioKm / gasolinaMes.length).toFixed(2)))
        totales.kmGalones += parseFloat(galonDi);
        
        parciales.push({
          kilometrosRec, precioKm, galonDi, 
          gasolina:gasolina[i].dineroGastado, fecha:gasolina[i].fecha, 
          galones,fuelFinalPercentaje,fuelComprado,dineroUsado,
          fuelInicial:gasolina[i].gasolinaInicial, id:gasolina[i]._id,precioGalon:gasolina[i].precioGalon,
          tipoCombustible:gasolina[i].tipoGasolina, fuelPercentajeUsado, galonesUsados
        })
      }
    }
  }
  let copiaParciales = parciales[parciales.length - 1]
  let longitud = gasolinaMensual.length
  let mesParciales = parciales.map((el) =>el.fecha.split(" ", 2)[1]);
  let myDateee
  if(gasolinaMensual.length>0){
     myDateee = new Date(gasolinaMensual[longitud - 1].fecha);
  }
  let month = new Date().getMonth()
  console.log(datosCompartidos[month-1]);

  parciales.pop()
  let dateCompartida =new Date(datosCompartidos[month-1].fecha) 
  let dateCompartida2 = dateCompartida.toLocaleString("en-US", { month: "short" })
  return (
    <>
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

        

        
         {gasolinaMensual.length >0 && 
         <div style={{backgroundColor:'#f50057', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
         <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
         <section style={{display:'flex', flexDirection:'row'}}>
         <CalendarToday style={{ color:'white', marginRight:'10px'}}/>
         <h3 className={classes.texto} style={{fontSize:'16px', color:'white'}}>{myDateee.toLocaleDateString()}</h3>
         </section>
         <section style={{display:'flex', flexDirection:'row'}}>
         <h5 className={classes.texto} style={{fontSize:'18px', color:'white'}}>{gasolinaMensual[longitud - 1].tipoGasolina}</h5>
         <MoreVert  style={{color:'white',fontSize:'30px'}}/> 
         </section>
         </div>
         <div style={{display:'flex', flexDirection:'row', margin:'20px 0'}}>
             <div style={{borderRadius:'10px',display:'flex', flexDirection:'column',backgroundColor:'white', width:'40%', alignItems:'center', padding:'10px 0'}}>
             <LocalGasStationOutlined fontSize='large' style={{fontSize:'60px', color:'#f50057'}}/>
             <h3 className={classes.texto} style={{fontSize:'24px', color:'black'}}>$ {gasolinaMensual[longitud - 1].dineroGastado}</h3>
             <h6 className={classes.texto} style={{color:'gray',fontSize:'18px'}}> 1gl /$ {gasolinaMensual[longitud - 1].precioGalon}<Edit fontSize='small'/></h6>
             </div>
             
         <div style={{display:'flex', flexDirection:'column', width:'60%', justifyContent:'center',alignItems:'center', marginLeft:'20px'}}>
               <Cached style={{color:'white', fontSize:'32px'}}/>
                 <h3 style={{marginTop:'5px',  borderRadius:'10px', width:'fit-content', padding:'4px 16px', backgroundColor:'white', textAlign:'center', color:'#f50057', fontSize:'14px'}}>EN PROGRESO</h3>
             </div>
         
         </div>


       </div>}
     {mesParciales[0] === fechaString && parciales.length >0 && 
      
     parciales.map(el=>{
             let myDate = new Date(el.fecha);
            let restante =el.gasolina.replace(/\./g, "") - el.dineroUsado
            
           return(
            <CardGasolina el={el} myDate={myDate} restante={restante} setVisibleDetails={setVisibleDetails}/>
           )
           
          })}


          {datosCompartidos[month -1].dias !== undefined ?
          dateCompartida2 === fechaString ? 
          <CardGasolina el={datosCompartidos[month-1]} myDate={datosCompartidos[month - 1].fecha} restante={null} setVisibleDetails={setVisibleDetails}/>
          :

        // <a onClick={(e)=>setVisibleDetails({bol:true, id:datosCompartidos[month -1].idDatoCompartido})}>
          <div style={{border:'1px solid #f50057', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
        <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <section style={{display:'flex', flexDirection:'row'}}>
        <CalendarToday style={{ color:'black', marginRight:'10px'}}/>
        <h3 className={classes.texto} style={{fontSize:'16px', color:'black'}}>{datosCompartidos[month - 1].fecha.toLocaleDateString()}</h3>
        </section>
        <section style={{display:'flex', flexDirection:'row'}}>
        <h5 className={classes.texto} style={{fontSize:'18px', color:'#f50057'}}>Saldo Mes Anterior</h5>
        <MoreVert  style={{color:'black',fontSize:'30px'}}/> 
        </section>
        </div>
        <div style={{display:'flex', flexDirection:'row', margin:'20px 0'}}>
            <div style={{border:'1px solid #f50057',borderRadius:'10px',display:'flex', flexDirection:'column',backgroundColor:'white', width:'40%', alignItems:'center', padding:'10px 0'}}>
            <LocalGasStationOutlined fontSize='large' style={{fontSize:'60px', color:'#f50057'}}/>
            <h3 className={classes.texto} style={{fontSize:'24px', color:'black'}}>$ {datosCompartidos[month-1].dineroCompartido}</h3>
            <h6 className={classes.texto} style={{color:'gray',fontSize:'18px'}}> $ {datosCompartidos[month-1].dineroPorDia * datosCompartidos[month-1].dias[1]}</h6>
            </div>
            
            <div style={{display:'flex', flexDirection:'column', width:'60%', justifyContent:'normal', marginLeft:'20px'}}>
                    <section style={{marginBottom:'10px'}}>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'18px', fontWeight:'600'}}> Distancia Recorrida</h3>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'16px',fontWeight:'400'}}> {Math.trunc(((datosCompartidos[month-1].kilometrajeCompartido[0] - datosCompartidos[month-1].kilometrajeCompartido[1])/datosCompartidos[month-1].diasTotales) * datosCompartidos[month-1].dias[1])  } Kilometros</h3>
                    </section>
                    <section style={{ marginBottom:'10px'}}>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'18px', fontWeight:'600'}}>Promedio Gasolina</h3>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'16px',fontWeight:'400'}}>1gl/ Kms</h3>
                    </section>
                    <section>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'18px', fontWeight:'600'}}>Dinero Gastado Este Mes</h3>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'16px',fontWeight:'400'}}>$ {datosCompartidos[month-1].dineroPorDia * datosCompartidos[month-1].dias[1]} </h3>
                    </section>
                </div>
        </div>
      </div>
        // </a>
      :null
        }
            {visibleDetails.bol &&<ModalDetalles setEdit={setEdit} setVisibleEdit={setVisibleEdit} setIdPost={setIdPost} id={visibleDetails.id} setVisibleDetails={setVisibleDetails} visibleDetails={visibleDetails} parciales={parciales} dataCom={datosCompartidos[month -1]} month={month} copiaParciales={copiaParciales}/>}
    
         
          {/* {parciales.length>0 && parciales.map(el=>{
             let myDate = new Date(el.fecha);

            return(
<div style={{border:'1px solid #f50057', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <section style={{display:'flex', flexDirection:'row'}}>
              <CalendarToday style={{ marginRight:'10px'}}/>
              <h3 className={classes.texto} style={{color:'black', fontWeight:'700'}}>{myDate.toLocaleDateString()}</h3>
              </section>
              <h3 className={classes.texto1} style={{color:'white', fontWeight:'600', backgroundColor:'#f50057',borderRadius:'10px', padding:'5px 12px'}}>CORRIENTE</h3>
              
            </div>
            <div style={{display:'flex', flexDirection:'row', margin:'20px 0'}}>
                <div style={{borderRadius:'10px',display:'flex', flexDirection:'column',backgroundColor:'#f50057', width:'40%', alignItems:'center', padding:'10px 0'}}>
                <LocalGasStationOutlined fontSize='large' style={{fontSize:'60px', color:'white' }}/>
                <h3 className={classes.texto} style={{fontSize:'24px'}}>$ 90.000</h3>
                <h6 className={classes.texto} style={{fontSize:'18px', fontWeight:'400'}}>+ 23.000</h6>
                </div>
                <div style={{display:'flex', flexDirection:'column', width:'60%', justifyContent:'normal', marginLeft:'20px'}}>
                    <section style={{marginBottom:'10px'}}>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'18px', fontWeight:'600'}}> Distancia Recorrida</h3>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'16px',fontWeight:'400'}}>{el.kilometrosRec} Kilometros</h3>
                    </section>
                    <section style={{ marginBottom:'10px'}}>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'18px', fontWeight:'600'}}>Promedio Gasolina</h3>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'16px',fontWeight:'400'}}>1gl/{el.galonDi} Kms</h3>
                    </section>
                    <section>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'18px', fontWeight:'600'}}>Tiempo</h3>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'16px',fontWeight:'400'}}>7 Dias</h3>
                    </section>
                </div>
            </div>


          </div>
            )
          })} */}

          




        {/* <div
          className={classes.div1}
        >
          <AttachMoney fontSize="medium" />
          <h3 style={{ margin: 0, fontWeight: "700" }}>Total Gastado</h3>
        </div>
        {gasolinaMensual.map((el) => {
          let myDate = new Date(el.fecha);
          return (
            <>
              <div key={el._id} className={classes.divs}>
                <h4 className={classes.texto7}>
                  {myDate.toLocaleDateString()}
                </h4>
                <h4
                  className={classes.texto7}
                  style={{ fontWeight: "500", color: "#f50057" }}
                >
                  ${" "}
                  {el.dineroGastado.toString().length <= 3
                    ? el.dineroGastado + ".000"
                    : el.dineroGastado}
                </h4>
                <h4
                  className={classes.texto7}
                  style={{ color: "black", fontWeight: "500" }}
                >
                  {el.tipoGasolina}
                </h4>
                <Delete />
              </div>
            </>
          );
        })}
        <div
          className={classes.divColumn}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ width: "30px", height: "35px" }}
              src={`/images/distance.png`}
              alt={"distancia"}
            />
            <h3 style={{ margin: 0, fontWeight: "700" }}>
              Distancia Recorrida
            </h3>
          </div>

          <div className={classes.divs}>
            <section style={{ width: "33%" }}>
              {gasolinaMes.map((el) => {
                let myDate = new Date(el.fecha);
                return (
                  <h4
                    key={el._id}
                    className={classes.texto7}
                    style={{ marginBottom: "10px" }}
                  >
                    {myDate.toLocaleDateString()}
                  </h4>
                );
              })}
            </section>
            <section>
              {kmRecorridos.map((el) => {
                return (
                  <>
                    <h4
                      key={el._id}
                      className={classes.texto7}
                      style={{
                        fontWeight: "500",
                        color: "#f50057",
                        marginBottom: "10px",
                      }}
                    >
                      {el} Kilometros
                    </h4>
                  </>
                );
              })}
            </section>
          </div>
        </div>

        <div
         className={classes.divColumn}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ width: "28px", height: "28px" }}
              src={`/images/Combustible.png`}
              alt={"combustible"}
            />
            <h3 style={{ margin: 0, fontWeight: "700", marginBottom: "10px" }}>
              Promedio Individual
            </h3>
          </div>
          <div
          className={classes.div1}
            style={{ justifyContent: "space-between", }}
          >
            <section>
              {gasolinaMes.map((el) => {
                let myDate = new Date(el.fecha);
                return (
                  <>
                    <div key={el._id} className={classes.divs}>
                      <h4 className={classes.texto7}>
                        {myDate.toLocaleDateString()}
                      </h4>
                    </div>
                  </>
                );
              })}
            </section>
            <section>
              {kmPrecio.map((el) => {
                return (
                  <>
                    <h4
                      key={el._id}
                      className={classes.texto7}
                      style={{
                        fontWeight: "500",
                        color: "#f50057",
                        marginBottom: "10px",
                      }}
                    >
                      1Km/$ {el}
                    </h4>
                  </>
                );
              })}
            </section>
            <section>
              {galon.map((el) => {
                return (
                  <>
                    <h4
                      key={el._id}
                      className={classes.texto7}
                      style={{
                        fontWeight: "500",
                        color: "#f50057",
                        marginBottom: "10px",
                      }}
                    >
                      1gl/{el} Kms
                    </h4>
                  </>
                );
              })}
            </section>
          </div>
        </div>

        <div
          className={classes.divColumn}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ width: "28px", height: "28px" }}
              src={`/images/Combustible.png`}
              alt={"combustible"}
            />
            <h3 style={{ margin: 0, fontWeight: "700", marginBottom: "10px" }}>
              Promedio Mensual
            </h3>
          </div>
          <div className={classes.div2}>
            <section
            className={classes.div1}
              style={{ justifyContent: "space-between", marginBottom:0 }}
            >
              <h4
                className={classes.texto7}
                style={{ margin: 0, fontWeight: "500" }}
              >
                Kilometros Recorridos
              </h4>
              <h4
                className={classes.texto7}
                style={{
                  fontWeight: "500",
                  marginBottom: "10px",
                  color: "#f50057",
                }}
              >
                {totales.kilometrosRecorridos} Kms
              </h4>
            </section>

            <section
              className={classes.div1}
              style={{ justifyContent: "space-between", marginBottom:0 }}
            >
              <h4
                className={classes.texto7}
                style={{ margin: 0, fontWeight: "500" }}
              >
                Dinero Gastado
              </h4>
              <h4
                className={classes.texto7}
                style={{
                  fontWeight: "500",
                  marginBottom: "10px",
                  color: "#f50057",
                }}
              >
                $ {totales.dineroGastado}
              </h4>
            </section>

            <section
             className={classes.div1}
             style={{ justifyContent: "space-between", marginBottom:0 }}
            >
              <h4
                className={classes.texto7}
                style={{ margin: 0, fontWeight: "500" }}
              >
                Precio por Km
              </h4>
              <h4
                className={classes.texto7}
                style={{
                  fontWeight: "500",
                  marginBottom: "10px",

                  color: "#f50057",
                }}
              >
                ${" "}
                {parseFloat((totales.precioKm / gasolinaMes.length).toFixed(2))}
              </h4>
            </section>

            <section
              className={classes.div1}
              style={{ justifyContent: "space-between", marginBottom:0 }}
            >
              <h4
                className={classes.texto7}
                style={{ margin: 0, fontWeight: "500" }}
              >
                Kilometros por Galon
              </h4>
              <h4
                className={classes.texto7}
                style={{
                  margin: 0,
                  fontWeight: "500",
                  marginBottom: "10px",
                  color: "#f50057",
                }}
              >
                {parseFloat(
                  (totales.kmGalones / gasolinaMes.length).toFixed(2)
                )}{" "}
                Kms
              </h4>
            </section>
          </div>
        </div>

        <Button
          onClick={() => setVisibleEdit(true)}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Editar
        </Button> */}
      </div>
    </>
  );
  
}

