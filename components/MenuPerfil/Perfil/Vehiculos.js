import { Avatar, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from "@material-ui/core";
import { AddAPhoto, ArrowBackIos, Favorite, LocationCity, Menu, Place } from "@material-ui/icons";
import { useEffect, useState } from "react";
import AssestsUser from "../../../utils/assetsUserPerfil";
import Modal from "./Modal";
import useStyles from "./stylesCliente";
import Image from 'next/image'
import ModalViewVehicule from "./ModalViewVehicule";

export default function Vehiculos({vehicule, owner,lugar, initialLetter}){
  const classes = useStyles();
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleEdit1, setVisibleEdit1] = useState(false)
  const [visibleEdit2, setVisibleEdit2] = useState(false)

  const [user, setUser] = useState(null)

  console.log(owner);
  console.log(vehicule);
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[])
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

              <img src={vehicule?.imagen} alt='/images/carro2.jpg' className={classes.img2} style={{borderRadius:'10px'}}/>


            <div style={{paddingTop:0, marginTop:'15px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
           <div>
           <h2 style={{margin:0, fontSize:'30px', color:'#464646',padding:0,fontWeight:'600'}}>{vehicule?.referencia}</h2>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            
            <h4 style={{margin:'0', color:'gray'}}>{vehicule.modelo}</h4>
            </div>
           </div>
            <div>
            <Favorite fontSize='large' style={{color:'#f50057',}}/>
            <h4 style={{margin:0, textAlign:'center'}}>55</h4>
            </div>

            </div>

            <div style={{display:'flex',margin:'0 0 20px 0',  flexDirection:'row', padding:'20px 0', gap:'20px', justifyContent:'center'}}>
              
              <div style={{display:'flex', alignItems:'center',flexDirection:'column',marginRight:'10px', width:'30%',borderRadius:'10px', boxShadow: "lightgray 0px 1px  1px 1px"}}>
              <img
              src={'/images/engine.png'}
              alt='engine'
              style={{width:'30px', height:'30px',}}
              />
              <h4 style={{margin:0, color:'gray', fontSize:'18px', fontWeight:'200'}}>Motor</h4>
              <h3 style={{margin:0,fontWeight:'400'}}>{vehicule.cilindraje}</h3>
              </div>
              
              <div style={{display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column',marginRight:'10px', width:'30%',borderRadius:'10px', boxShadow: "lightgray 0px 1px  1px 1px"}}>
              {/* <img
              src={'/images/odometro.png'}
              alt='engine'
              style={{width:'30px', height:'30px',}}
              /> */}
              <Avatar style={{width:'40px', height:'40px'}} alt={'name'}>{initialLetter}</Avatar>
              <h4 style={{margin:0, color:'gray', fontSize:'18px', fontWeight:'200'}}>Dueño</h4>
              </div>
              
              <div style={{display:'flex',  boxShadow: "lightgray 0px 1px  1px 1px",flexDirection:'column',borderRadius:'10px', alignItems:'center',borderRadius:'10px',width:'30%', color:'white',width:'30%', height:'80px'}}>
              <Place fontSize='large' style={{color:'gray', width:'30px', heigth:'30px'}}/>
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200'}}>Lugar</h4>
              <h3 style={{margin:0, color:'#464646',fontSize:'18px',fontWeight:'400'}}>{lugar}</h3>
              </div>
              
              
            </div>
           
            </div>
          </div>
         <div>

           {/* {user?.result._id === vehicule?.owner ? 
          <div className={classes.container8} style={{width:'100%', color:'white', padding:'0px', margin:'auto', display:'flex', flexDirection:'row'}}>
          <AssestsUser image={"icono"} text={'Nuevos Repuestos'}/>
          <AssestsUser setVisibleEdit={setVisibleEdit} image={'/images/editData'} text={'Editar Auto'}/>
          <AssestsUser image={"icono"} text={'Nuevo Auto'}/>

          </div>
          : <Button>Crear mi Auto</Button> 
          } */}
         {user?.result._id === vehicule?.owner 
         ? <Button fullWidth variant='contained' color='secondary' onClick={()=>setVisibleEdit(true)} style={{marginBottom:'10px'}}>Editar mi auto</Button> 
          :
          <Button fullWidth variant='contained' color='secondary' onClick={()=> setVisibleEdit2(true)} style={{marginBottom:'10px'}}>Crear mi auto</Button> 

          }
         <Button  fullWidth variant='outlined' color='secondary' onClick={()=> setVisibleEdit2(true)}>Detalle</Button> 


        </div>
          </div> 

          <Dialog
        open={ visibleEdit2}
        onClose={()=> setVisibleEdit2(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{lineHeight:'18px'}} id="alert-dialog-title">Vistazo previo a la edicion</DialogTitle>
        <DialogContent >
          <DialogContentText style={{lineHeight:'18px'}} id="alert-dialog-description">
            Hemos creado la posibilidad que puedas agregar la imagen de tu carro, y mas detalles. Adelante!
            
          </DialogContentText>
         
          
        </DialogContent>
        <DialogActions>
          <Button
            onClick={()=> setVisibleEdit2(true)}
            variant="contained"
            autoFocus
            color="secondary"
          >
            Editar 
          </Button>
          <Button onClick={()=> setVisibleEdit2(false)} variant="contained">
            Editar Mas Tarde
          </Button>
        </DialogActions>
      </Dialog>
              {visibleEdit && <ModalViewVehicule visibleEdit={visibleEdit} setVisibleEdit1={setVisibleEdit1} setVisibleEdit={setVisibleEdit} owner={owner}/>}
              {visibleEdit1 && <Modal visibleEdit1={visibleEdit1} setVisibleEdit1={setVisibleEdit1} idVehicule={vehicule._id} owner={owner}/>}
        </>
    )
}