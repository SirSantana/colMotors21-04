import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCotizacion,
  getCotizaciones,
} from "../../../reducers/Actions/cotizacionesActions";
import PostContent from "./PostContent";
import useStyles from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { LOGOUT } from "../../../reducers/type";
import CotizacionVista from "./CotizacionVista";
import CotizacionCliente from "./CotizacionCliente";

export default function CotizacionVendedor({
  user,
  OnePost,
  el,
  arrayCotizaciones,
}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();
  const { cotizacion, cotizaciones } = useSelector(
    (state) => state.cotizaciones
  );

  let cotis1 = [];
  let cot1;
  let cot2;

  if (arrayCotizaciones) {
    cot1 = arrayCotizaciones?.map((el) => el[0]);
    cot2 = arrayCotizaciones?.map((el) => el[1]);

    cotis1.push(cotizaciones?.filter((ele) => ele._id === cot1?.toString()));
    cotis1.unshift(cotizaciones?.filter((ele) => ele._id === cot2?.toString()));
  }



  useEffect(() => {
    if (arrayCotizaciones && !el) {
      dispatch(getCotizaciones());
    }
    if (el && !arrayCotizaciones) {
      dispatch(getCotizacion(el, router));
    }
  }, [dispatch]);

  return (
    <>
      {arrayCotizaciones?.length > 0 && cotizaciones.length>0
        ? cotis1.map((el) => (
            <CotizacionCliente
              user={user}
              OnePost={OnePost}
              cotizaciones={el[0]}
            />
          ))
        : null}

      {!arrayCotizaciones && (
        <CotizacionVista
          cotizacion={cotizacion}
          user={user}
          OnePost={OnePost}
        />
      )}
    </>
  );
}
