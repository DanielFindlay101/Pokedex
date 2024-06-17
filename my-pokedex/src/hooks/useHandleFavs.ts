import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import { FavPokemon } from "../utils/interface";
import { useFavStore } from "../store/useFavStore";

export const useHandleFavs = () => {
  const [favPokemon, setFavPokemon] = useState<FavPokemon[]>();
  const user = useFavStore((state) => state.userDetails);

  const fetchPokemon = async () => {
    if (user) {
      const { data } = await supabase
        .from("user_favs")
        .select("*")
        .eq("user_id", user.id);
      setFavPokemon(data || []);
    }
  };

  const deleteFav = async (id: number) => {
    const { error } = await supabase
      .from("user_favs")
      .delete()
      .eq("pokemon_id", id);
    if (error) {
      console.log("Error", error);
    }
    setFavPokemon(favPokemon?.filter((fav) => fav.pokemon_id !== id));
  };

  useEffect(() => {
    fetchPokemon();
  }, [favPokemon]);

  return { favPokemon, deleteFav };
};
