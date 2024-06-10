import { supabase } from "../../supabase";
import { PokemonData } from "../utils/interface";
import { useFavStore } from "../store/useFavStore";
import { useId } from "react";

export const useFavPokemon = () => {
  const setShowError = useFavStore((state) => state.setShowError);
  const userId = useFavStore((state) => state.userDetails?.id);

  const addToFavs = async (data: PokemonData) => {
    const { error } = await supabase
      .from("user_fav")
      .insert({ user_id: userId, pokemon_id: data.pokemonID });
    if (error) {
      console.log("Error", error);
      setShowError(true);
    }
  };

  return { addToFavs };
};
