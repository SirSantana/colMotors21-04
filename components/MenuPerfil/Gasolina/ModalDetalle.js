import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Slide } from "@material-ui/core";
import { BarChartOutlined, Edit, LocalGasStationOutlined, OpacityOutlined, PhotoSizeSelectLargeTwoTone, PlaceOutlined } from "@material-ui/icons";
import { forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function ModalDetalles({setIdPost,detailsTanqueada,setEdit, setVisibleEdit, setVisibleDetails, visibleDetails}){
  const [litros, setLitros] = useState(false)
  const handleSend=()=>{
    setIdPost(detailsTanqueada._id),
     setVisibleEdit(true),
      setEdit(true)
  }
  console.log(detailsTanqueada);
  
  return(
    <>
    
    <Dialog
      open={visibleDetails.bol}
      onClose={()=> setVisibleDetails({bol:false, id:detailsTanqueada._id})}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      TransitionComponent={Transition}
      keepMounted
    >
           <DialogTitle style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', padding:10}} id="alert-dialog-title">
     <LocalGasStationOutlined fontSize="large" style={{color:'#f50057',margin:'0 auto'}}/>  
       <h4 style={{margin:'0'}}>{!detailsTanqueada.compartida ?" Detalle Consumo ":"Detalle Consumo Compartido" }</h4>   
       </DialogTitle>
            <DialogContent >
       
       <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Valor Tanqueada</h3>
             <h4 style={{margin:0, color:'#464646',fontWeight:'600',}}>$ {detailsTanqueada.dineroGastado.toLocaleString()}</h4>
             </div>
             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
             <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Valor Usado Total</h3>
             <h4 style={{margin:0,fontWeight:'600'}}>$ {detailsTanqueada.dineroUsado.toLocaleString()}</h4>
             </div>
             
          <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Kilometros Recorridos Total</h3>
             <h4 style={{margin:0, fontWeight:'600'}}>{detailsTanqueada.kilometrosRecorridos} Kms</h4>
             </div>
             
             <Divider style={{color:'black', height:'2px'}}/>
             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Precio Galon <a onClick={handleSend}><Edit fontSize='small' style={{cursor:'pointer'}}/></a></h3>
             <h4 style={{margin:0, fontWeight:'600'}}>${detailsTanqueada.precioGalon}</h4>
             </div>
             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Tipo Combustible <a onClick={handleSend}><Edit fontSize='small' style={{cursor:'pointer'}}/></a></h3>
             <h4 style={{margin:0, fontWeight:'600'}}>{detailsTanqueada.tipoGasolina}</h4>
             </div>
             <Divider style={{color:'black', height:'2px'}}/>

       <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
             <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Porcentaje Tanque Inicial</h3>
             <h4 style={{margin:0,fontWeight:'600'}}>{detailsTanqueada.fuelInicialPercentaje}%</h4>
             </div>
       <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Tanque Final</h3>
             <h4 style={{margin:0,fontWeight:'600',}}>{Math.trunc(detailsTanqueada.fuelFinalPercentaje)}%</h4>
             </div>
        <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Comprado</h3>
             <h4 style={{margin:0, fontWeight:'600'}}>{Math.trunc(detailsTanqueada.fuelComprado)}%</h4>
             </div>
             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Usado</h3>
             <h4 style={{margin:0, fontWeight:'600'}}>{Math.trunc(detailsTanqueada.fuelPercentajeUsado )}%</h4>
             </div>
             <Divider style={{color:'black', height:'2px'}}/>

                      <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Precio por Kilometro</h3>
           <h4 style={{margin:0, fontWeight:'600'}}>$ {parseFloat((detailsTanqueada.precioKm).toFixed(2))}</h4>
             </div>

            <div onClick={()=> setLitros(litros ? false: true)} style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>{litros ?"Litros Tanqueados" :"Galones Tanqueados"}</h3>
             <h4 style={{margin:0, fontWeight:'600'}}>{litros ? parseFloat((detailsTanqueada.galones * 3.7).toFixed(2))+ " lt": parseFloat((detailsTanqueada.galones).toFixed(2)) + " gl"}</h4>
             </div>
             <div onClick={()=> setLitros(litros ? false: true)} style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>{litros ?"Litros Usados" :"Galones Usados"}</h3>
             <h4 style={{margin:0, fontWeight:'600'}}>{litros? parseFloat((detailsTanqueada.galonesUsados * 3.7).toFixed(2))+ " lt": detailsTanqueada.galonesUsados + ' gl'}</h4>
             </div>
           <DialogActions>
         <Button
           onClick={()=> setVisibleDetails({bol:false,id:detailsTanqueada._id})}
           variant="contained"
           autoFocus
           color="secondary"
           fullWidth
         >
           Regresar
         </Button>
         <Button
           onClick={handleSend}
           variant="outlined"
           autoFocus
           color="secondary"
         fullWidth
         >
           Editar
         </Button>
        
        
       </DialogActions>
        
       </DialogContent>
      </Dialog>
    </>
  )

  // if(dataCom !== undefined && id === dataCom.idDatoCompartido){
  //   let date = new Date(dataCom.fecha);
  //   let mes = date.getMonth()
  //   return(
  //     <>
  //     <Dialog
  //     open={visibleDetails.bol}
  //     onClose={()=> setVisibleDetails({bol:false, id:id})}
  //     aria-labelledby="alert-dialog-title"
  //     aria-describedby="alert-dialog-description"
  //     TransitionComponent={Transition}
  //     keepMounted
  //   >
  //     <DialogTitle style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', padding:10}} id="alert-dialog-title">
  //   <LocalGasStationOutlined fontSize="large" style={{color:'#f50057',margin:'0 auto'}}/>  
  //     <h4 style={{margin:'0'}}>Detalle Consumo Compartido </h4>   
  //     </DialogTitle>
  //     <DialogContent >
  //     <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Valor Tanqueada {dataCom.diasTotales} Dias</h3>
  //             <h4 style={{margin:0, color:'#464646',fontWeight:'600',}}>$ {dataCom.dineroCompartido}</h4>
  //             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
  //             <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Valor Usado { mes === month ? dataCom.dias[1]:dataCom.dias[0] } Dias</h3>
  //             <h4 style={{margin:0,fontWeight:'600'}}>${mes === month ? dataCom.dineroPorDia * dataCom.dias[1]:dataCom.dineroPorDia * dataCom.dias[0]}</h4>
  //             </div>
  //           <Divider style={{color:'black', height:'2px'}}/>
  //     <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Valor Tanqueada</h3>
  //           <h4 style={{margin:0, color:'#464646',fontWeight:'600',}}>$ {copiaParciales.gasolina}</h4>
  //           </div>
  //           <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
  //           <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Valor Usado</h3>
  //           <h4 style={{margin:0,fontWeight:'600'}}>$ {copiaParciales.dineroUsado}</h4>
  //           </div>
  //           <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Kilometros Recorridos</h3>
  //           <h4 style={{margin:0, fontWeight:'600'}}>{copiaParciales.kilometrosRec} Kms</h4>
  //           </div>
  //           <Divider style={{color:'black', height:'2px'}}/>
  //           <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Precio Galon <a onClick={handleSend}><Edit fontSize='small' style={{cursor:'pointer'}}/></a></h3>
  //           <h4 style={{margin:0, fontWeight:'600'}}>${copiaParciales.precioGalon}</h4>
  //           </div>
  //           <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Tipo Combustible <a onClick={handleSend}><Edit fontSize='small' style={{cursor:'pointer'}}/></a></h3>
  //           <h4 style={{margin:0, fontWeight:'600'}}>{copiaParciales.tipoCombustible}</h4>
  //           </div>
  //           <Divider style={{color:'black', height:'2px'}}/>

  //     <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
  //           <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Porcentaje Tanque Inicial</h3>
  //           <h4 style={{margin:0,fontWeight:'600'}}>{copiaParciales.fuelInicial}%</h4>
  //           </div>
  //     <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Tanque Final</h3>
  //           <h4 style={{margin:0,fontWeight:'600',}}>{Math.trunc(copiaParciales.fuelFinalPercentaje)}%</h4>
  //           </div>
  //           <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Comprado</h3>
  //           <h4 style={{margin:0, fontWeight:'600'}}>{Math.trunc(copiaParciales.fuelComprado)}%</h4>
  //           </div>
  //           <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Usado</h3>
  //           <h4 style={{margin:0, fontWeight:'600'}}>{Math.trunc(copiaParciales.fuelPercentajeUsado)}%</h4>
  //           </div>
  //           <Divider style={{color:'black', height:'2px'}}/>
            
  //           <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Precio por Kilometro</h3>
  //           <h4 style={{margin:0, fontWeight:'600'}}>$ {parseFloat((copiaParciales.precioKm).toFixed(2))}</h4>
  //           </div>

  //           <div onClick={()=> setLitros(litros ? false: true)} style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>{litros ?"Litros Tanqueados" :"Galones Tanqueados"}</h3>
  //           <h4 style={{margin:0, fontWeight:'600'}}>{litros ? parseFloat((copiaParciales.galones * 3.7).toFixed(2))+ " lt": parseFloat((copiaParciales.galones).toFixed(2)) + " gl"}</h4>
  //           </div>
  //           <div onClick={()=> setLitros(litros ? false: true)} style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //           <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>{litros ?"Litros Usados" :"Galones Usados"}</h3>
  //           <h4 style={{margin:0, fontWeight:'600'}}>{litros ? parseFloat((copiaParciales.galonesUsados * 3.7).toFixed(2))+ " lt": parseFloat((copiaParciales.galonesUsados).toFixed(2)) + " gl"}</h4>
  //           </div>
            
        
  //     </DialogContent>
  //     <DialogActions>
  //       <Button
  //         onClick={()=> setVisibleDetails({bol:false, id:id})}
  //         variant="contained"
  //         autoFocus
  //         color="secondary"
  //         fullWidth
  //       >
  //         Regresar
  //       </Button>
  //       <Button
  //         onClick={handleSend}
  //         variant="outlined"
  //         autoFocus
  //         color="secondary"
  //         fullWidth
  //       >
  //         Editar
  //       </Button>
        
        
  //     </DialogActions>
  //     </Dialog>
  //     </>
  //   )
  // }

  // console.log(parciales);
  // const res = parciales.find(el=> el.id === id)
  // console.log(res);
  
  //   return(
  //       <>
  //       {res!== undefined &&
        
  //       <Dialog
  //       open={visibleDetails.bol}
  //       onClose={()=> setVisibleDetails({bol:false, id:id})}
  //       aria-labelledby="alert-dialog-title"
  //       aria-describedby="alert-dialog-description"
  //       TransitionComponent={Transition}
  //       keepMounted
  //     >
  //       <DialogTitle style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', padding:10}} id="alert-dialog-title">
  //     <LocalGasStationOutlined fontSize="large" style={{color:'#f50057',margin:'0 auto'}}/>  
  //       <h4 style={{margin:'0'}}>Detalle Consumo </h4>   
  //       </DialogTitle>
  //       <DialogContent >
  //       <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Valor Tanqueada</h3>
  //             <h4 style={{margin:0, color:'#464646',fontWeight:'600',}}>$ {res.gasolina}</h4>
  //             </div>
  //             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
  //             <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Valor Usado</h3>
  //             <h4 style={{margin:0,fontWeight:'600'}}>$ {res.dineroUsado}</h4>
  //             </div>
  //             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Kilometros Recorridos</h3>
  //             <h4 style={{margin:0, fontWeight:'600'}}>{res.kilometrosRec} Kms</h4>
  //             </div>
  //             <Divider style={{color:'black', height:'2px'}}/>
  //             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Precio Galon <a onClick={handleSend}><Edit fontSize='small' style={{cursor:'pointer'}}/></a></h3>
  //             <h4 style={{margin:0, fontWeight:'600'}}>${res.precioGalon}</h4>
  //             </div>
  //             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Tipo Combustible <a onClick={handleSend}><Edit fontSize='small' style={{cursor:'pointer'}}/></a></h3>
  //             <h4 style={{margin:0, fontWeight:'600'}}>{res.tipoCombustible}</h4>
  //             </div>
  //             <Divider style={{color:'black', height:'2px'}}/>

  //       <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
  //             <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Porcentaje Tanque Inicial</h3>
  //             <h4 style={{margin:0,fontWeight:'600'}}>{res.fuelInicial}%</h4>
  //             </div>
  //       <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Tanque Final</h3>
  //             <h4 style={{margin:0,fontWeight:'600',}}>{Math.trunc(res.fuelFinalPercentaje)}%</h4>
  //             </div>
  //             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Comprado</h3>
  //             <h4 style={{margin:0, fontWeight:'600'}}>{Math.trunc(res.fuelComprado)}%</h4>
  //             </div>
  //             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Usado</h3>
  //             <h4 style={{margin:0, fontWeight:'600'}}>{Math.trunc(res.fuelPercentajeUsado)}%</h4>
  //             </div>
  //             <Divider style={{color:'black', height:'2px'}}/>
              
  //             <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Precio por Kilometro</h3>
  //             <h4 style={{margin:0, fontWeight:'600'}}>$ {parseFloat((res.precioKm).toFixed(2))}</h4>
  //             </div>

  //             <div onClick={()=> setLitros(litros ? false: true)} style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>{litros ?"Litros Tanqueados" :"Galones Tanqueados"}</h3>
  //             <h4 style={{margin:0, fontWeight:'600'}}>{litros ? parseFloat((res.galones * 3.7).toFixed(2))+ " lt": parseFloat((res.galones).toFixed(2)) + " gl"}</h4>
  //             </div>
  //             <div onClick={()=> setLitros(litros ? false: true)} style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
  //             <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>{litros ?"Litros Usados" :"Galones Usados"}</h3>
  //             <h4 style={{margin:0, fontWeight:'600'}}>{litros ? parseFloat((res.galonesUsados * 3.7).toFixed(2))+ " lt": parseFloat((res.galonesUsados).toFixed(2)) + " gl"}</h4>
  //             </div>
              
          
  //       </DialogContent>
  //       <DialogActions>
  //         <Button
  //           onClick={()=> setVisibleDetails({bol:false, id:id})}
  //           variant="contained"
  //           autoFocus
  //           color="secondary"
  //           fullWidth
  //         >
  //           Regresar
  //         </Button>
  //         <Button
  //           onClick={handleSend}
  //           variant="outlined"
  //           autoFocus
  //           color="secondary"
  //           fullWidth
  //         >
  //           Editar
  //         </Button>
          
          
  //       </DialogActions>
  //       </Dialog>}
    //     </>
    // )
}