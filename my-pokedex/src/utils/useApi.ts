import axios from "axios";
import { useFavStore } from "../store/useFavStore";

export const useApi = () => {
  const setPokemonDescription = useFavStore(
    (state) => state.setPokemonDescription
  );
  const setPokemonType = useFavStore((state) => state.setPokemonType);
  const setPokemonName = useFavStore((state) => state.setPokemonName);

  function getPokemonImage(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  async function getPokemonDescription(id: number) {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => {
        return setPokemonDescription(
          res.data.flavor_text_entries[1].flavor_text
        );
      });
  }

  async function getPokemonType(id: number) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemonType(res.data.types[0].type.name);
    });
  }

  async function getPokemonName(id: number) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemonName(res.data.name);
    });
  }

  return {
    getPokemonImage,
    getPokemonDescription,
    getPokemonType,
    getPokemonName,
  };
};
