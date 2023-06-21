import { Link } from 'react-router-dom'
import { useFavStore } from '../store/useFavStore'

export default function Favourites() {
  const favPokemon = useFavStore((state) => state.favPokemon)

  return (
    <>
     <nav className='bg-green-300 p-4 flex justify-around'>
       <h1>My favourites</h1>
       <Link to='/'><p>Home</p></Link>
     </nav>
     <div className='w-full h-screen bg-blue-300'>
      {favPokemon.length === 0 ? 
         <p>You currently have no favourite pokemon</p> 
        :
         <h1>Your favourite Pokemon</h1>
      }
     </div>
    </>
  )
}
