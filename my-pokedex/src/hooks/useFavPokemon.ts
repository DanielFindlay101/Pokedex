import { supabase } from "../../supabase";
import { PokemonData } from "../utils/interface";
import { useFavStore } from "../store/useFavStore";

export const useFavPokemon = () => {
  const setShowError = useFavStore((state) => state.setShowError);
  const userId = useFavStore((state) => state.userDetails?.id);
  const setShowNotification = useFavStore((state) => state.setShowNotification);

  const handleFavourite = async (pokemon: PokemonData) => {
    const { data } = await supabase
      .from("user_favs")
      .select("*")
      .eq("pokemon_id", pokemon.pokemonID)
      .eq("user_id", userId);
    if (data && data.length > 0) {
      setShowError(true);
      return;
    }
    const { error } = await supabase.from("user_favs").insert({
      user_id: userId,
      pokemon_id: pokemon.pokemonID,
      pokemon_name: pokemon.name,
    });
    if (error) {
      setShowError(true);
      return;
    }
    setShowNotification(true);
  };

  return { handleFavourite };
};
