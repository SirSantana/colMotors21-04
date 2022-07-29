import { AttachMoney, Cached, CalendarToday, Delete, Edit, LocalGasStationOutlined, MoreVert } from "@material-ui/icons";
import { Button, Menu, MenuItem } from "@material-ui/core";
import useStyles from "./styles";
import { theme } from "../../../utils/theme";
import { useState } from "react";
import ModalDetalles from "./ModalDetalle";
export default function EsteMes({ gasolina, setVisibleEdit, setPromedio, tanque }) {
  const classes = useStyles();
  const [visibleDetails, setVisibleDetails] =useState(false)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
  let gasolinaMensual = gasolina.filter(el=> el.fecha.split(" ", 2)[1] === fechaString)
  console.log(gasolina);

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

        let fuelComprado = parseFloat((fuelFinalPercentaje - gasolina[i].gasolinaInicial).toFixed(2))
        let precioGastado = parseFloat((fuelFinalPercentaje - gasolina[i+1].gasolinaInicial).toFixed(2))
        let precioPer =  gasolina[i].dineroGastado.replace(/\./g, "") / fuelComprado
        let dineroUsado = Math.trunc((fuelFinalPercentaje -gasolina[i +1].gasolinaInicial) * precioPer)
        console.log(fuelComprado);
        console.log(precioGastado);
        console.log(precioPer);
        console.log(dineroUsado);


        let kilometrosRec =
          gasolina[i + 1].kilometraje.replace(/\./g, "") -gasolina[i].kilometraje.replace(/\./g, "");
        let difDias = gasolinaMensual[i+1].fecha.split(" ", 3)[2] - gasolinaMensual[i].fecha.split(" ", 3)[2]
        
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
          galones,fuelFinalPercentaje,fuelComprado,dineroUsado

        })
      }
    }
  }
  let longitud = gasolinaMensual.length
  let myDateee = new Date(gasolina[longitud-1].fecha);
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
                {/* <div style={{display:'flex', flexDirection:'column', width:'60%', alignItems:'center', justifyContent:'center'}}>
                    <h3 className={classes.texto1}>EN PROGRESO</h3>
                </div> */}
            <div style={{display:'flex', flexDirection:'column', width:'60%', justifyContent:'center',alignItems:'center', marginLeft:'20px'}}>
                  <Cached style={{color:'white', fontSize:'32px'}}/>
                    <h3 style={{marginTop:'5px',  borderRadius:'10px', width:'fit-content', padding:'4px 16px', backgroundColor:'white', textAlign:'center', color:'#f50057', fontSize:'14px'}}>EN PROGRESO</h3>
                </div>
            
            </div>


          </div>
     {parciales.length >0 && parciales.map(el=>{
            console.log('hola',el);
             let myDate = new Date(el.fecha);
           return(
          <div style={{border:'1px solid #f50057', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <section style={{display:'flex', flexDirection:'row'}}>
                <CalendarToday style={{color:'white', marginRight:'10px',color:'black'}}/>
              <h3 className={classes.texto} style={{fontSize:'16px',color:'black'}}>{myDate.toLocaleDateString()}</h3>
                </section>
                <a onClick={handleClick}><MoreVert style={{color:'black',fontSize:'30px'}}/></a>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=> setVisibleDetails(true)}>Detalle</MenuItem>
                <MenuItem onClick={handleClose}>Editar</MenuItem>
                <MenuItem onClick={handleClose}>Eliminar</MenuItem>
              </Menu>
              {visibleDetails && <ModalDetalles setVisibleDetails={setVisibleDetails} visibleDetails={visibleDetails}/>}
            </div>
            <div style={{display:'flex', flexDirection:'row', margin:'20px 0'}}>
                <div style={{borderRadius:'10px',display:'flex', flexDirection:'column',border:'1px solid #f50057',backgroundColor:'white', width:'40%', alignItems:'center', padding:'10px 0'}}>
                <LocalGasStationOutlined fontSize='large' style={{fontSize:'60px', color:'#f50057'}}/>
                <h3 className={classes.texto} style={{fontSize:'24px', color:'black'}}>$ {el.gasolina}</h3>
                <h6 className={classes.texto} style={{color:'gray',fontSize:'18px'}}>$ {el.dineroUsado}</h6>
                </div>
                {/* <div style={{display:'flex', flexDirection:'column', width:'60%', alignItems:'center', justifyContent:'center'}}>
                    <h3 className={classes.texto1}>EN PROGRESO</h3>
                </div> */}
            <div style={{display:'flex', flexDirection:'column', width:'60%', justifyContent:'normal', marginLeft:'20px'}}>
                    <section style={{marginBottom:'10px'}}>
                      <h3 className={classes.texto} style={{color:'white', fontSize:'18px', fontWeight:'600',color:'black'}}> Distancia Recorrida</h3>
                      <h3 className={classes.texto} style={{color:'white', fontSize:'16px',fontWeight:'400',color:'black'}}>{el.kilometrosRec} Kilometros</h3>
                    </section>
                    <section style={{ marginBottom:'10px'}}>
                      <h3 className={classes.texto} style={{color:'white', fontSize:'18px', fontWeight:'600',color:'black'}}>Promedio Gasolina</h3>
                      <h3 className={classes.texto} style={{color:'white', fontSize:'16px',fontWeight:'400',color:'black'}}>1gl/{parseFloat(el.galonDi.toFixed(2))} Kms</h3>
                    </section>
                    <section>
                      <h3 className={classes.texto} style={{color:'white', fontSize:'18px', fontWeight:'600',color:'black'}}>Tiempo</h3>
                      <h3 className={classes.texto} style={{color:'white', fontSize:'16px',fontWeight:'400',color:'black'}}> Dia/s</h3>
                    </section>
                </div>
            
            </div>


          </div>
           )
           
          })}
    
         
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
