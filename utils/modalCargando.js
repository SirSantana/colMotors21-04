import {Dialog,DialogTitle, Button } from "@material-ui/core";
import { AddAlert, AddAlertOutlined, Check, CheckBoxOutlined, Error} from "@material-ui/icons";
import { useRef } from "react";


export default function ModalCargando({setVisibleModal,active, visibleModal, texto,error}){
  const radioGroupRef = useRef(null);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };  
  
  return(
        <>
         <Dialog
        open={ visibleModal}
        // onClose={()=> setVisibleModal(false)}
        TransitionProps={{ onEntering: handleEntering }}

      >
        <div  style={{display:'flex', padding:'20px', backgroundColor:'#f50057',flexDirection:'column', color:'white', alignItems:'center', justifyContent:'center'}} >
                
        {error 
        ? <Error fontSize="large" style={{marginTop:'20px' }} />
        :<Check fontSize='large' style={{marginTop:'20px'}} />
        }
        <h3 id="alert-dialog-title" style={{fontSize:'16px', fontWeight:'500', textAlign:'center'}}> 
        {texto}
        </h3>
       {active && 
        <Button onClick={()=>setVisibleModal(false)} variant='contained' style={{backgroundColor:'white', color:'#f50057'}}>
        Cotizar
      </Button>
      }{error && 
        <Button onClick={()=>setVisibleModal(false)} variant='contained' style={{backgroundColor:'white', color:'#f50057'}}>
        Regresar
      </Button>
      }
        </div>

        
      </Dialog>
        </>
    )
}