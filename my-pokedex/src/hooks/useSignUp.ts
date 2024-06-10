import { supabase } from "../../supabase";
import { useState } from "react";
import { useFavStore } from "../store/useFavStore";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const { setUserDetails } = useFavStore();
  const navigate = useNavigate();

  // Create a new user
  const createUser = async (
    id: string | undefined,
    email: string | undefined,
    username: string | undefined
  ) => {
    const { data, error } = await supabase.from("users").insert([
      {
        id: id,
        user_email: email,
        user_name: username,
      },
    ]);
    if (error) {
      console.error("Error inserting data:", error);
      return;
    }
    console.log("Data inserted successfully!", data);
  };

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
      console.log("User has successfully signed up!", data.user?.id);
      setUserDetails(data.user);
      createUser(
        data.user?.id,
        data.user?.email,
        data.user?.user_metadata.username
      );
      navigate("/");
    }
  };

  return {
    signUp,
    error,
  };
};
