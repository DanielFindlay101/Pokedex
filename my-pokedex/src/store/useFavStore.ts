import { create } from "zustand";

interface FavState {
    favPokemon: {
        // name: string,
        id: number
    }[]
    addToFavs: (pokemonID: number) => void
    removeFromFavs: (id: number) => void
}

export const useFavStore = create<FavState>()((set) => ({
    favPokemon: [],
    addToFavs: (pokemonID) => set((state) => ({ 
        favPokemon: [
            ...state.favPokemon,
            {
                id: pokemonID
            }
        ] 
    })),
    removeFromFavs: (id) => set((state) => ({
        favPokemon: state.favPokemon.filter((pokemon) => pokemon.id !== id)
    }))
}))