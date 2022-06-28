import { Button, Divider } from "@material-ui/core";
import { AddAPhoto } from "@material-ui/icons";
import AssestsUser from "../../../utils/assetsUserPerfil";
import useStyles from "./stylesCliente";


export default function Vehiculos({userMarca}){
  const classes = useStyles();

    return(
        <>
        <div className={classes.container5}>
            <h3 className={classes.texto5} style={{fontSize:'20px'}}>Vehiculos</h3>
          </div>
          
          <div className={classes.container7}>
              <div className={classes.container6}>
              {/* <img src={'/images/carro2.jpg'} alt='/images/carro2.jpg' className={classes.img2}/> */}
           <div className={classes.div2}>
           <AddAPhoto className={classes.icon}/>
           <Button style={{margin:'0 auto 15% auto',  width:'180px'}} variant="contained">
              Agregar Imagen
            </Button>
           </div>


              <div className={classes.div1}>
              {/* <FavoriteOutlined fontSize='large' style={{color:'#f50057',backgrounColor:'#f50057', marginLeft:'85%', marginTop:'-20px'}}/> */}
                <h3 className={classes.texto2} style={{marginTop:'10px'}}>2008</h3>
                <h4 className={classes.texto3} style={{fontSize:'26px'}}>{userMarca}</h4>
                <h5 className={classes.texto4} >210.000Km</h5>
            <Divider style={{backgroundColor:'gray', height:'3px', width:'95%', marginLeft:'auto', marginRight:'auto'}}/>
            <h3 className={classes.texto2} style={{marginTop:'10px'}}>Velocidad Maxima:</h3>
                <h4 className={classes.texto3} style={{fontSize:'26px'}}>Mejoras:</h4>
                <h5 className={classes.texto4} >Repuestos Cambiados:</h5>
              </div>
              </div>


              <div className={classes.container8}>
              <AssestsUser image={'/images/editData'} text={'Editar Auto'}/>
              <AssestsUser image={"icono"} text={'Nuevos Repuestos'}/>
              <AssestsUser image={"icono"} text={'Nuevo Auto'}/>

              </div>
            
              </div> 
        </>
    )
}