import { supabase } from "../../supabase";

export const useSignup = () => {
  const signUpNewUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log("Error", error);
    } else {
      console.log("User", data);
    }
  };
  return { signUpNewUser };
  //   destructure then call the function
};
