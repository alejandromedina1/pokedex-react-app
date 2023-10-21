/* eslint-disable react/prop-types */
import './style.css'
const PokemonCard = ({ pokemonData }) => {
    const {name, id, types, image, weight} = pokemonData

    return(
        <div className='card-container'>
            <div className='image-container'>
                <img className='pokemon-image' src={image} alt={name} />
            </div>
            <div className='info-container'>
                <h3 className='pokemon-id'> Pokemon #{id}</h3>
                <h2 className='pokemon-name'>{name}</h2>
                <div className='about'>
                <p className='pokemon-type'>Types: {types.join(', ')}</p>
                <p className='pokemon-weight'>Weight: {weight}</p>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;