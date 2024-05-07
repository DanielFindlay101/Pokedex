import { Link } from "react-router-dom";
import { useFavStore } from "../store/useFavStore";
import { useLogout } from "../hooks/useLogout";

export default function Header() {
  const user = useFavStore((state) => state.userDetails);
  const { logout } = useLogout();
  const username = user?.user_metadata.username;

  return (
    <nav className="w-full px-6 h-16 bg-yellow-100 flex items-center justify-between">
      <div>
        <h1 className="text-black text-lg">POKEDEX</h1>
        <p className="text-black text-sm">Welcome, {username}</p>
      </div>
      <div className="flex gap-4">
        <Link to="/favourites">
          <button className=" bg-blue-200 p-2 rounded-md text-sm hover:bg-blue-300">
            Favourites
          </button>
        </Link>
        <button
          className="p-2 rounded-md text-sm hover:bg-slate-200"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
