import { useEffect, useState } from "react"
import axios from 'axios'

export interface pokemonData {
    name: string,
    url: string
}

export const useFetch = () =>  {
  const [pokemons, setPokemons] = useState<pokemonData[]>()

  const getPokemon = async () => {
     axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    ).then((res) => {
      setPokemons(res.data.results)
    })
  };

  useEffect(() => {
    getPokemon();
  }, []);
  
  return { pokemons }
}