import { create } from "zustand";

interface FavState {
    favPokemon: {
        name: string,
        id: string
    }[]
    addToFavs: (pokemon: string) => void
    removeFromFavs: (id: string) => void
}

export const useFavStore = create<FavState>()((set) => ({
    favPokemon: [],
    addToFavs: (pokemon) => set((state) => ({ 
        favPokemon: [
            ...state.favPokemon,
            {
                name: pokemon,
                id: pokemon
            }
        ] 
    })),
    removeFromFavs: (id) => set((state) => ({
        favPokemon: state.favPokemon.filter((pokemon) => pokemon.id !== id)
    }))
}))