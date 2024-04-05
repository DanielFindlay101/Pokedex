import { TrashIcon } from "@heroicons/react/20/solid";
import { useApi } from "../utils/useApi";
import { PokemonData } from "../utils/interface";

interface FavCardProps {
  fav: PokemonData;
}

export default function FavCards({ fav }: FavCardProps) {
  const { getPokemonImage } = useApi();
  console.log(fav);

  return (
    <>
      <img
        src={getPokemonImage(fav.pokemonID)}
        alt="pokemon-sprite"
        className="w-32"
      />
      <div className="w-full flex justify-evenly">
        <h1 className="uppercase">{fav.name}</h1>
        {/* <TrashIcon className="w-5" onClick={() => deleteFromFavs(fav.id)} /> */}
      </div>
    </>
  );
}
