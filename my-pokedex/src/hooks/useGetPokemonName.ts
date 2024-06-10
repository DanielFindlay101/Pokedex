import { useState } from "react";
import { supabase } from "../../supabase";

export const useGetPokemonName = (id: number) => {
  const [name, setName] = useState();
  const getPokemonName = async (id: number) => {
    const { data, error } = await supabase
      .from("pokemon")
      .select("Name")
      .eq("Number", id);
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    setName(data[0].Name);
  };
  getPokemonName(id);
  return { name };
};
