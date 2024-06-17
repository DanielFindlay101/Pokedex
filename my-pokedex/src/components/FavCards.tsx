import { TrashIcon } from "@heroicons/react/20/solid";
import { useApi } from "../utils/useApi";
import { FavPokemon } from "../utils/interface";
import { useHandleFavs } from "../hooks/useHandleFavs";

interface FavCardProps {
  fav: FavPokemon;
}

export default function FavCards({ fav }: FavCardProps) {
  const { getPokemonImage } = useApi();
  const { deleteFav } = useHandleFavs();

  return (
    <>
      <img
        src={getPokemonImage(fav.pokemon_id)}
        alt="pokemon-sprite"
        className="w-32"
      />
      <div className="w-full flex justify-evenly">
        <h1 className="uppercase">{fav.pokemon_name}</h1>
        <TrashIcon
          className="w-5 hover:cursor-pointer"
          onClick={() => deleteFav(fav.pokemon_id)}
        />
      </div>
    </>
  );
}
