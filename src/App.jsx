import { useEffect, useState } from "react"
import "./App.css"
import PokemonCard from "./Components/PokemonCard"

function App() {
  const [pokemonData, setPokemonData] = useState([])

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

  return (
    <>
      <h1 className="text-3xl underline font-medium text-center my-8">
        Pokemon Data
      </h1>
      <main className="max-w-7xl px-4 mx-auto grid grid-auto-columns gap-4">
        {pokemonData.length > 0 ? (
          pokemonData.map((pokemon, idx) => (
            <PokemonCard key={pokemon.name} idx={idx} {...pokemon} />
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </main>
    </>
  )
}

export default App
