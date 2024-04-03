import { useState, useEffect } from "react";
import { supabase } from "../../supabase";

export interface PokemonData {
  name: string;
  url: string;
}
export const useSupabase = () => {
  const [pokemon, setPokemon] = useState<PokemonData[]>();

  const fetchPokemon = async () => {
    const { data, error } = await supabase.from("favPokemon").select();

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }

    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon };
};
