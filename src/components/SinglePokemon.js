import React from "react";

const SinglePokemon = ({singlePokemon, onPokemonClick}) => {

    const endOfURL = singlePokemon.url.slice(-5)
    const PokemonNumber = endOfURL.replace(/\D/g, "");


    const handleClick = function() {
        onPokemonClick(singlePokemon)
    };

    return (
        <>
        <li >
            <div className="pokemon_name"  onClick={handleClick}>{ PokemonNumber } : {singlePokemon.name} </div>
            {/* <div className="pokemon_url" >{singlePokemon.url} </div> */}
            {/* <div className="pokemon_url" > </div> */}
            <div className="pokemon_image" ><img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${PokemonNumber}.png` }></img></div>
        </li>
        </>
    )
}

export default SinglePokemon;


