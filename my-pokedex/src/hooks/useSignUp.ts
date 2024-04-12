import { supabase } from "../../supabase";
import { useState } from "react";
import { useFavStore } from "../store/useFavStore";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const { setUserDetails } = useFavStore();
  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      setError(error.message);
    }
    console.log(data);
    setUserDetails(data.user);
  };
  return { signUp, error };
};
