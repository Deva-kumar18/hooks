import React from 'react'
import { useState,useCallback } from 'react'
import Printable from '../../Components/Printable/Printable'

const UseCallBack = () => {
  const[darkTheme, setDarkTheme] = useState(false)
  const[number, setNumber] = useState(1)
  const calculateTable= useCallback(()=>{
    return[number * 1,number*2,number*3,number*4,number*5]
},[number])
  const cssStyle={
    backgroundColor: darkTheme?"black":"white",
    color:darkTheme?"white":"black"
  }
  return (
    <div style={cssStyle}>
      <input onChange={(e)=>setNumber(e.target.valueAsNumber)}  type='number' value={number}/>
      <Printable calculateTable ={calculateTable}/>
      <button onClick={()=>setDarkTheme(!darkTheme)}>themeChange</button>
    </div>
  )
}

export default UseCallBack