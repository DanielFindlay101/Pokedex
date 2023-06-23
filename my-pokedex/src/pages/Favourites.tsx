import { Link } from 'react-router-dom'
import { useFavStore } from '../store/useFavStore'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'
import FavCards from '../components/FavCards'

export default function Favourites() {
  const favPokemon = useFavStore((state) => state.favPokemon)

  return (
    <>
     <nav className='bg-green-300 p-4 flex justify-around'>
       <h1>My favourites</h1>
       <Link to='/'>
        <ArrowLeftOnRectangleIcon className='w-5 cursor-pointer' />
       </Link>
     </nav>
     <div className='w-full h-screen bg-blue-300 p-10 grid grid-cols-3 justify-items-center'>
      {favPokemon.length === 0 ? 
         <p>You currently have no favourite pokemon</p> 
        :
        <>
        {favPokemon.map((fav, index) => (
          <div key={index}>
            <FavCards fav={fav} />
          </div>
        ))}
        </>
      }
     </div>
    </>
  )
}
