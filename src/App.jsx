import { useEffect, useState } from 'react'


function App() {
  let [count, setCount] = useState(0)
  let [count2, setCount2] = useState(0)
  useEffect(()=>{
 
  console.log("Count one value is " +  count);
 },[count2])

  return (
    <>
      <button onClick={()=>setCount(count+1)}>plus</button>
      <h1>{count}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, et.</p>
      <h1>count2: {count2}</h1> 
      <button onClick={()=>setCount2(count2-1)}>minus</button>
      
    </>
  )
}

export default App
