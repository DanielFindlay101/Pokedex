import { TrashIcon } from "@heroicons/react/20/solid"
import { useFavStore } from "../store/useFavStore"

interface FavCardProps {
    fav: {
        name: string,
        id: number
    }
}

export default function FavCards({ fav }:FavCardProps ) {
    const favPokemonID = useFavStore((state) => state.favPokemonID)
    const removeFromFavs = useFavStore((state) => state.removeFromFavs)

  return (
    <div className="w-40 h-40 bg-red-200">
        <h1>{fav.name}</h1>
        <p>{fav.id}</p>
        <TrashIcon
         className="w-5"
         onClick={() => removeFromFavs(favPokemonID)} 
        />
    </div>
  )
}
