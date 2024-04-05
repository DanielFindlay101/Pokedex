import { create } from "zustand";
import { PokemonData } from "../utils/interface";

interface FavState {
  favPokemon: PokemonData[];
  addToFavs: (val: PokemonData) => void;
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
}

export const useFavStore = create<FavState>()((set) => ({
  favPokemon: [],
  addToFavs: (pokemon) =>
    set((state) => ({
      favPokemon: [
        ...state.favPokemon,
        {
          pokemon: pokemon,
        },
      ],
    })),
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
}));
