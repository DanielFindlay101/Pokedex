import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import { PokemonData } from "../utils/interface";
import { useFavStore } from "../store/useFavStore";

export const useSupabase = () => {
  const [favPokemon, setFavPokemon] = useState<PokemonData[]>();
  const user = useFavStore((state) => state.userDetails);

  const fetchPokemon = async () => {
    const { data, error } = await supabase
      .from("favPokemon")
      .select("*")
      .eq("user_email", user?.email);

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    console.log(data);
    setFavPokemon(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { favPokemon };
};
