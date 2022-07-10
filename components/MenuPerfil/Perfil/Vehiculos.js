
import { Avatar, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Slide } from "@material-ui/core";
import { AddAPhoto, ArrowBackIos, BarChart, BarChartOutlined, Favorite, LocalGasStationOutlined, LocationCity, Menu, Opacity, OpacityOutlined, Place, PlaceOutlined, Share } from "@material-ui/icons";
import { forwardRef, useEffect, useState } from "react";
import AssestsUser from "../../../utils/assetsUserPerfil";
import Modal from "./Modal";
import useStyles from "./stylesCliente";
import Image from 'next/image'
import ModalViewVehicule from "./ModalViewVehicule";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Vehiculos({vehicule, owner,lugar, initialLetter}){
  const classes = useStyles();
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleEdit1, setVisibleEdit1] = useState(false)
  const [visibleEdit2, setVisibleEdit2] = useState(false)
  const [visibleEdit3, setVisibleEdit3] = useState(false)


  const [user, setUser] = useState(null)

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[])
  
  return(
        <>

        <div className={classes.conta1}>
          <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
              <ArrowBackIos fontSize='large'/>
            <img style={{marginLeft:'10px', width:'60px', height:'60px'}} src={`/images/${vehicule?.marca}.png`} alt={vehicule?.marca} />
              <Menu fontSize='large'/>
          </div>
          <div>
          <div style={{ borderRadius:'10px', }}>
          
            {vehicule?.imagen 
            ? <img src={vehicule?.imagen} alt='/images/carro2.jpg' className={classes.img2} style={{borderRadius:'10px'}}/>
            :
            <div className={classes.div2}>
            <AddAPhoto className={classes.icon}/>
            <Button onClick={()=> setVisibleEdit(true)} style={{margin:'0 auto 15% auto',  width:'180px'}} variant="contained">
                Agregar Auto
              </Button>
             </div>
            }
             


            <div style={{paddingTop:0, marginTop:'15px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
           <div>
           <h2 style={{margin:0, fontSize:'30px', color:'#464646',padding:0,fontWeight:'600'}}>{vehicule?.referencia}</h2>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            
            <h4 style={{margin:'0', color:'gray'}}>{vehicule?.modelo}</h4>
            </div>
           </div>
            <div>
            <Favorite fontSize='large' style={{color:'#f50057',}}/>
            <Share fontSize='large'/>
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
              <h3 style={{margin:0,fontWeight:'400'}}>{vehicule?.cilindraje}</h3>
              </div>
              
              <div style={{display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column',marginRight:'10px', width:'30%',borderRadius:'10px', boxShadow: "lightgray 0px 1px  1px 1px"}}>
              <img
              src={'/images/odometro.png'}
              alt='engine'
              style={{width:'30px', height:'30px',}}
              />
              <h4 style={{margin:0, color:'gray', fontSize:'18px', fontWeight:'200'}}>Km</h4>
              <h4 style={{margin:0,fontSize:'18px', fontWeight:'400'}}>14.000</h4>

              </div>
              
              <div style={{display:'flex',  boxShadow: "lightgray 0px 1px  1px 1px",flexDirection:'column',borderRadius:'10px', alignItems:'center',borderRadius:'10px',width:'30%', color:'white',width:'30%', height:'80px'}}>
              <PlaceOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px'}}/>
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200',lineHeight:'18px'}}>Lugar</h4>
              <h3 style={{margin:0, color:'#464646',fontWeight:'400'}}>{lugar}</h3>
              </div>
              
              
            </div>
           
            </div>
          </div>
         <div>

           
         {user?.result._id === vehicule?.owner 
         ? <Button fullWidth variant='contained' color='secondary' onClick={()=>setVisibleEdit(true)} style={{marginBottom:'10px'}}>Editar mi auto</Button> 
          :
          <Button fullWidth variant='contained' color='secondary' onClick={()=> setVisibleEdit2(true)} style={{marginBottom:'10px'}}>Crear mi auto</Button> 

          }
         <Button  fullWidth variant='outlined' color='secondary' onClick={()=> setVisibleEdit3(true)}>Detalle</Button> 


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

      <Dialog
        open={ visibleEdit3}
        onClose={()=> setVisibleEdit3(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle style={{display:'flex', flexDirection:'row', justifyContent:'center', padding:0}} id="alert-dialog-title">
        <img style={{margin:'0 auto',width:'60px', height:'60px'}} src={`/images/${vehicule?.marca}.png`} alt={vehicule?.marca} />
        
        </DialogTitle>
        <DialogContent >
        <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0'}}>
              <img
              src={'/images/engine.png'}
              alt='engine'
              style={{width:'30px', height:'30px',marginRight:'10px'}}
              />
              <h4 style={{margin:0, color:'gray', fontSize:'18px', fontWeight:'200',marginRight:'76px'}}>Motor</h4>
              <h3 style={{margin:0,fontWeight:'600'}}>{vehicule?.cilindraje}</h3>
              </div>
        <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0'}}>
              <PlaceOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px', marginRight:'10px'}}/>
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200',lineHeight:'18px',marginRight:'80px'}}>Lugar</h4>
              <h3 style={{margin:0, color:'#464646',fontWeight:'600',}}>{lugar}</h3>
              </div>
              
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0' }}>
              <img
              src={'/images/odometro.png'}
              alt='engine'
              style={{width:'30px', height:'30px',marginRight:'10px'}}
              />
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>Kilometraje</h4>
              <h4 style={{margin:0,fontSize:'18px', fontWeight:'600'}}>14.000</h4>

              </div>
              <div style={{display:'flex',flexDirection:'row',borderRadius:'10px', alignItems:'center',margin:'0 10px 10px 0'}}>
              <LocalGasStationOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px', marginRight:'10px'}}/>
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200',lineHeight:'18px',marginRight:'58px'}}>Gasolina</h4>
              <h3 style={{margin:0, color:'#464646',fontWeight:'600',}}>$110.000</h3>
              </div>
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0'}}>
              <BarChartOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px', marginRight:'10px'}}/>
              
              <h4 style={{margin:0, color:'gray', fontSize:'18px', fontWeight:'200',marginRight:'30px'}}>Rendimiento</h4>
              <h3 style={{margin:0,fontWeight:'600'}}>90Km</h3>
              </div>
        
              
              <div style={{display:'flex', alignItems:'center',flexDirection:'row',margin:'0 10px 10px 0' }}>
              <OpacityOutlined fontSize='large' style={{color:'#464646', width:'30px', heigth:'30px', marginRight:'10px'}}/>
              
              <h4 style={{margin:0, color:'gray',fontSize:'18px', fontWeight:'200',lineHeight:'18px',marginRight:'40px'}}>C.Aceite</h4>
              <h4 style={{margin:0,fontSize:'18px', fontWeight:'600'}}>En 1000Km</h4>

              </div>
              
          
        </DialogContent>
        <DialogActions>
          <Button
            onClick={()=> setVisibleEdit3(false)}
            variant="contained"
            autoFocus
            color="secondary"
            fullWidth
          >
            Regresar
          </Button>
          
        </DialogActions>
        </Dialog>

              {visibleEdit && <ModalViewVehicule visibleEdit={visibleEdit} setVisibleEdit1={setVisibleEdit1} setVisibleEdit={setVisibleEdit} owner={owner}/>}
              {visibleEdit1 && <Modal visibleEdit1={visibleEdit1} setVisibleEdit1={setVisibleEdit1} idVehicule={vehicule._id} owner={owner}/>}
        </>
    )
}