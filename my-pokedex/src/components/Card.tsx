import getPokemonImage from "../utils/api"
import { useEffect, useState } from 'react'
import axios from 'axios'

interface CardProps { 
  pokemonIndex: string
}

export default function Card({ pokemonIndex }: CardProps) {
  const [description, setDescription] = useState('')
  
  const getPokemonDescription = async(id: string) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => {
        setDescription(res.data.flavor_text_entries[1].flavor_text)
      })
  }

  useEffect(() => {
    getPokemonDescription(pokemonIndex)
  }, [pokemonIndex])


  return (
  <div className="card w-96 bg-slate-200 shadow-xl rounded-2xl"> 
    {!pokemonIndex ? <h1
      className="p-4 bg-green-300"
    >Select a Pokemon to get started!</h1> : 
      <>
       <img src={getPokemonImage(pokemonIndex)} alt="pokemon-sprite" />
       <div className="card-body">
        <h2 className="card-title"></h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
         <button className="btn btn-secondary rounded-md">
          <span className="text-red-500 text-3xl hover:text-red-300">❤️</span>  
         </button>
        </div>
      </div>
      </>
    } 
  </div>
  )
}
