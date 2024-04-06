import React from 'react'
import './style.css'
import { useState } from 'react'



const Increment = () => {
     
    const [num, setNum] = useState(0);
    const incNum = () => {
        setNum(num + 1)
    }


    const decNum = () => {
        if(num > 0){

        }else {
            alert('Sorry, Zero Limit Reach')
            setNum(0)
        }
        setNum(num - 1)
    }
   return (
     <div className='main_div'>
        <h1 className="number"> {num} </h1>
        <div className="btn">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>


        </div>
     </div>
   ) 
}

export default Increment;