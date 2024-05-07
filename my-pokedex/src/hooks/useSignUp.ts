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
      console.log("User has successfully signed up!");
      setUserDetails(data.user);
      navigate("/");
    }
  };
  // Create a new user in the UserTable
  const createUser = async (email: string, username: string) => {
    const { error } = await supabase.from("users").insert({
      user_email: email,
      user_name: username,
    });
    if (error) {
      setError(error.message);
    }
  };

  return {
    signUp,
    error,
    createUser,
  };
};
