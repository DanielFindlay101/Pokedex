import { TrashIcon } from "@heroicons/react/20/solid";
import { useApi } from "../utils/useApi";
import { PokemonData } from "../utils/interface";
import { useDelete } from "../hooks/useDelete";

interface FavCardProps {
  fav: PokemonData;
}

export default function FavCards({ fav }: FavCardProps) {
  const { getPokemonImage } = useApi();
  const { deleteFromFavs } = useDelete();

  const handleDelete = (pokemonId: number) => {
    deleteFromFavs(pokemonId);
  };

  return (
    <>
      <img
        src={getPokemonImage(fav.pokemonID)}
        alt="pokemon-sprite"
        className="w-32"
      />
      <div className="w-full flex justify-evenly">
        <h1 className="uppercase">{fav.name}</h1>
        <TrashIcon
          className="w-5"
          onClick={() => handleDelete(fav.pokemonID)}
        />
      </div>
    </>
  );
}
