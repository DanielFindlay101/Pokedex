import Favourites from './pages/Favourites';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useFavStore } from './store/useFavStore';

function App() {
  const favPokemon = useFavStore((state) => state.favPokemon)
  console.log(favPokemon);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </>
  )
}

export default App