import { Button, Divider } from "@material-ui/core"
import { LocalGasStation } from "@material-ui/icons"
import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import { useRef, useState } from "react"
import AlgoritmoGasolina from "../../../libs/algoritmoGasolina"
import Mes from "./Mes"



export default function EsteAño({setIdPost,
    setEdit,
    gasolinas,
    setVisibleEdit,
    tanque,
    setMes,mes}){
    const {tanqueadas} = AlgoritmoGasolina({gasolinas, tanque})
    const [visibleMes, setVisibleMes] = useState(false)
    let mesesNumeros = {0:'Enero', 1:'Febrero', 2:'Marzo', 3:'Abril', 4:'Mayo', 5:'Junio', 6:'Julio', 7:'Agosto', 8:'Septiembre', 9:'Octubre',10:'Noviembre', 11:'Diciembre'}
    const view = useRef(visibleMes)
    let meses =[[],[],[],[],[],[],[],[],[],[],[],[]]
    let totales =[[],[],[],[],[],[],[],[],[],[],[],[]]
    let dias =[" Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    let numeroTanqueadas=0
    for(let j= 0; j<12; j++){
        for(let i = 0; i<tanqueadas.length; i++){
        if(tanqueadas[i].mes===j){
          meses[j].push(tanqueadas[i])
        }
    }
    if(meses[j].length >0){
        let gastado =0
        let kilometrosRecorridos =0
        let numeroTanqueadas=0
        let galonesComprados=0
        let diasTanqueados =[]
        let galonRecorrido = 0
        for(let data of meses[j]){
            let dineroGastado = typeof data.dineroGastado!== 'number' ? data.dineroGastado.toString().replace(/\./g, ""):data.dineroGastado
            gastado += Number(dineroGastado)
            numeroTanqueadas +=1
            if(data.kilometrosRecorridos !== undefined){
                kilometrosRecorridos += data.kilometrosRecorridos
                galonesComprados += data.galones
        galonRecorrido += data.galonRecorrido
                console.log(compartido);
            }
            
            let myDate = new Date(data.fecha)
            const numOfHours = 10;
            myDate.setTime(myDate.getTime() + numOfHours * 60 * 60 * 1000)
            let numero = new Date(myDate).getDate()
            let dia = new Date(myDate).getDay()
            let compartido = data.compartida === true
            diasTanqueados.push({numero, dia, compartido})
        }
        totales[j].push({gastado, mes:j, kilometrosRecorridos, galonesComprados, diasTanqueados, galonRecorrido})
      }
      }
      console.log(totales);
      const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };
      console.log(totales.flat().map(el=> el));
    return(
        <>
        {totales.flat().map(el=> 
            <div style={{backgroundColor:'#f1f1f1',boxShadow: "rgba(149, 157, 165, 0.8) 0px 8px 10px", margin:'20px 0', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
            <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'normal'}}>
    <img
          src={"/images/carro.png"}
          alt="icon"
          style={{width:'40px', height:'40px'}}
        />
    <Divider style={{height:'36px', width:'2px', backgroundColor:'#f50057', margin:'0 10px'}}/>
    <div style={{marginRight:'20px'}}>
    <h3  style={{fontSize:'18px', color:'#1b333d', margin:0, lineHeight:'10px',fontWeight:'700'}}>Promedio</h3>
    <h5  style={{fontSize:'16px', color:'#1b333d', margin:0, fontWeight:'500'}}>{mesesNumeros[el.mes]}</h5>
    </div>
    <Button onClick={()=> {setMes(el.mes), setVisibleMes(true),handleScroll(view.current)}} variant='outlined' color='secondary' fullWidth>Ver Tanqueadas</Button>

    </div>
                <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <div style={{display:'flex', flexDirection:'row', marginTop:'20px',flexWrap:'wrap'}}>
                       <div style={{display:'flex', flexDirection:'row', alignItems:'center', textAlign:'center'}}>
                           <LocalGasStation style={{width:'40px', height:'40px',color:'#f50057', boxShadow: "rgba(149, 157, 165, 0.6) 2px 2px 2px", backgroundColor:'white', borderRadius:'10px'}}/>
                           <h3 style={{fontSize:'16px', color:'#1b333d', fontWeight:"500", marginLeft:'10px'}}>Dias Tanque.</h3>
                        </div> 
                        <div style={{display:'flex', marginLeft:'10px', flexDirection:'row', justifyContent:'left', flexWrap:'wrap'}}>
                        {el.diasTanqueados.map(ele=> 
                        <div style={{width:'50px', height:'50px', backgroundColor: ele.compartido ?'#f50057':'#1b333d',margin:'0 0 10px 10px', alignItems:'center',textAlign:'center', justifyContent:'center', borderRadius:'10px'}}>
                            <h2 style={{fontSize:'18px',textAlign:'center', color:'white', margin:'0', fontWeight:"500"}}>{ele.numero}</h2>
                          <h3 style={{fontSize:'12px', textAlign:'center',color:'white', margin:'0', fontWeight:"400"}}>{dias[ele.dia]}</h3> 
                          <h3 style={{fontSize:'12px', textAlign:'center',color:'white', margin:'0', fontWeight:"400"}}>{el.compartido}</h3> 

                        </div>
                            )}
                        </div>
                    </div>
                    <div style={{display:'flex', marginBottom:'10px', flexDirection:'row', width:'100%',alignItems:'center', textAlign:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'row', textAlign:'center',alignItems:'center'}}>
                    <img
                        src={"/images/recorrido.png"}
                        alt="icon"
                        style={{width:'40px', height:'40px',boxShadow: "rgba(149, 157, 165, 0.6) 2px 2px 2px", backgroundColor:'white', borderRadius:'10px'}}
                        />
                        <h3 style={{fontSize:'16px', color:'#1b333d', margin:'0 0 0 10px', fontWeight:500}}>Kilometros Rec.</h3>
                    </div>
                        <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>{el.kilometrosRecorridos} Kms</h3>
                    </div>
                    <div style={{display:'flex',marginBottom:'10px', flexDirection:'row', width:'100%',alignItems:'center', textAlign:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'row', textAlign:'center',alignItems:'center'}}>
                    <img
              src={"/images/CombustibleFondo.png"}
              alt="icon"
              style={{width:'40px', height:'40px',boxShadow: "rgba(149, 157, 165, 0.6) 2px 2px 2px",backgroundColor:'white', borderRadius:'10px'}}
            />
                        <h3 style={{fontSize:'16px', color:'#1b333d', margin:'0 0 0 10px', fontWeight:500}}>Rendimiento</h3>
                    </div>
                        <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>1gl/{Math.trunc(el.galonRecorrido /( el.diasTanqueados.length-1))}kms</h3>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', width:'100%',alignItems:'center', textAlign:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'row', textAlign:'center',alignItems:'center'}}>
                    <h1 style={{margin:0,color:'#f50057',paddingBottom:'5px',textAlign:'center', width:'40px', height:'40px',boxShadow: "rgba(149, 157, 165, 0.6) 2px 2px 2px", backgroundColor:'white', borderRadius:'10px'}}>$</h1>
                        <h3 style={{fontSize:'16px', color:'#1b333d', margin:'0 0 0 10px', fontWeight:500}}>Dinero Gastado</h3>
                    </div>
                        <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>${el.gastado.toLocaleString()}</h3>
                    </div>
                </div>



            {/* <div style={{margin:'20px 0',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
                <img
              src={"/images/recorrido.png"}
              alt="icon"
              style={{width:'40px', height:'40px',boxShadow: "rgba(149, 157, 165, 0.6) 2px 2px 2px", backgroundColor:'white', borderRadius:'10px'}}
            />
            <h3 style={{fontSize:'16px', color:'gray', margin:0, fontWeight:400}}> Recorriste</h3>
            <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>{el.kilometrosRecorridos}</h3>
                </div>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
                <h1 style={{margin:0,color:'#f50057',paddingBottom:'5px',textAlign:'center', width:'40px', height:'40px',boxShadow: "rgba(149, 157, 165, 0.6) 2px 2px 2px", backgroundColor:'white', borderRadius:'10px'}}>$</h1>
            <h3 style={{fontSize:'16px', color:'gray', margin:0, fontWeight:400}}>Gastaste</h3>
            <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>${el.gastado.toLocaleString()}</h3>
                </div>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
                <img
              src={"/images/CombustibleFondo.png"}
              alt="icon"
              style={{width:'40px', height:'40px',boxShadow: "rgba(149, 157, 165, 0.6) 2px 2px 2px",backgroundColor:'white', borderRadius:'10px'}}
            />
            <h3 style={{fontSize:'16px', color:'gray', margin:0, fontWeight:400}}> Rendimiento</h3>
            <h3 style={{fontSize:'18px', color:'black', margin:0, fontWeight:600}}>1gl/21Kms</h3>
                </div>
            </div>
             */}
        </div>
        )
        }      
        {visibleMes && <div ref={view}><Mes  setIdPost={setIdPost} setEdit={setEdit} gasolinas={gasolinas} setVisibleEdit={setVisibleEdit} tanque={tanque} mes={mes}/></div>  }
        </>
    )
}