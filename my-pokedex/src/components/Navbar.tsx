import { Link } from "react-router-dom";

interface NavbarProps {
  path: string;
  name: string;
}

export default function Navbar({ path, name }: NavbarProps) {
  return (
    <nav className="w-full h-16 bg-yellow-100 flex justify-evenly items-center ">
      <h1>Pokédex</h1>
      <Link to={path}>
        <button className="bg-blue-200 p-2 rounded-md text-sm hover:bg-blue-300">
          {name}
        </button>
      </Link>
    </nav>
  );
}
