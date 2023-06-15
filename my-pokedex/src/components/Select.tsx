
import { useFetch } from "../hooks/useFetch"
import { useState } from 'react'
import Card from "./Card"

export default function Select() {
const [pokemonName, setPokemonName] = useState('')
const { pokemons } = useFetch()

  return (
    <div className="flex flex-col gap-4 items-center bg-blue-300 h-screen p-6">
    <label htmlFor="location" className="">
      Select a Pokemon
    </label>
    <select
      id="pokemons"
      name="pokemons"
      className="w-1/2"
      onChange={(e) => setPokemonName(e.target.value)}
    >
       {pokemons?.map((pokemon, index) => (
        <option key={index} value={pokemon.name}>{pokemon.name}</option>
       ))}
    </select>
    <Card pokemonName={pokemonName} />
  </div>
  )
}


