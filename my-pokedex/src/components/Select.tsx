
import { useFetch } from "../hooks/useFetch"
import { useState } from 'react'
import Card from "./Card"
import Notification from "./Notification"
import { useFavStore } from "../store/useFavStore"

export default function Select() {
const showNotification = useFavStore((state) => state.showNotification)
const [pokemonIndex, setPokemonIndex] = useState('')
const { pokemons } = useFetch()
let pokemonID = +pokemonIndex

  return (
    <>
      <div className="flex flex-col gap-4 items-center bg-blue-300 h-screen p-6">
       {showNotification && <Notification />} 
        <label htmlFor="location" className="text-lg">
          Select a Pokemon
        </label>
        <select
          id="pokemons"
          name="pokemons"
          placeholder="select"
          className="w-1/2 p-2 rounded-md"
          onChange={(e) => 
            setPokemonIndex(e.target.value)}
        >
          {pokemons?.map((pokemon, index) => (
            <option key={index} value={index + 1}>{pokemon.name}</option>
          ))}
        </select>
        <Card pokemonID={pokemonID}  
        />
        {/* <div className="flex gap-4">
         <button className="btn btn-accent">Prev</button>
         <button
          onClick={() => setPokemonIndex(c => c + 1)} 
          className="btn btn-accent">Next</button>
        </div> */}
     </div>
  </>
  )
}


