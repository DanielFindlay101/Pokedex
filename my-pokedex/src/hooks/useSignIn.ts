import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";
import { useFavStore } from "../store/useFavStore";

export const useSignIn = () => {
  const { setUserDetails } = useFavStore();
  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log(error.message);
    }
    if (data) {
      console.log("User has successfully signed in!");
      setUserDetails(data.user);
      navigate("/");
    }
  };
  return { signIn };
};
