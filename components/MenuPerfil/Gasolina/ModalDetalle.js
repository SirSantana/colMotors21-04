import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@material-ui/core";
import { BarChartOutlined, LocalGasStationOutlined, OpacityOutlined, PlaceOutlined } from "@material-ui/icons";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function ModalDetalles({setVisibleDetails, visibleDetails}){
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