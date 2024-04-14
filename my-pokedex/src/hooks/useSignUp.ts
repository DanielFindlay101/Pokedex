import { supabase } from "../../supabase";
import { useState } from "react";
import { useFavStore } from "../store/useFavStore";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const { setUserDetails } = useFavStore();
  const navigate = useNavigate();

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      setError(error.message);
    }
    if (data) {
      console.log("User has successfully signed up!");
      setUserDetails(data.user);
      navigate("/");
    }
  };
  return { signUp, error };
};
