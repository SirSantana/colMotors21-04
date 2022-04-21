import { DECREMENT, INCREMENT, RESTART } from "../types";


const initialState = {
    count:0,
    movimientos:0,
    goles:5
  }

export const reducer = (state, action)=>{
    switch (action.type) {
      case INCREMENT:
        return{
          count: state.count + 1,
          movimientos: state.movimientos + 1,
          goles: state.goles +1
        }
      case DECREMENT:
          return{
              ...state,
              count: state.count - 1,
             movimientos: state.movimientos + 1

          }
      case RESTART:
        return initialState;
      default:
        //Lanzar un error
        return state;
    }
  }
