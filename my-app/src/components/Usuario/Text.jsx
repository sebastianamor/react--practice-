import { useState } from "react";
import TextH2 from "./TextH2";

 const Text = () => {

    const[show, setShow] = useState(false);
   
     function handleShow() {
    
            setShow(!show);
        
     }
    return (
      <div>
         <button  onClick={handleShow}>   { show ? "ocultar" : "mostrar" }   </button>
         {show && <TextH2/>  }
      </div>
    )
  };


export default Text
