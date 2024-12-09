import { useState } from "react";

 const Text = () => {

    const[show, setShow] = useState(true);
   
     function handleShow() {
    
            setShow(!show);
        
     }
    return (
      <div>
         <button  onClick={handleShow}  >oculatar / mostrar</button>
         {show === true && <h2>hola mundo!  </h2>   }
      </div>
    )
  };


export default Text
