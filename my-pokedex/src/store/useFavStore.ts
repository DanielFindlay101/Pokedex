import { create } from "zustand";

interface FavState {
    favPokemonID: number | null
    favPokemon: {
        name: string,
        id: number
    }[]
    setFavPokemonID: (id: number) => void
    addToFavs: (pokemonName: string, pokemonID: number) => void
    removeFromFavs: (id: number | null) => void
}

export const useFavStore = create<FavState>()((set) => ({
    favPokemonID: null,
    favPokemon: [],
    setFavPokemonID: (id) => set((state) => ({ favPokemonID: state.favPokemonID = id})),
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