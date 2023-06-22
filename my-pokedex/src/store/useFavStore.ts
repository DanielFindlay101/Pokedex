import { create } from "zustand";

interface FavState {
    favPokemon: {
        name: string,
        id: number
    }[]
    addToFavs: (pokemonName: string, pokemonID: number) => void
    removeFromFavs: (id: number) => void
}

export const useFavStore = create<FavState>()((set) => ({
    favPokemon: [],
    addToFavs: (pokemonName, pokemonID) => set((state) => ({ 
        favPokemon: [
            ...state.favPokemon,
            {
                name: pokemonName,
                id: pokemonID
            }
        ] 
    })),
    removeFromFavs: (id) => set((state) => ({
        favPokemon: state.favPokemon.filter((pokemon) => pokemon.id !== id)
    }))
}))