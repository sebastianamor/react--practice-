import React, { useState } from 'react'

const Conter = () => {

   const [number , setNumber ] = useState(0);

const sumar = () => {
  setNumber(number + 1);
}

const restar = () => {
  setNumber(number - 1);
}


  return (
    <div>
      <button onClick={restar}  >Sumar</button>
      <h2> {number} </h2>
      <button onClick={sumar}  >Sumar</button>
      <hr />
    </div>
    
  )
}
export default Conter;