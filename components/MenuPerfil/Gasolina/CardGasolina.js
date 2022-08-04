import { Menu, MenuItem } from "@material-ui/core";
import {CalendarToday,LocalGasStationOutlined,MoreVert,} from "@material-ui/icons";
import { useState } from "react";
import useStyles from "./styles";

export default function CardGasolina({
  el,
  myDate,
  setVisibleDetails,
  monthActual
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(el);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    event.stopPropagation();
  };
  let restante;
  if(el?.dineroUsado?.length>0){
    if(el.mesInitial === monthActual){
      restante =  el.gastado.replace(/\./g, "")  - Math.trunc(el.dineroUsado[0])
    }else{
      restante =   el.gastado.replace(/\./g, "")  - Math.trunc(el.dineroUsado[1])
    }
    
  }else{
     restante =el?.gastado?.replace(/\./g, "") - el.dineroUsado
  }
console.log(el);
console.log(myDate);
  return(
      <>
           {el !== undefined &&
            <a
            onClick={(e) =>
              setVisibleDetails({ bol: true, id: el.id || el.idDatoCompartido })
            }
          >
          <div className={classes.containerCard}>
              <div className={classes.containerCard2}>
              <section style={{ display: "flex", flexDirection: "row" }}>
                   <CalendarToday
                    style={{ color: "white", marginRight: "10px", color: "black" }}/>
                   <h3 className={classes.subtitle}>
                     {myDate.toLocaleDateString()}
                   </h3>
                 </section>
                 {el.compartido && <h5 className={classes.subtitle}>{el.mesInitial=== monthActual ?"Tanqueada Compartida":"Saldo Mes Anterior"}</h5>}
                 <a onClick={handleClick}>
                  <MoreVert
                     style={{ color: "black", cursor: "pointer", fontSize: "30px" }}
                   />
                 </a>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                   open={Boolean(anchorEl)}
                   onClose={handleClose}
                 >
                   <MenuItem onClick={handleClose}>Editar Tanqueada</MenuItem>
                   <MenuItem onClick={handleClose}>Eliminar Tanqueada</MenuItem>
                 </Menu>
                </div>
                 <div
                style={{ display: "flex", flexDirection: "row", margin: "20px 0" }}
              >
                <div
                  className={classes.containerCard}
                  style={{
                    borderRadius: "10px",
                    width: "40%",
                    alignItems: "center",
                    padding: "10px 0",
                  }}
                >
                  <LocalGasStationOutlined
                    fontSize="large"
                    style={{ fontSize: "60px", color: "#f50057" }}
                  />
                  <h3
                    className={classes.texto}
                    style={{ fontSize: "24px", color: "black" }}
                  >
                    ${el.gastado || el.dineroGastado} 
                  </h3>
                  <h6
                    className={classes.texto}
                    style={{
                      color: restante > 0 ? "green" : "red",
                      fontSize: "18px",
                    }}
                  >
                      ${restante}
                  </h6>
                </div>
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
                      {el.kilometrosRec?.length > 0 
                      ?el.mesInitial === monthActual ? el.kilometrosRec[0]:el.kilometrosRec[1]
                    : el.kilometrosRec}
                        {" "}
                      Kilometros
                    </h3>
                  </section>
                  <section style={{ marginBottom: "10px" }}>
                    <h3 className={classes.subtitle}>Promedio Gasolina</h3>
                    <h3 className={classes.subtitle2}>
                      {`1gl/${parseFloat(el?.galonRecorrido.toFixed(2))} Kms`}
                    </h3>
                  </section>
                  <section>
                    <h3 className={classes.subtitle}>Tiempo</h3>
                    <h3 className={classes.subtitle2}> {el.diasTanqueados} Dia/s</h3>
                  </section>
                </div>
                </div>
            </div>
            </a>}
      </>
  )

//   return (
//     <>
//       <a
//         onClick={(e) =>
//           setVisibleDetails({ bol: true, id: el.id || el.idDatoCompartido })
//         }
//       >
//         <div className={classes.containerCard}>
//           <div className={classes.containerCard2}>
//             <section style={{ display: "flex", flexDirection: "row" }}>
//               <CalendarToday
//                 style={{ color: "white", marginRight: "10px", color: "black" }}
//               />
//               <h3 className={classes.subtitle}>
//                 {myDate.toLocaleDateString()}
//               </h3>
//             </section>
//             {el?.dineroPorDia !== undefined && (
//               <h5 className={classes.subtitle} style={{ color: "#f50057" }}>
//                 Tanqueada Compartida
//               </h5>
//             )}

//             <a onClick={handleClick}>
//               <MoreVert
//                 style={{ color: "black", cursor: "pointer", fontSize: "30px" }}
//               />
//             </a>
//             <Menu
//               id="simple-menu"
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>Editar Tanqueada</MenuItem>
//               <MenuItem onClick={handleClose}>Eliminar Tanqueada</MenuItem>
//             </Menu>
//           </div>

//           <div
//             style={{ display: "flex", flexDirection: "row", margin: "20px 0" }}
//           >
//             <div
//               className={classes.containerCard}
//               style={{
//                 borderRadius: "10px",
//                 width: "40%",
//                 alignItems: "center",
//                 padding: "10px 0",
//               }}
//             >
//               <LocalGasStationOutlined
//                 fontSize="large"
//                 style={{ fontSize: "60px", color: "#f50057" }}
//               />
//               <h3
//                 className={classes.texto}
//                 style={{ fontSize: "24px", color: "black" }}
//               >
//                 $
//                 {el.dineroCompartido !== undefined
//                   ? el.dineroCompartido
//                   : el.gasolina}
//               </h3>
//               <h6
//                 className={classes.texto}
//                 style={{
//                   color: restante > 0 ? "green" : "red",
//                   fontSize: "18px",
//                 }}
//               >
//                   ${el.dineroPorDia !== undefined ? el.dineroPorDia * el.dias[0]:restante > 0 ? `+${restante}` : `${restante}`}
//               </h6>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "60%",
//                 justifyContent: "normal",
//                 marginLeft: "20px",
//               }}
//             >
//               <section style={{ marginBottom: "10px" }}>
//                 <h3 className={classes.subtitle}> Distancia Recorrida</h3>
//                 <h3 className={classes.subtitle2}>
//                   {el.kilometrajeCompartido
//                     ? el.kilometrajeCompartido[0] - el.kilometrajeCompartido[1]
//                     : el.kilometrosRec}{" "}
//                   Kilometros
//                 </h3>
//               </section>
//               <section style={{ marginBottom: "10px" }}>
//                 <h3 className={classes.subtitle}>Promedio Gasolina</h3>
//                 <h3 className={classes.subtitle2}>
//                   {el.galonDi &&
//                     `1gl/${parseFloat(el?.galonDi.toFixed(2))} Kms`}
//                 </h3>
//               </section>
//               <section>
//                 <h3 className={classes.subtitle}>Tiempo</h3>
//                 <h3 className={classes.subtitle2}> Dia/s</h3>
//               </section>
//             </div>
//           </div>
//         </div>
//       </a>
//     </>
//   );
}
