
import { useFetch } from "../hooks/useFetch"
import { useState } from 'react'
import { useFavStore } from "../store/useFavStore"
import Card from "./Card"

export default function Select() {
const [pokemonIndex, setPokemonIndex] = useState('')
const { pokemons } = useFetch()
const setFavPokemonID = useFavStore((state) => state.setFavPokemonID)
const favPokemon = useFavStore((state) => state.favPokemon)

const pokemonID = +pokemonIndex
setFavPokemonID(pokemonID)

console.log(favPokemon)

  return (
    <>
      <div className="flex flex-col gap-4 items-center bg-blue-300 h-screen p-6">
        <label htmlFor="location" className="text-lg">
          Select a Pokemon
        </label>
        <select
          id="pokemons"
          name="pokemons"
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
     </div>
  </>
  )
}


