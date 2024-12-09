import { useState , useEffect } from "react";

const TextH2 = () => {

    const [text ,setText] = useState("")

    const handleText = (e) => {
     setText(e.target.value)
    }

    useEffect(  () => {}  )

    return (
        <div>

         <input type="text"  onChange={handleText}  />
        <h2> {text} </h2>
        </div>
    )
};

export default TextH2;