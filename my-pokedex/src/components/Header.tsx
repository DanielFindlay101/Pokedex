import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className='flex w-full bg-yellow-100 justify-around items-center p-2'>
        <h1 className='text-black text-lg'>POKEDEX</h1>
        <Link to='/favourites'><p className="bg-secondary px-4 rounded-md text-3xl cursor-pointer text-red-500">
          ❤️
        </p></Link>
    </nav>
  )
}
