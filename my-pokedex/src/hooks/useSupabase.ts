import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import { PokemonData } from "../utils/interface";

export const useSupabase = () => {
  const [favPokemon, setFavPokemon] = useState<PokemonData[]>();

  const fetchPokemon = async () => {
    const { data, error } = await supabase.from("favPokemon").select();

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
