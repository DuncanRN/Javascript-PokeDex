import React from "react";

const SinglePokemon = ({singlePokemon, onPokemonClick}) => {

    const endOfURL = singlePokemon.url.slice(-5)
    const PokemonNumber = endOfURL.replace(/\D/g, "");


    const handleClick = function() {
        onPokemonClick(singlePokemon)
        
    };

    return (
        <>
        {/* <li > */}
            <div className="pokemon_name"  onClick={handleClick} >

            {/* onclick="doSomething();doSomethingElse();" */}


                <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${PokemonNumber}.png` }></img>
                    
                {/* { PokemonNumber } :  */}
                {singlePokemon.name} 
                

            {/* <div className="pokemon_url" >{singlePokemon.url} </div> */}
            {/* <div className="pokemon_url" > </div> */}
            </div>
        {/* </li> */}
        </>
    )
}

export default SinglePokemon;


