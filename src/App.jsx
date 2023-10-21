import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/cards/PokemonCard'


function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    const fetchPokemonData = async() => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=649')
        const data = await response.json()
        console.log(data)
        
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            
            const pokemonResponse = await fetch(pokemon.url)
            const pokemonData = await pokemonResponse.json()

            console.log(pokemonData)
            const types = pokemonData.types.map((type) => type.type.name)
            const image = pokemonData.sprites.front_default

            return { name:pokemonData.name, id: pokemonData.id ,types, image, weight: pokemonData.weight}
          })
        )
        setPokemonList(pokemonDetails)
        
      } catch (error){
        console.log('Error fetching Pokémon Data', error);
      }
    }
    fetchPokemonData()
  }, [])


  

  return (
    <div>
      <h1>Pokedex</h1>
      <div className='cards-section'>
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemonData={pokemon} />
        ))}
      </div>
    </div>
  )
}

export default App
