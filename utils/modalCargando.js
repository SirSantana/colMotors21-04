import {Dialog,DialogTitle } from "@material-ui/core";
import { Check } from "@material-ui/icons";


export default function ModalCargando({setVisibleModal, visibleModal, texto}){
    return(
        <>
         <Dialog
        open={open || visibleModal}
        onClose={()=> setVisibleModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
       
      >
        
        <DialogTitle  style={{backgroundColor:'#f50057', color:'white', alignItems:'center'}}  id="alert-dialog-title"> 
        <Check/>
        {texto}
        </DialogTitle>
      </Dialog>
        </>
    )
}