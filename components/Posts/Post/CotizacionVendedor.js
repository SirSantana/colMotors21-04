
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
  const { cotizaciones } = useSelector((state) => state.cotizaciones);
  
  console.log('el',el);
  
  

  
  const cotis = cotizaciones?.filter(ele=> ele._id === el)
  console.log('cotis',cotis);
  useEffect(()=>{    
    dispatch(getCotizaciones())
  },[dispatch])
  
  return (
    <>
      {cotis.map(cotizacion=> <CotizacionVista cotizacion={cotizacion} user={user} OnePost={OnePost}/>)}
    </>
  );
}
