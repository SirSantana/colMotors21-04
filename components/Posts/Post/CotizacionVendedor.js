
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCotizacion, getCotizaciones } from "../../../reducers/Actions/cotizacionesActions";
import CotizacionVista from "./CotizacionVista";

export default function CotizacionVendedor({user,OnePost, el}) {
  const dispatch = useDispatch();
  const { cotizacion, cotizaciones } = useSelector((state) => state.cotizaciones);
  
  const cotis = cotizaciones?.filter(ele=> ele._id === el)


  useEffect(()=>{
    dispatch(getCotizaciones());
  },[dispatch])
  
  return (
    <>
      {cotis?.map((el)=> <CotizacionVista key={el._id} user={user} OnePost={OnePost} cotizacion={el} />) }
    </>
  );
}
