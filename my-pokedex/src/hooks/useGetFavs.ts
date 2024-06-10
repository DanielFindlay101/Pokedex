import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import { FavPokemon, PokemonData } from "../utils/interface";
import { useFavStore } from "../store/useFavStore";

export const useGetFavs = () => {
  const [favPokemon, setFavPokemon] = useState<FavPokemon[]>();
  const user = useFavStore((state) => state.userDetails);

  const fetchPokemon = async () => {
    const { data, error } = await supabase
      .from("user_fav")
      .select("*")
      .eq("user_id", user?.id);

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    setFavPokemon(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { favPokemon };
};
