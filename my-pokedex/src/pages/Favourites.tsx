import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
import FavCards from "../components/FavCards";
import { useSupabase } from "../hooks/useSupabase";
import { PokemonData } from "../utils/interface";

export default function Favourites() {
  const { favPokemon } = useSupabase();
  const [favs, setFavs] = useState<PokemonData[]>();

  console.log(favPokemon);

  return (
    <>
      <nav className="bg-green-300 p-4 flex justify-around">
        <h1>My favourites</h1>
        <Link to="/">
          <ArrowLeftOnRectangleIcon className="w-5 cursor-pointer" />
        </Link>
      </nav>
      <div className="w-full h-screen bg-blue-300 p-10 flex overflow-auto justify-center">
        {favs?.length === 0 ? (
          <div className="">
            <p>You currently have no favourite pokemon</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center justify-items-start content-start gap-12">
              {favs?.map((fav, index) => (
                <div
                  key={index}
                  className="w-40 h-40 bg-red-200 rounded-lg flex flex-col items-center shadow-xl"
                >
                  <FavCards fav={fav} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
