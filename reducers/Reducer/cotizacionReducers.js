import {
  CREATE_COTIZACION,
  DELETE_COTIZACION,
  END_LOADING,
  GET_COTIZACION,
  GET_COTIZACIONES,
  START_LOADING,
} from "../type";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { isLoading: true, cotizaciones: [] }, action) => {
  // const user = JSON.parse(localStorage.getItem("profile"));
  switch (action.type) {
    // case START_LOADING:
    //   return { ...state, isLoading: true };
    // case END_LOADING:
    //   return { ...state, isLoading: false };
    // case GET_COTIZACIONES:
    //   return { ...state, cotizaciones: action.payload };
    case CREATE_COTIZACION:
      localStorage.setItem(
        "profile",
        JSON.stringify({...user.result,cotizaciones: [...user.result.cotizaciones, action.payload],          
        })
      );
      return {
        ...state,
        cotizaciones: [...state.cotizaciones, action.payload],
      };
    // case GET_COTIZACION:
    //   return { ...state, cotizacion: action.payload.cotizacion };
    // case DELETE_COTIZACION:
      // localStorage.setItem(
      //   "profile",
      //   JSON.stringify({
      //     ...user,
      //     result: {
      //       ...user.result,
      //       cotizaciones: user.result.cotizaciones.filter(coti=> coti._id !== action.payload),
      //     },
      //   })
      // );
      // return {...state, cotizaciones: state.cotizaciones.filter(cotizacion=> cotizacion._id || cotizacion !== action.payload._id)}
    default:
      return state;
  }
};
