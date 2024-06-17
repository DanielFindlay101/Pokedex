import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { User } from "@supabase/supabase-js";

interface FavState {
  showNotification: boolean;
  setShowNotification: (val: boolean) => void;
  pokemonDescription: string;
  setPokemonDescription: (id: string) => void;
  pokemonType: string;
  setPokemonType: (id: string) => void;
  pokemonName: string;
  setPokemonName: (id: string) => void;
  showError: boolean;
  setShowError: (val: boolean) => void;
  //Value of a signed in user
  userDetails: User | null;
  setUserDetails: (val: User | null) => void;
}

export const useFavStore = create<FavState>()(
  devtools(
    persist(
      (set) => ({
        showNotification: false,
        setShowNotification: (val) => {
          set({ showNotification: val });
        },
        pokemonDescription: "",
        setPokemonDescription: (val) => {
          set({ pokemonDescription: val });
        },
        pokemonType: "",
        setPokemonType: (val) => {
          set({ pokemonType: val });
        },
        pokemonName: "",
        setPokemonName: (val) => {
          set({ pokemonName: val });
        },
        showError: false,
        setShowError: (val) => {
          set({ showError: val });
        },
        userDetails: null,
        setUserDetails: (val) => {
          set({ userDetails: val });
        },
      }),
      {
        name: "favPokemon",
      }
    )
  )
);
