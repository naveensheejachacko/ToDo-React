import React,{useEffect,useState} from 'react' 
function Counter() {
    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log('Mounting......');
        console.log('updating....'+count)
        return()=>{
            console.log('clean up'+count)
             
        }
    },[count])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Hello I am component:{count}</h1>
    </div>
  )
}

export default Counter