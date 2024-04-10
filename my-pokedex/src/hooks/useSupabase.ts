import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import { PokemonData } from "../utils/interface";
import { useFavStore } from "../store/useFavStore";

export const useSupabase = () => {
  const [favPokemon, setFavPokemon] = useState<PokemonData[]>();
  // const favPokemon = useFavStore((state) => state.favPokemon);
  // const setFavPokemon = useFavStore((state) => state.setFavoritePokemon);

  const fetchPokemon = async () => {
    const { data, error } = await supabase.from("favPokemon").select();

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    console.log(
      "ITEMS",
      data.map((item) => item)
    );
    setFavPokemon(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { favPokemon };
};
