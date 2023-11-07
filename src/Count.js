import React, {useReducer} from 'react';

const initialState = 0;
const Reducer =(currentState,action)=>{
  switch(action){
    case "Increment":
    return currentState+1
    case "Decrement":
    return currentState-1
    case "Reset":
    return initialState
    default:
       return currentState

}
}

function Count() {
    const[count,dispatch] = useReducer(Reducer,initialState)
    
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>dispatch("Increment")}>INCREMENT</button>
      <button onClick={()=>dispatch("Decrement")}>DECREMENT</button>
      <button onClick={()=>dispatch("Reset")}>RESET</button>
    </div>
  )
}

export default Count