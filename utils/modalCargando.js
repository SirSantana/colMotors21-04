import {Dialog,DialogTitle, Button } from "@material-ui/core";
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
        <div  style={{display:'flex', padding:'20px', backgroundColor:'#f50057',flexDirection:'column', color:'white', alignItems:'center', justifyContent:'center'}} >
        <Check fontSize='large' style={{marginTop:'20px'}} />
        <h3 id="alert-dialog-title" style={{fontSize:'16px', fontWeight:'500', textAlign:'center'}}> 
        {texto}
        </h3>
        <Button onClick={()=>setVisibleModal(false)} variant='contained' style={{backgroundColor:'white', color:'#f50057'}}>
          Cotizar
        </Button>
        </div>

        
      </Dialog>
        </>
    )
}