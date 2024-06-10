import { useApi } from "../utils/useApi";
import { useEffect, useState } from "react";
import { useFavStore } from "../store/useFavStore";
import { PokemonData } from "../utils/interface";
import { supabase } from "../../supabase";

interface CardProps {
  pokemonID: number;
}

export default function Card({ pokemonID }: CardProps) {
  const setShowNotification = useFavStore((state) => state.setShowNotification);
  const setShowError = useFavStore((state) => state.setShowError);
  const showError = useFavStore((state) => state.showError);
  const pokemonDescription = useFavStore((state) => state.pokemonDescription);
  const pokemonType = useFavStore((state) => state.pokemonType);
  const pokemonName = useFavStore((state) => state.pokemonName);
  const userId = useFavStore((state) => state.userDetails?.id);
  const [pokemon, setPokemon] = useState<PokemonData>({
    uuid: 1,
    name: "",
    type: "",
    pokemonID: 1,
  });
  const {
    getPokemonImage,
    getPokemonDescription,
    getPokemonType,
    getPokemonName,
  } = useApi();

  useEffect(() => {
    getPokemonDescription(pokemonID);
    getPokemonType(pokemonID);
    getPokemonName(pokemonID);
    setPokemon({
      uuid: pokemonID,
      name: pokemonName,
      type: pokemonType,
      pokemonID: pokemonID,
    });
    setShowError(false);
  }, [pokemonID, pokemonName, pokemonType]);

  const handleFavourite = async (pokemon: PokemonData) => {
    const { error } = await supabase
      .from("user_fav")
      .insert({ user_id: userId, pokemon_id: pokemon.pokemonID });
  };

  setTimeout(() => {
    setShowNotification(false);
  }, 5000);

  return (
    <div className="w-80 md:w-96 flex flex-col bg-slate-200 shadow-xl rounded-2xl">
      {!pokemonID ? (
        <h1 className="p-4 bg-green-300 flex justify-center">
          Select a Pokemon to get started!
        </h1>
      ) : (
        <>
          <h1 className="bg-green-200 p-2 flex justify-center uppercase">
            {pokemonName}
          </h1>
          <div className="bg-yellow-100 flex justify-center">
            <img
              src={getPokemonImage(pokemonID)}
              alt="pokemon-sprite"
              className="rounded-b-3xl w-64"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p>{pokemonDescription}</p>
            <div className="card-actions bg-red-200 justify-between items-center rounded-md">
              <span className="pl-2 uppercase">Type: {pokemonType}</span>
              <button
                onClick={() => handleFavourite(pokemon)}
                className="btn btn-secondary rounded-md"
              >
                <span className="text-red-500 text-xl md:text-3xl hover:text-red-300">
                  ❤️
                </span>
              </button>
            </div>
          </div>
          {showError && (
            <p className="text-center p-1 text-red-600">
              Pokemon already in favourites!
            </p>
          )}
        </>
      )}
    </div>
  );
}
