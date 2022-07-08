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
        <div  style={{display:'flex',  backgroundColor:'#f50057',flexDirection:'column', color:'white', alignItems:'center', justifyContent:'center'}} >
        <Check fontSize='large' style={{marginTop:'20px'}} />
        <DialogTitle  id="alert-dialog-title"> 
        {texto}
        </DialogTitle>
        </div>

        
      </Dialog>
        </>
    )
}