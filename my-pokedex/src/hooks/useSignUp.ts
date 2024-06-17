import { supabase } from "../../supabase";
import { useState } from "react";
import { useFavStore } from "../store/useFavStore";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const { setUserDetails } = useFavStore();
  const navigate = useNavigate();

  // Authenticate the user
  const signUp = async (email: string, password: string, username: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
        },
      },
    });
    if (error) {
      setError(error.message);
    }
    if (data) {
      setUserDetails(data.user);
      navigate("/");
    }
  };

  return {
    signUp,
    error,
  };
};
