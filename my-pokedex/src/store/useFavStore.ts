import { create } from "zustand";

interface FavState {
  favPokemon: {
    name: string;
    id: number;
  }[];
  addToFavs: (pokemonName: string, pokemonID: number) => void;
  removeFromFavs: (id: number | null) => void;
  showNotification: boolean;
  setShowNotification: (val: boolean) => void;
  pokemonDescription: string;
  setPokemonDescription: (id: string) => void;
  pokemonType: string;
  setPokemonType: (id: string) => void;
  pokemonName: string;
  setPokemonName: (id: string) => void;
}

export const useFavStore = create<FavState>()((set) => ({
  favPokemon: [],
  showNotification: false,
  setShowNotification: (val) =>
    set((state) => ({
      showNotification: (state.showNotification = val),
    })),
  addToFavs: (pokemonName, pokemonID) =>
    set((state) => ({
      favPokemon: [
        ...state.favPokemon,
        {
          name: pokemonName,
          id: pokemonID,
        },
      ],
    })),
  removeFromFavs: (id) =>
    set((state) => ({
      favPokemon: state.favPokemon.filter((pokemon) => pokemon.id !== id),
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
}));
