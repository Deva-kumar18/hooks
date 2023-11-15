import React, { useEffect, useState } from 'react'

const Printable = ({calculateTable}) => {
    const[rows, setRows]= useState([])
    useEffect(()=>{
        console.log("print Table Runs!");
        setRows(calculateTable());
    },[calculateTable])
  return rows.map((row,index)=>{
    return <p key={index}>{row}</p>
  })
}

export default Printable