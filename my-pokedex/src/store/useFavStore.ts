import { create } from "zustand";
import { User } from "@supabase/supabase-js";

interface FavState {
  // favPokemon: PokemonData[];
  // setFavoritePokemon: (val: PokemonData) => void;
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

export const useFavStore = create<FavState>()((set) => ({
  // favPokemon: [],
  // setFavoritePokemon: (favPokemon) => {
  //   set((state) => ({
  //     favPokemon: [
  //       ...state.favPokemon,
  //       {
  //         uuid: favPokemon.uuid,
  //         name: favPokemon.name,
  //         type: favPokemon.type,
  //         pokemonID: favPokemon.pokemonID,
  //       },
  //     ],
  //   }));
  // },
  showNotification: false,
  setShowNotification: (val) =>
    set((state) => ({
      showNotification: (state.showNotification = val),
    })),
  pokemonDescription: "",
  setPokemonDescription: (val) =>
    set((state) => ({
      pokemonDescription: (state.pokemonDescription = val),
    })),
  pokemonType: "",
  setPokemonType: (val) =>
    set((state) => ({
      pokemonType: (state.pokemonType = val),
    })),
  pokemonName: "",
  setPokemonName: (val) =>
    set((state) => ({
      pokemonName: (state.pokemonName = val),
    })),
  showError: false,
  setShowError: (val) =>
    set((state) => ({
      showError: (state.showError = val),
    })),
  userDetails: null,
  setUserDetails: (val) =>
    set((state) => ({
      userDetails: (state.userDetails = val),
    })),
}));
