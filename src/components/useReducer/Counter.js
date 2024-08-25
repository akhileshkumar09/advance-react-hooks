import React from 'react'
import { useReducer } from 'react'

function counterReducer(state, action){
     switch(action.type){
        case 'Increment':
            return {count : state.count+1}
        case 'Decrement':
            return {count : state.count-1}
        case 'reset':
            return {count : 0}
        default :
           throw new Error('Unknown action type')            
     }
}
function Counter() {
    const [state, dispatch] = useReducer(counterReducer, {count : 0})
  return (
    <div>
        <h2>Counter : {state.count}</h2>
        <button onClick={()=>dispatch({type : 'Increment'})}>Increment</button>
        <button onClick={()=> dispatch({type : 'Decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type :'reset'})}>Reset</button>
    </div>
  )
}

export default Counter