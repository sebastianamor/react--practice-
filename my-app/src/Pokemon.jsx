import React, { useState }  from 'react'
import { useEffect } from 'react';

function Pokemon() {
    const [pokemon,  setPokemon] = useState();
    const [id,setId] = useState(1);
    const handledAnterior = () => {
      setId(id - 1)
    }
    const handledSiguente = () => {
      setId(id + 1)
    }

    useEffect(() => {
       fetch(`https://pokeapi.co/api/v2/pokemon/${id} `)
        .then((resp)  => resp.json())
        .then((data)  => {
          console.log(data)
          setPokemon(data);
          
        })
    }, [id])
  
    return (
      <div>{
        pokemon && 
        <div>
          <h2>
            <h2>{pokemon.name}</h2>
            <p>ID: {pokemon.id}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <br />
             { id > 1 ?  <button onClick={handledAnterior} > Anterior </button>  : <button disabled  > Anterior </button> }
            <button onClick={handledSiguente}   > Siguente  </button>
          </h2>
        </div>
        }     
      </div>
    )
  } 


export default Pokemon

