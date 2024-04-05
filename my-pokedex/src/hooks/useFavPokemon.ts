import { supabase } from "../../supabase";
import { PokemonData } from "../utils/interface";
import { useFavStore } from "../store/useFavStore";

export const useFavPokemon = () => {
  const setShowError = useFavStore((state) => state.setShowError);
  const addToFavs = async (data: PokemonData) => {
    const { error } = await supabase.from("favPokemon").insert({
      uuid: data.uuid,
      name: data.name,
      type: data.type,
      pokemonID: data.pokemonID,
    });
    if (error) {
      console.log("Error", error);
      setShowError(true);
    }
  };

  return { addToFavs };
};