import { supabase } from "../../supabase";
import { useFavStore } from "../store/useFavStore";

export const useLogout = () => {
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    useFavStore.setState({ userDetails: null });
    if (error) {
      console.log(error);
    }
  };
  return { logout };
};
