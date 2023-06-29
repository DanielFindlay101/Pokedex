import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'
import FavCards from '../components/FavCards'
import { useFavStore } from '../store/useFavStore'

export default function Favourites() {
  const [favs, setFavs] = useState([{ name: '', id: 0 }])
  const favPokemon = useFavStore((state) => state.favPokemon)
  const removeFromFavs = useFavStore((state) => state.removeFromFavs)

  console.log('storage', favs)
  console.log('state', favPokemon)

  useEffect(() => {
   const myFavs = JSON.parse(localStorage.getItem('favs')!)
   setFavs(myFavs)
  }, [favPokemon])

  const deleteFromFavs = (id: number) => {
    const filtered = favs.filter((x) => x.id !== id)
    localStorage.setItem('favs', JSON.stringify(filtered))
    removeFromFavs(id)
  }

  return (
    <>
      <nav className='bg-green-300 p-4 flex justify-around'>
        <h1>My favourites</h1>
        <Link to='/'>
          <ArrowLeftOnRectangleIcon className='w-5 cursor-pointer' />
        </Link>
      </nav>
      <div className='w-full h-screen bg-blue-300 p-10 flex justify-center'>
        {favs.length === 0 ? 
          <p>You currently have no favourite pokemon</p> 
          :
          <>
            <div className='flex flex-wrap gap-12 h-screen p-4'>
              {favs.map((fav, index) => (
                <div key={index} className='w-40 h-40 bg-red-200 rounded-lg flex flex-col items-center '>
                <FavCards
                  fav={fav}
                  deleteFromFavs = {deleteFromFavs}  
                />
                </div>
              ))}
            </div>
          </>
      }
     </div>
    </>
  )
}
