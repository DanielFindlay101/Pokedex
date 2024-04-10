import { supabase } from "../../supabase";

export const useDelete = () => {
  const deleteFromFavs = async (id: number) => {
    const { error } = await supabase.from("favPokemon").delete().eq("uuid", id);
    if (error) {
      console.log("Error", error);
    }
  };

  return { deleteFromFavs };
};
