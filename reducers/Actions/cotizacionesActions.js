import * as api from "../Api/index";
import {
  CREATE_COTIZACION,
  END_LOADING,
  GET_COTIZACION,
  GET_COTIZACIONES,
  START_LOADING,
  DELETE_COTIZACION
} from "../type";

export const postCotizacion = (cotizacion) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });

    const { data } = await api.createCotizacion(cotizacion);
    dispatch({ type: CREATE_COTIZACION, payload: data });
    // dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.response);
  }
};
export const getCotizacion = (id) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });

    const { data } = await api.getCotizacion(id);
    dispatch({ type: GET_COTIZACION, payload: { cotizacion: data } });
    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
// export const getCotizaciones = () => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });

//     const { data } = await api.getCotizaciones();
//     dispatch({ type: GET_COTIZACIONES, payload: data });
//     dispatch({ type: END_LOADING });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteCotizacion =(id)=>async(dispatch)=>{
//   try {
//     await api.deleteCotizacion(id)
//     dispatch({type: DELETE_COTIZACION, payload: id})
//   } catch (error) {
    
//   }
// }