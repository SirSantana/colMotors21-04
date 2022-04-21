import { useReducer, useState } from "react"
import { reducer } from "../reducers/contador/reducer";


  
const initialState = {
    count:0,
    movimientos:0,
    goles:5
  }

export default function Contador(){
    const [state, dispatch] = useReducer(reducer,initialState);

    console.log('Holla');
  const handleIncrement = (e)=>{
    dispatch({type:"INCREMENT"});
  }
  const handleDecrement = (e)=>{
    dispatch({type:"DECREMENT"});
  }
  
  const handleRestart = (e)=>{
    dispatch({type:"RESTART"});
  }

return(
    <>
    Contador:{state.count}
    <br/>
    movimientos: {state.movimientos}
    <br/>
    Goles: {state.goles}
    <br/>
    <button onClick={handleIncrement}>+</button>
  <button onClick={handleDecrement}>-</button>
  <button onClick={handleRestart}>Restart</button>
    </>
)
}