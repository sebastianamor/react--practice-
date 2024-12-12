import React, { useEffect, useState } from 'react'

function PokemonList() {

    const [currentList , setCurrentList] = useState({}); 

         useEffect(() => {

            fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")
            .then((resp) => resp.json())
            .then((data) => {
            setCurrentList(data);
            })
         }, []) 
          
  return (
    <div>
      {
        currentList.results && 
        <div>
            {currentList.results[0].name } 
        </div>
      }
    </div>
  )
}

export default PokemonList
