import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="w-full h-16 bg-yellow-100 flex items-center justify-around">
      <h1 className="text-black text-lg">POKEDEX</h1>
      <Link to="/favourites">
        <button className=" bg-blue-200 p-2 rounded-md text-sm hover:bg-blue-300">
          Favourites
        </button>
      </Link>
    </nav>
  );
}
