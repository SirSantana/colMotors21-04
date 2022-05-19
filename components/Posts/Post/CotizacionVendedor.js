
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
  
  
  

  
  // const cotis = cotizaciones?.filter(ele=> ele._id === el)
  useEffect(()=>{    
    if (el) {
      dispatch(getCotizacion(el));
    }
  },[dispatch])
  
  return (
    <>
      <CotizacionVista cotizacion={cotizacion} user={user} OnePost={OnePost}/>
    </>
  );
}
