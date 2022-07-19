import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@material-ui/core";
import { useState } from "react";
import Image from 'next/image'
import useStyles from "./styles";
import { useTheme } from "@material-ui/styles";
import { LocalGasStationOutlined } from "@material-ui/icons";


export default function ModalViewVehicule({ visibleEdit, setVisibleEdit1, setVisibleEdit, owner }) {
  const [marcaa, setMarca] = useState(null);
  const classes = useStyles()
  const [image, setImage] = useState(null)
  const theme = useTheme();


  return (
    <div>
      <Dialog
        open={open || visibleEdit}
        onClose={()=> setVisibleEdit1(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle  id="alert-dialog-title">Para nosotros es muy importante mejorar</DialogTitle>
        <DialogContent >
          <DialogContentText style={{lineHeight:'18px'}} id="alert-dialog-description">
            Hemos creado la posibilidad que puedas agregar la imagen de tu carro, y mas detalles. Adelante!
            
          </DialogContentText>
         
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            
          <LocalGasStationOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px', marginRight:'10px'}}/>
          <h4 style={{fontWeight:'400'}}>Gasolina</h4>
          </div>

          
        </DialogContent>
        <DialogActions style={{display:'flex', flexDirection:'column'}}>
          <Button
            onClick={()=> setVisibleEdit1(true)}
            variant="contained"
            autoFocus
            color="secondary"
            fullWidth
            style={{marginBottom:'10px'}}
          >
            Editar 
          </Button>
          <Button style={{margin:'0px'}} onClick={()=> setVisibleEdit(false)} variant="outlined" color='secondary' fullWidth>
            Editar Mas Tarde
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
