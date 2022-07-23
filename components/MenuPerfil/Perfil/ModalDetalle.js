import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@material-ui/core";
import { BarChartOutlined, LocalGasStationOutlined, OpacityOutlined, PlaceOutlined } from "@material-ui/icons";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function ModalDetalles({setVisibleEdit3, visibleEdit3, vehicule, lugar}){
    return(
        <>
        <Dialog
        open={ visibleEdit3}
        onClose={()=> setVisibleEdit3(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle style={{display:'flex', flexDirection:'row', justifyContent:'center', padding:0}} id="alert-dialog-title">
        <img style={{margin:'0 auto',width:'60px', height:'60px'}} src={`/images/${vehicule?.marca}.png`} alt={vehicule?.marca} />
        
        </DialogTitle>
        <DialogContent >
        <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0'}}>
              <img
              src={'/images/engine.png'}
              alt='engine'
              style={{width:'30px', height:'30px',marginRight:'10px'}}
              />
              <h4 style={{margin:0, color:'gray', fontSize:'18px', fontWeight:'200',marginRight:'76px'}}>Motor</h4>
              <h3 style={{margin:0,fontWeight:'600'}}>{vehicule?.cilindraje}</h3>
              </div>
        <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0'}}>
              <PlaceOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px', marginRight:'10px'}}/>
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200',lineHeight:'18px',marginRight:'80px'}}>Lugar</h4>
              <h3 style={{margin:0, color:'#464646',fontWeight:'600',}}>{lugar}</h3>
              </div>
              
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0' }}>
              <img
              src={'/images/odometro.png'}
              alt='engine'
              style={{width:'30px', height:'30px',marginRight:'10px'}}
              />
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Kilometraje</h4>
              <h4 style={{margin:0,fontSize:'18px', fontWeight:'600'}}>14.000</h4>

              </div>
              <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0'}}>
              <LocalGasStationOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px', marginRight:'10px'}}/>
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200',lineHeight:'18px',marginRight:'58px'}}>Gasolina</h4>
              <h3 style={{margin:0, color:'#464646',fontWeight:'600',}}>$110.000</h3>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0'}}>
              <BarChartOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px', marginRight:'10px'}}/>
              
              <h4 style={{margin:0, color:'gray', fontSize:'18px', fontWeight:'200',marginRight:'30px'}}>Rendimiento</h4>
              <h3 style={{margin:0,fontWeight:'600'}}>90Km</h3>
              </div>
        
              
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0' }}>
              <OpacityOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px', marginRight:'10px'}}/>
              
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>C.Aceite</h4>
              <h4 style={{margin:0,fontSize:'18px', fontWeight:'600'}}>En 1000Km</h4>

              </div>
              
          
        </DialogContent>
        <DialogActions>
          <Button
            onClick={()=> setVisibleEdit3(false)}
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