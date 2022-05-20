
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCotizacion, getCotizaciones } from "../../../reducers/Actions/cotizacionesActions";
import PostContent from "./PostContent";
import useStyles from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { LOGOUT } from "../../../reducers/type";
import CotizacionVista from "./CotizacionVista";

export default function CotizacionVendedor({user,OnePost, el}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter()
  const { cotizacion, cotizaciones } = useSelector((state) => state.cotizaciones);
  
  let cotis;
  if(cotizaciones){
   cotis = cotizaciones?.filter(ele=> ele._id === el)
  }
  console.log(el);
  // console.log(el);

  // console.log('cotizaciones', cotizaciones);

  useEffect(()=>{    
    dispatch(getCotizaciones())
    // if(el){
    //   dispatch(getCotizacion(el, router))
    // }
  },[user, el, OnePost])
  
  return (
    <>
      {cotis.map(cotizacion=> <CotizacionVista cotizacion={cotizacion} user={user} OnePost={OnePost}/>)}
    </>
  );
}
