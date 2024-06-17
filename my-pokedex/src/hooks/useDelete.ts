// import { supabase } from "../../supabase";

// export const useDelete = () => {
//   const deleteFromFavs = async (id: number) => {
//     const { error } = await supabase
//       .from("user_favs")
//       .delete()
//       .eq("pokemon_id", id);
//     console.log(id);
//     if (error) {
//       console.log("Error", error);
//     }
//   };
//   deleteFromFavs(id);
//   return { deleteFromFavs };
// };
