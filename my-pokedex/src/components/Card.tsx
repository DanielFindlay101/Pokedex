import getPokemonImage from "../utils/api"
import { useEffect, useState } from 'react'
import { useFavStore } from "../store/useFavStore"
import axios from 'axios'

interface CardProps { 
  pokemonID: number,
}

export default function Card({ pokemonID }: CardProps) {
  const addToFavs = useFavStore((state) => state.addToFavs)
  const favPokemon = useFavStore((state) => state.favPokemon)
  const setShowNotification = useFavStore((state) => state.setShowNotification)
  const [pokemonName, setPokemonName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState(false)
  
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

  const getPokemonName = async (id:number) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      setPokemonName(res.data.name)
    })
  }

  useEffect(() => {
    getPokemonDescription(pokemonID)
    getPokemonType(pokemonID)
    getPokemonName(pokemonID)
    localStorage.setItem('favs', JSON.stringify(favPokemon))
    setError(false)
  }, [pokemonID, favPokemon])

  setTimeout(() => {
    setShowNotification(false)
  }, 5000)

  const handleFavourite = (x: number) => {
    if(favPokemon.find(c => c.id === x)){
      setError(true)
      return
    }
    addToFavs(pokemonName, pokemonID)
    setShowNotification(true)
  }

  return (
  <div className="w-96 flex flex-col bg-slate-200 shadow-xl rounded-2xl"> 
    {!pokemonID? <h1
      className="p-4 bg-green-300 flex justify-center"
    >Select a Pokemon to get started!</h1> : 
      <>
      <h1 className="bg-green-200 p-2 flex justify-center uppercase">{pokemonName}</h1>
       <div className="bg-yellow-100 flex justify-center">
        <img src={getPokemonImage(pokemonID)} alt="pokemon-sprite" 
         className="rounded-b-3xl w-64"
        />
      </div>
       <div className="card-body">
        <h2 className="card-title"></h2>
        <p>{description}</p>
        <div className="card-actions bg-red-200 justify-between items-center rounded-md">
          <span className="pl-2">Type: {type}</span>
         <button onClick={() => handleFavourite(pokemonID)}
          className="btn btn-secondary rounded-md">
          <span className="text-red-500 text-3xl hover:text-red-300">❤️</span>  
         </button>
        </div>
      </div>
      {error && <p className="text-center p-1 text-red-600">Pokemon already in favourites!</p>}
      </>
    } 
  </div>
  )
}
