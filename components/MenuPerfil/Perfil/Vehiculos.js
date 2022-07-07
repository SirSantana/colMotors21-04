import { Avatar, Button, CardMedia, Divider } from "@material-ui/core";
import { AddAPhoto, ArrowBackIos, Menu } from "@material-ui/icons";
import { useState } from "react";
import AssestsUser from "../../../utils/assetsUserPerfil";
import Modal from "./Modal";
import useStyles from "./stylesCliente";
import Image from 'next/image'
import ModalViewVehicule from "./ModalViewVehicule";

export default function Vehiculos({vehicule, owner}){
  const classes = useStyles();
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleEdit1, setVisibleEdit1] = useState(false)

  console.log(vehicule);

    return(
        <>

        <div className={classes.conta1}>
          <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
              <ArrowBackIos fontSize='large'/>
              <img style={{marginLeft:'10px', width:'80px', height:'80px'}} src={`/images/${vehicule?.marca}.png`} alt={vehicule?.marca} />
              <Menu fontSize='large'/>
          </div>
          <div>
          <div style={{ borderRadius:'10px', }}>

              <img src={'/images/carro2.jpg'} alt='/images/carro2.jpg' className={classes.img2} style={{borderRadius:'10px 0 0 0'}}/>

            <div style={{paddingTop:0, }}>
            <h4 style={{margin:0, fontSize:'18px', color:'gray',fontSize:'18px', fontWeight:'400'}}>2010
            
            <h2 style={{margin:0, fontSize:'30px', color:'#464646',padding:0, lineHeight:'20px',fontWeight:'600'}}>Mazda 2</h2>
            </h4>
            

            </div>
            <div style={{display:'flex', flexDirection:'row', padding:'20px 0', gap:'20px', justifyContent:'center'}}>
              
              <div style={{display:'flex', alignItems:'center',flexDirection:'column',marginRight:'10px', width:'30%', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
              <img
              src={'/images/engine.png'}
              alt='engine'
              style={{width:'30px', height:'30px',}}
              />
              <h4 style={{margin:0, color:'gray', fontSize:'18px', fontWeight:'400'}}>Motor</h4>
              <h3 style={{margin:0,fontWeight:'600'}}>1500</h3>
              </div>
              
              <div style={{display:'flex', alignItems:'center',flexDirection:'column',marginRight:'10px', width:'30%', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
              {/* <img
              src={'/images/odometro.png'}
              alt='engine'
              style={{width:'30px', height:'30px',}}
              /> */}
              <Avatar alt={'name'}>M</Avatar>
              <h4 style={{margin:0, color:'gray', fontSize:'18px', fontWeight:'400'}}>Dueño</h4>
              <h3 style={{margin:0,fontWeight:'600', textAlign:'center', lineHeight:'18px'}}>Miguel Salazar</h3>
              </div>
              
              <div style={{display:'flex',  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",flexDirection:'column', alignItems:'center',borderRadius:'10px',width:'30%', color:'white',width:'30%', height:'80px'}}>
              <img
              src={'/images/yearIcon.png'}
              alt='engine'
              style={{width:'30px', height:'30px',}}
              />
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'400'}}>Modelo</h4>
              <h3 style={{margin:0, color:'#464646',fontWeight:'600'}}>2020</h3>
              </div>
              
            </div>
           
            </div>
          </div>
         <div>
         <div className={classes.container8} style={{width:'100%', color:'white', padding:'0px', margin:'auto', display:'flex', flexDirection:'row'}}>
              <AssestsUser image={"icono"} text={'Nuevos Repuestos'}/>
              <AssestsUser setVisibleEdit={setVisibleEdit} image={'/images/editData'} text={'Editar Auto'}/>
              <AssestsUser image={"icono"} text={'Nuevo Auto'}/>

              </div>
        </div>
          </div> 
       


        {/* <div className={classes.container5}>
            <h3 className={classes.texto5} style={{fontSize:'20px'}}>Vehiculos</h3>
          </div>
          
          <div className={classes.container7}>
              <div className={classes.container6}>
                
           
           {vehicule?.imagen ? 
           <img
           className={classes.img2}
           src={vehicule?.imagen}
           alt='imagen Vehiculo'
         />
         :
            <>
            <div className={classes.div2}>
             <AddAPhoto className={classes.icon}/>
           <Button onClick={()=> setVisibleEdit(true)} style={{margin:'0 auto 15% auto',  width:'180px'}} variant="contained">
               Agregar Imagen
             </Button>
             </div>
            </>
          } */}


              {/* <div className={classes.div1}>
                <section style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <img style={{marginLeft:'10px', width:'50px', height:'50px'}} src={`/images/${vehicule?.marca}.png`} alt={vehicule?.marca} />
              
              {vehicule?.referencia
              ? <h2 style={{margin:'0 0 0 10px'}}>{vehicule?.referencia}</h2>
              :<Button onClick={()=> setVisibleEdit(true)} variant='outlined' color='secondary' style={{height:'30px', marginLeft:'10px'}}>Agregar Referencia</Button>}
              

                </section> */}

              {/* <FavoriteOutlined fontSize='large' style={{color:'#f50057',backgrounColor:'#f50057', marginLeft:'85%', marginTop:'-20px'}}/> */}
                {/* {vehicule?.modelo ?
                <h4 style={{margin:'0 0 0 10px'}}>{vehicule?.modelo}</h4>
              :
              <Button onClick={()=> setVisibleEdit(true)} variant='outlined' color='secondary' style={{height:'30px', marginLeft:'10px'}}>Agregar Modelo</Button> 
              
              }

              {vehicule?.cilindraje ?
              
              <h4 style={{margin:'0 0 0 10px'}}>{vehicule?.cilindraje}</h4>
              :
            <Button onClick={()=> setVisibleEdit(true)} variant='outlined' color='secondary' style={{height:'30px', margin:'10px 0 10px 10px'}}>Agregar Cilindraje</Button>
            
            }                
                <h5 className={classes.texto4} >210.000Km</h5> */}
            {/* <Divider style={{backgroundColor:'gray', height:'3px', width:'95%', marginLeft:'auto', marginRight:'auto'}}/>
            <h3 className={classes.texto2} style={{marginTop:'10px'}}>Velocidad Maxima:</h3>
                <h4 className={classes.texto3} style={{fontSize:'26px'}}>Mejoras:</h4>
                <h5 className={classes.texto4} >Repuestos Cambiados:</h5> */}
              {/* </div>
              </div>


              <div className={classes.container8}>
              <AssestsUser setVisibleEdit={setVisibleEdit} image={'/images/editData'} text={'Editar Auto'}/>
              <AssestsUser image={"icono"} text={'Nuevos Repuestos'}/>
              <AssestsUser image={"icono"} text={'Nuevo Auto'}/>

              </div>
              
              </div>  */}
              {visibleEdit && <ModalViewVehicule visibleEdit={visibleEdit} setVisibleEdit1={setVisibleEdit1} setVisibleEdit={setVisibleEdit} owner={owner}/>}
              {visibleEdit1 && <Modal visibleEdit1={visibleEdit1} setVisibleEdit1={setVisibleEdit1} idVehicule={vehicule._id} owner={owner}/>}
        </>
    )
}