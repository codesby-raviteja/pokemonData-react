import { useEffect, useState } from "react"
import "./App.css"
import PokemonCard from "./Components/PokemonCard"

function App() {
  const [pokemonData, setPokemonData] = useState([])
 
  const [query, setQuery] = useState("")

  useEffect(() => {
    getPokemonData()
  }, [])

  const getPokemonData = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      const data = await res.json()

      setPokemonData(data?.results)
    } catch (err) {
      console.log(err.message)
    }
  }

  const filteredData = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="bg-gray-200 py-8 min-h-screen">
      <h1 className="text-3xl underline font-medium text-center ">
        Pokemon Data
      </h1>
      <div className="bg-gray-200 max-w-7xl mx-auto px-4 py-2 flex gap-4 my-4">
        <input
          type="text"
          className="border p-1 w-[300px] placeholder:font-medium placeholder:text-white bg-gray-700 text-white "
          placeholder="search for pokemon "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
  
      </div>
      <main className="max-w-7xl px-4 mx-auto grid grid-auto-columns gap-4">
        {pokemonData.length > 0 ? (
          filteredData.length > 0 ? (
            filteredData.map((pokemon, idx) => (
              <PokemonCard key={pokemon.name} idx={idx} {...pokemon} />
            ))
          ) : (
            <h2 className="text-2xl text-center font-medium text-red-400">
              No Pokemon Found
            </h2>
          )
        ) : (
          <h2>Loading</h2>
        )}
      </main>
    </div>
  )
}

export default App
