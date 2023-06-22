import getPokemonImage from "../utils/api"
import { useEffect, useState } from 'react'
import { useFavStore } from "../store/useFavStore"
import axios from 'axios'
import { TrashIcon } from '@heroicons/react/24/solid'

interface CardProps { 
  pokemonID: number
}

export default function Card({ pokemonID }: CardProps) {
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const addToFavs = useFavStore((state) => state.addToFavs)
  const favPokemon = useFavStore((state) => state.favPokemon)
  const removeFromFavs = useFavStore((state) => state.removeFromFavs)
  
  const getPokemonDescription = async(id: number) => {
   await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => {
        setDescription(res.data.flavor_text_entries[1].flavor_text)
      })
  }

  const getPokemonType = async (id: number) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      setType(res.data.types[0].type.name)
    })
  }

  useEffect(() => {
    getPokemonDescription(pokemonID)
    getPokemonType(pokemonID)
  }, [pokemonID])

  console.log(favPokemon)

  return (
  <div className="card w-96 bg-slate-200 shadow-xl rounded-2xl"> 
    {!pokemonID? <h1
      className="p-4 bg-green-300 flex justify-center"
    >Select a Pokemon to get started!</h1> : 
      <>
       <img src={getPokemonImage(pokemonID)} alt="pokemon-sprite" 
        className="bg-yellow-100 rounded-b-3xl"
       />
       <div className="card-body">
        <h2 className="card-title"></h2>
        <p>{description}</p>
        <div className="card-actions bg-red-200 justify-between items-center rounded-md">
          <span className="pl-2">Type: {type}</span>
          <TrashIcon className="w-5"
            onClick={() => removeFromFavs(pokemonID)}
          />
          <span>{pokemonID}</span>
         <button onClick={() => addToFavs(pokemonID)} className="btn btn-secondary rounded-md">
          <span className="text-red-500 text-3xl hover:text-red-300">❤️</span>  
         </button>
        </div>
      </div>
      </>
    } 
  </div>
  )
}
