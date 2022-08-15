import { Box, Menu, MenuItem, Slider} from "@material-ui/core";
import {CalendarToday,LocalGasStationOutlined,MoreVert,} from "@material-ui/icons";
import { useState } from "react";
import useStyles from "./styles";

export default function CardGasolina({el,setVisibleDetails,monthActual}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const marks = [
    {
      value: 0,
      label: 'E',
    },
    {
      value: el.fuelInicialPercentaje,
      label:Math.trunc(el.fuelInicialPercentaje)+ "%",
    },
    {
      value:"50",
      label: el.fuelFinalPercentaje > 40 && el.fuelFinalPercentaje <60 ? null: <LocalGasStationOutlined/>,
    },
    {
      value: el.fuelFinalPercentaje,
      label: Math.trunc(el.fuelFinalPercentaje)+ "%",
    },
    {
      value: 100,
      label: 'F',
    },
  ];
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    event.stopPropagation();
  };
  console.log(el);
  let myDate = new Date(el.fecha).toLocaleDateString()
  console.log(el.fecha);
  let dineroGastado = typeof el.dineroGastado!== 'number' ? el.dineroGastado.toString().replace(/\./g, ""):el.dineroGastado
  let sobrante = dineroGastado - el.dineroUsado
  return(
    <>
    {el.estado !== 'finalizado'?
    <div style={{boxShadow: "rgba(149, 157, 165, 0.8) 0px 8px 10px",backgroundColor:'#f50057', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
    <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
    <section style={{display:'flex', flexDirection:'row'}}>
    <CalendarToday style={{ color:'white', marginRight:'10px'}}/>
    <h3  style={{fontSize:'16px', color:'white', margin:0}}>{myDate}</h3>
    </section>
    <section style={{display:'flex', flexDirection:'row'}}>
    <h5  style={{fontSize:'18px', color:'white', margin:0}}>{el.tipoGasolina}</h5>
    </section>
    </div>
    <div style={{display:'flex', flexDirection:'row', margin:'20px 0'}}>
        <div style={{borderRadius:'10px',display:'flex', flexDirection:'column',backgroundColor:'white', width:'40%', alignItems:'center', padding:'10px 0'}}>
        <LocalGasStationOutlined fontSize='large' style={{fontSize:'60px', color:'#f50057'}}/>
        <h3  style={{fontSize:'24px', color:'black', margin:0}}>${el.dineroGastado.toLocaleString()}</h3>
        <h6  style={{color:'gray',fontSize:'18px', margin:0}}> 1gl /${el.precioGalon.toLocaleString()}</h6>
        </div>
        
    <div style={{display:'flex', flexDirection:'column', width:'60%', justifyContent:'center',alignItems:'center', marginLeft:'20px'}}>
            <h3 style={{marginTop:'5px',  borderRadius:'10px', width:'fit-content', padding:'4px 16px', backgroundColor:'white', textAlign:'center', color:'#f50057', fontSize:'14px', margin:0}}>EN PROGRESO</h3>
        </div>
    
    </div>


  </div>
  :
            <a
            onClick={(e) =>
              setVisibleDetails({ bol: true, id: el._id })
            }
          >
          <div className={classes.containerCard}>
              <div className={classes.containerCard2}>
              <section style={{ display: "flex", flexDirection: "row" }}>
                   <CalendarToday
                    style={{ color: "white", marginRight: "10px", color: "black" }}/>
                   <h3 className={classes.subtitle}>
                     {myDate}
                   </h3>
                 </section>
                 {el.compartida && <h5 className={classes.subtitle}>{el.mes=== monthActual ?"Saldo Mes Anterior":"Tanqueada Compartida"}</h5>}
                  {!el.compartida &&<h5 style={{fontSize:'18px', color:'black', margin:0}}>{el.tipoGasolina}</h5> }
                  
                 
                </div>
                 <div
                style={{ display: "flex", flexDirection: "row", margin: "20px 0" }}
              >
                {/* <div
                  className={classes.containerCard}
                  style={{
                    borderRadius: "10px",
                    width: "40%",
                    alignItems: "center",
                    padding: "10px 0",
                  }}
                > */}
                <Box  spacing={1} direction="row">
                  <Slider
                  style={{color:"#f50057"}}
                  disabled
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={[el.fuelInicialPercentaje, el.fuelFinalPercentaje]}
                    marks={marks}
                  />
                  
                  </Box>

                  {/* <LocalGasStationOutlined
                    fontSize="large"
                    style={{ fontSize: "60px", color: "#f50057" }}
                  />
                  <h3
                    className={classes.texto}
                    style={{ fontSize: "24px", color: "black" }}
                  >
                    $ {el.dineroGastado.toLocaleString()} 
                  </h3>
                  <h6
                    className={classes.texto}
                    style={{
                      color: sobrante > 0 ? "green" : "red",
                      fontSize: "18px",
                    }}
                  >
                      ${sobrante.toLocaleString()}
                  </h6> */}
                {/* </div> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "60%",
                    justifyContent: "normal",
                    marginLeft: "20px",
                  }}
                >
                  <section style={{ marginBottom: "10px" }}>
                    <h3 className={classes.subtitle}> Distancia Recorrida</h3>
                    <h3 className={classes.subtitle2}>
                      {el.kilometrosRecorridos}{" "}
                      Kilometros
                    </h3>
                  </section>
                  <section style={{ marginBottom: "10px" }}>
                    <h3 className={classes.subtitle}>Promedio Gasolina</h3>
                    <h3 className={classes.subtitle2}>
                      {el.galonRecorrido !== undefined && `1gl/${parseFloat(el?.galonRecorrido.toFixed(2))} Kms`}
                    </h3>
                  </section>
                  <section>
                    <h3 className={classes.subtitle}>Tiempo</h3>
                    <h3 className={classes.subtitle2}> {el.dias} Dia/s</h3>
                  </section>
                </div>
                </div>
            </div>
            </a>
  }
    </>
  )

}
  




  // return(
  //     <>
  //          {el !== undefined &&
  // }
  //     </>
  // )
