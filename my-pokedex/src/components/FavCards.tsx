import { TrashIcon } from "@heroicons/react/20/solid";
import { useApi } from "../utils/useApi";
import { FavPokemon } from "../utils/interface";
import { useGetPokemonName } from "../hooks/useGetPokemonName";

interface FavCardProps {
  fav: FavPokemon;
}

export default function FavCards({ fav }: FavCardProps) {
  const { getPokemonImage } = useApi();
  const { name } = useGetPokemonName(fav.pokemon_id);
  console.log(name);
  return (
    <>
      <img
        src={getPokemonImage(fav.pokemon_id)}
        alt="pokemon-sprite"
        className="w-32"
      />
      <div className="w-full flex justify-evenly">
        <h1 className="uppercase">{name}</h1>
        <TrashIcon
          className="w-5"
          // onClick={() => handleDelete(fav.pokemonID)}
        />
      </div>
    </>
  );
}
