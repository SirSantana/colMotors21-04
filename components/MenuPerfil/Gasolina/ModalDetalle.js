import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@material-ui/core";
import { BarChartOutlined, LocalGasStationOutlined, OpacityOutlined, PlaceOutlined } from "@material-ui/icons";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function ModalDetalles({setVisibleDetails, visibleDetails, parciales}){
  console.log(parciales);
    return(
        <>
        <Dialog
        open={visibleDetails}
        onClose={()=> setVisibleDetails(false)}
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
              <h4 style={{margin:0,fontWeight:'600'}}>{parciales[0].fuelInicial}%</h4>
              </div>
        <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Tanque Final</h3>
              <h4 style={{margin:0, color:'#464646',fontWeight:'600',}}>{Math.trunc(parciales[0].fuelFinalPercentaje)}%</h4>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Porcentaje Comprado</h3>
              <h4 style={{margin:0,fontSize:'18px', fontWeight:'600'}}>{Math.trunc(parciales[0].fuelComprado)}%</h4>
              </div>
              <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px'}}>Valor Tanqueada</h3>
              <h4 style={{margin:0, color:'#464646',fontWeight:'600',}}>$ {parciales[0].gasolina}</h4>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between'}}>
              <h3 style={{margin:0, color:'gray', fontSize:'16px', fontWeight:'200'}}>Valor Usado</h3>
              <h4 style={{margin:0,fontWeight:'600'}}>$ {parciales[0].dineroUsado}</h4>
              </div>
        
              
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Kilometros Recorridos</h3>
              <h4 style={{margin:0, fontWeight:'600'}}>{parciales[0].kilometrosRec} Kms</h4>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Precio por Kilometro</h3>
              <h4 style={{margin:0, fontWeight:'600'}}>$ {parciales[0].precioKm}</h4>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0', justifyContent:'space-between' }}>
              <h3 style={{margin:0, color:'gray',fontSize:'16px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Galones Tanqueados</h3>
              <h4 style={{margin:0, fontWeight:'600'}}>{parciales[0].galones}</h4>
              </div>
          
        </DialogContent>
        <DialogActions>
          <Button
            onClick={()=> setVisibleDetails(false)}
            variant="contained"
            autoFocus
            color="secondary"
            fullWidth
          >
            Regresar
          </Button>
          
        </DialogActions>
        </Dialog>
        </>
    )
}