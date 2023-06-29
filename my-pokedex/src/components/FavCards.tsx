import { TrashIcon } from "@heroicons/react/20/solid"
import getPokemonImage from "../utils/api"

interface FavCardProps {
    fav: { name: string, id: number }
    deleteFromFavs: (id: number) => void
}

export default function FavCards({ fav, deleteFromFavs }:FavCardProps ) {

  return (
    <>
        <img src={getPokemonImage(fav.id)} alt="pokemon-sprite"
         className="w-32"
        />
        <div className="w-full flex justify-evenly">
            <h1 className="uppercase">{fav.name}</h1>
            <TrashIcon
            className="w-5"
            onClick={() => deleteFromFavs(fav.id)} 
            />
        </div>
    </>
  )
}
