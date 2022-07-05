import { Button, Divider,  } from "@material-ui/core";
import { AddAPhoto, ArrowBackIos,Menu} from "@material-ui/icons";
import { useState } from "react";
import AssestsUser from "../../../utils/assetsUserPerfil";
import Modal from "./Modal";
import useStyles from "./stylesCliente";
import Image from 'next/image'

export default function Vehiculos({vehicule, owner}){
  const classes = useStyles();
  const [visibleEdit, setVisibleEdit] = useState(false)
  console.log(vehicule);

    return(
        <>
        <div className={classes.containerVehiculos}>

        <div className={classes.container5}>
          <ArrowBackIos fontSize='large'/>
          <img style={{marginLeft:'10px', width:'50px', height:'50px'}} src={`/images/Mazda.png`} alt={vehicule?.marca} />
          <Menu style={{marginRight:'20px'}} fontSize='large'/>
          </div>
          <h2 className={classes.texto3} style={{marginLeft:'20px', marginBottom:'20px', color:'white', fontSize:'28px'}}>Vehiculos</h2>
          
          <div className={classes.container7}>
              <div className={classes.container6}>
              <img src={'/images/carro2.jpg'} alt='/images/carro2.jpg' className={classes.img2}/>
           {/* <div className={classes.div2}>
           <AddAPhoto className={classes.icon}/>
           <Button onClick={()=> setVisibleEdit(true)} style={{margin:'0 auto 15% auto',  width:'180px'}} variant="contained">
              Agregar Imagen
            </Button>
           </div> */}


              <div className={classes.div1}>
                <section style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <h3 className={classes.texto} style={{marginTop:'10px', marginLeft:'20px',color:'#464646', fontSize:'28px'}}>Mazda 2</h3>
              {/* <Button onClick={()=> setVisibleEdit(true)} variant='outlined' color='secondary' style={{height:'30px', marginLeft:'10px'}}>Agregar Referencia</Button> */}

                </section>

              {/* <FavoriteOutlined fontSize='large' style={{color:'#f50057',backgrounColor:'#f50057', marginLeft:'85%', marginTop:'-20px'}}/> */}
                {/* <h3 className={classes.texto2} style={{marginTop:'0px'}}>Agregar Modelo</h3> */}
                <Button onClick={()=> setVisibleEdit(true)} variant='outlined' color='secondary' style={{height:'30px', marginLeft:'10px'}}>Agregar Modelo</Button><br/> 
                <Button onClick={()=> setVisibleEdit(true)} variant='outlined' color='secondary' style={{height:'30px', margin:'10px 0 10px 10px'}}>Agregar Cilindraje</Button>
                
                {/* <h5 className={classes.texto4} >210.000Km</h5> */}
            {/* <Divider style={{backgroundColor:'gray', height:'3px', width:'95%', marginLeft:'auto', marginRight:'auto'}}/> */}
            {/* <h3 className={classes.texto2} style={{marginTop:'10px'}}>Velocidad Maxima:</h3>
                <h4 className={classes.texto3} style={{fontSize:'26px'}}>Mejoras:</h4>
                <h5 className={classes.texto4} >Repuestos Cambiados:</h5> */}
              </div>
              </div>


              <div className={classes.container8}>
              <AssestsUser setVisibleEdit={setVisibleEdit} image={'/images/editData'} text={'Editar Auto'}/>
              <AssestsUser image={"icono"} text={'Nuevos Repuestos'}/>
              <AssestsUser image={"icono"} text={'Nuevo Auto'}/>

              </div>
              {visibleEdit && <Modal visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit} owner={owner}/>}
              </div> 
        </div>

        </>
    )
}