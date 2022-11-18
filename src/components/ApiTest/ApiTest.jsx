import React, { useEffect, useState } from 'react'

export const ApiTest = () => {

  const [pokemon, setPokemon] = useState(null) //Establece el estado de pokemon en null
  const [id, setId] = useState(1)

  const handlePrev = () => {
    id > 1 && setId ( id - 1 ) //validacion logica
  }
  
  const handleNext = () => {
    setId ( id + 1 )
  }

  useEffect(() => {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json()) ////Captura o que pasa cuando se cumple la promesa
        .then((data) => {
            setPokemon({
              name: data.name,
              img: data.sprites.front_default
            })
        })
  }, [id]) //Dependencia del state de id

  const btnPrevConfig = { //Esto puedo sacarlo a otra funcion: clase 11 > 1:15
    onClick: handlePrev,
    disabled: id === 1,
    className: id === 1 ? "color-primary" : "color-sec" 
  }

  return (
    <div>
        <h2>PokeApi</h2>

        { pokemon !== null && //Si pokemon es distinto de Null, renderizo...
         //Operador && : Es una sola condicion (sin else)
            <>
                <h3>{pokemon.name}</h3>
                 <img src={pokemon.img} alt={pokemon.name}/>
            </>
        }

        <section className='d-flex'>
          <button {...btnPrevConfig}>
            Anterior
          </button>
          <button onClick={handleNext}>
            Siguiente
          </button>
        </section>
    </div>
  )
}
