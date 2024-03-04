import React,{useState} from 'react'
function Counter(){
    const [value,setValue]= useState(0);
    const increment=()=>{
        setValue(value + 1);
    }
    const decrement=()=>{
        setValue(value - 1);
    }
    const reset=()=>{
        setValue(0);
    }

    return(
        <div className="container">
            <p className="display">{value}</p>
            <button className="button" onClick={increment}>Increment</button>
            <button className="button" onClick={reset}>reset</button>
            <button className="button" onClick={decrement}>Decrement</button>
        </div>
    );
}
export default Counter