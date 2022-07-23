import * as api from "../Api/index";
import {
  CREATE_COTIZACION,
  END_LOADING,
  GET_COTIZACION,
  GET_COTIZACIONES,
  START_LOADING,
  DELETE_COTIZACION,
  CREATE_COMMENT
} from "../type";

export const postCotizacion = (cotizacion, router,setMessage) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.createCotizacion(cotizacion);
    
    setMessage({description:'¡Cotizacion realizada!'})
    dispatch({ type: CREATE_COTIZACION, payload: data });
    router.push('/home')

    // dispatch({ type: END_LOADING });

  } catch (error) {
    setMessage({description:'Ha ocurrido un error', error:true})
  }
};
export const getCotizacion = (id) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
      const { data } = await api.getCotizacion(id);
      dispatch({ type: GET_COTIZACION, payload: { cotizacion: data } });

    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.response);
    // router.push("/auth")
    // localStorage.clear()

  }
};
export const getCotizaciones = () => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.getCotizaciones();
    dispatch({ type: GET_COTIZACIONES, payload: data });
    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.response);
  }
};
export const createComment = (body, id) => async (dispatch) => {
  try {
    const { data } = await api.createComment(body, id);
    dispatch({ type: CREATE_COMMENT, payload: data});

    return data.upCotizacion.comentarios
  } catch (error) {
    console.log(error.response);
  }
};

// export const deleteCotizacion =(id)=>async(dispatch)=>{
//   try {
//     await api.deleteCotizacion(id)
//     dispatch({type: DELETE_COTIZACION, payload: id})
//   } catch (error) {
    
//   }
// }