import { useRouter } from "next/router";
import {    Typography, Paper,Button} from "@material-ui/core";
import {  Error } from "@material-ui/icons";

export default function Confirm({confirm}){
    const router = useRouter()

    const {id} = router.query
    return(
        <>
        <Paper style={{display:'flex', width:'300px',flexDirection:'column', height:'fit-content', justifyContent:'center', alignItems:'center', padding:'10px', marginBottom:'10px'}} elevation={3}>
          <div style={{display:'flex', width:'300px',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
          <Error style={{ paddingRight: "10px", color:'#f50057' }} />
          <Typography
            
            style={{ fontSize: "35px", color: "black", fontWeight:'600' }}
          >
            colMotors
          </Typography>

          </div>
          <Typography
            
            style={{marginTop:'10px', fontSize: "16px", color: "gray", fontWeight:'600', textAlign:'center', marginBottom:'10px' }}
          >
            ¡Ya estas a punto de cotizar tus repuestos, confirma y listo!
          </Typography>
          <Button style={{marginBottom:'10px'}} onClick={()=>confirm(id)} variant="contained" color='secondary'>
              Confirmar Cuenta
            </Button>
        </Paper>
         
        
        </>
    )
}