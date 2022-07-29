import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@material-ui/core";
import { BarChartOutlined, LocalGasStationOutlined, OpacityOutlined, PlaceOutlined } from "@material-ui/icons";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function ModalDetalles({id, setVisibleDetails, visibleDetails, parciales}){
  console.log(parciales);
  console.log(id);
  const res = parciales.find(el=> el.id === id)
  console.log(res);
    return(
        <>
        {res!== undefined &&
        
        <Dialog
        open={visibleDetails.bol}
        onClose={()=> setVisibleDetails({bol:false, id:id})}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', padding:10}} id="alert-dialog-title">
      <LocalGasStationOutlined fontSize="large" style={{color:'#f50057',margin:'0 auto'}}/>  
        <h4 style={{margin:'0'}}>Detalle Consumo  </h4>   
        </DialogTitle>
        <DialogContent >
        
        <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
              <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Porcentaje Tanque Inicial</h3>
              <h4 style={{margin:0,fontWeight:'600'}}>{res.fuelInicial}%</h4>
              </div>
        <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Tanque Final</h3>
              <h4 style={{margin:0, color:'#464646',fontWeight:'600',}}>{Math.trunc(res.fuelFinalPercentaje)}%</h4>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Comprado</h3>
              <h4 style={{margin:0,fontSize:'18px', fontWeight:'600'}}>{Math.trunc(res.fuelComprado)}%</h4>
              </div>
              <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Valor Tanqueada</h3>
              <h4 style={{margin:0, color:'#464646',fontWeight:'600',}}>$ {res.gasolina}</h4>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
              <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Valor Usado</h3>
              <h4 style={{margin:0,fontWeight:'600'}}>$ {res.dineroUsado}</h4>
              </div>
        
              
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Kilometros Recorridos</h3>
              <h4 style={{margin:0, fontWeight:'600'}}>{res.kilometrosRec} Kms</h4>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Precio por Kilometro</h3>
              <h4 style={{margin:0, fontWeight:'600'}}>$ {parseFloat((res.precioKm).toFixed(2))}</h4>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Galones Tanqueados</h3>
              <h4 style={{margin:0, fontWeight:'600'}}>{res.galones}</h4>
              </div>
          
        </DialogContent>
        <DialogActions>
          <Button
            onClick={()=> setVisibleDetails({bol:false, id:id})}
            variant="contained"
            autoFocus
            color="secondary"
            fullWidth
          >
            Regresar
          </Button>
          
        </DialogActions>
        </Dialog>}
        </>
    )
}