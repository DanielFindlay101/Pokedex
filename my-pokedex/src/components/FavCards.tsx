import { TrashIcon } from "@heroicons/react/20/solid"
import { useFavStore } from "../store/useFavStore"
import getPokemonImage from "../utils/api"

interface FavCardProps {
    fav: {
        name: string,
        id: number
    }
}

export default function FavCards({ fav }:FavCardProps ) {
    const removeFromFavs = useFavStore((state) => state.removeFromFavs)

  return (
    <div className="w-40 h-40 bg-red-200 rounded-lg flex flex-col items-center">
        <img src={getPokemonImage(fav.id)} alt="pokemon-sprite"
         className="w-32"
        />
        <div className=" w-full flex justify-evenly">
            <h1>{fav.name}</h1>
            <TrashIcon
            className="w-5"
            onClick={() => removeFromFavs(fav.id)} 
            />
        </div>
    </div>
  )
}
