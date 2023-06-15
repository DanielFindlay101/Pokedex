import Header from './components/Header'
import Select from './components/Select'
import { useFetch } from './hooks/useFetch'

function App() {
  const {pokemons} = useFetch()
  return (
    <>
     <Header />
     <Select />
    </>
  )
}

export default App