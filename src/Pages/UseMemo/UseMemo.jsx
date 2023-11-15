import React from 'react'
import { useState,useMemo } from 'react'

const UseMemo = () => {
  const[number, setNumber] = useState(0)
  const [dark,setDark] = useState(false)
  
  const memoClaculation = useMemo(()=>{
expensiveFunction(number)
  },[number])
  const cssStyle= {
    backgroundColor: dark? "black" : "white",
    color:dark? "white": "black",
  }
  return (
    <div style={cssStyle}>
      <input onChange={(e)=>setNumber(e.target.valueAsNumber)}
       type='number'
       value={number}/>
       <h1>claculation:{memoClaculation}</h1>
       <button onClick={()=>setDark(!dark)}>Toogle</button>
    </div>
  )
}
function expensiveFunction(num){
  console.log("loop started")
  for(let i=0;i<=100000;i++){}
  return num
}

export default UseMemo
