import React from 'react';
import SinglePokemon from './SinglePokemon';

const PokemonList =({pokemon, onPokemonClick}) => {

    const PokemonItems = pokemon.map((singlePokemon, i) => {
        return <SinglePokemon 
        singlePokemon={singlePokemon}
        key={i}
        onPokemonClick={onPokemonClick}
        />
    })

    return (
        <div className="list">
            {/* <ul> */}
                {PokemonItems}
            {/* </ul> */}
        </div>
    )

}

export default PokemonList