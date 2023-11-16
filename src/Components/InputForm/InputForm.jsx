import React, { useId } from 'react'


const InputForm = () => {
    const id = useId();
  return (
    <div> 
    <h1>with id Hook</h1>
    <label htmlFor={id + "first-name"}>first name</label>
    <input type="text" id={id + "first-name"} />
    <label htmlFor={id + "last-name"}>last name</label>
    <input type="text" id={id + "last-name"} />
  </div>
  )
}

export default InputForm