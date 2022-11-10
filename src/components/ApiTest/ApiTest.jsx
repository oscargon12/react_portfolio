import React, { useEffect, useState } from 'react'

export const ApiTest = () => {

  const [pokemon, setPokemon] = useState(null) //Establece el estado de pokemon en null
  console.log(pokemon)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/16')
        .then((res) => res.json()) ////Captura o que pasa cuando se cumple la promesa
        .then((data) => {
            setPokemon(data)
        })
  }, [])

  return (
    <div>
        <h2>PokeApi</h2>

        { pokemon !== null && //Si pokemon es distinto de Null, renderizo...
         //Operador && : Es una sola condicion (sin else)
            <>
                <h3>{pokemon.name}</h3>
                <h4>{pokemon.weight}</h4>
                <img src={pokemon.sprites.front_default} alt="{pokemon.name}" />
            </>

        }
    </div>
  )
}
