import { create } from "zustand";

interface FavState {
    favPokemon: {
        name: string,
        id: number
    }[]
    addToFavs: (pokemonName: string, pokemonID: number) => void
    removeFromFavs: (id: number | null) => void
    showNotification: boolean
    setShowNotification: (val: boolean) => void
}

export const useFavStore = create<FavState>()((set) => ({
    favPokemon: [],
    showNotification: false,
    setShowNotification: (val) => set((state) => ({ 
        showNotification: state.showNotification = val
    })),
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