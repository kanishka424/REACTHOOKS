import React,{useState} from 'react'




function HookCounterTwo() {
    let initialCount=0;
    const[count,setCount]=useState(initialCount);

    const incremntByFive=()=>{
        for(let i=0;i<5;i++){
            setCount(count=>count+1)
    }
}

    return (
        <div>
            Count={count}
            <button onClick={()=>setCount(count=>count+1)}>Increment</button>
            <button onClick={()=>setCount(count=>count-1)}>Decrement</button>
            <button onClick={()=>setCount(count=>initialCount)}>Reset</button>
            <button onClick={incremntByFive}>Increment by five</button>    
        </div>
    )
}

export default HookCounterTwo
