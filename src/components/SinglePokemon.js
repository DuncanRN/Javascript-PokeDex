import React from "react";

const SinglePokemon = ({singlePokemon, onPokemonClick}) => {

    const endOfURL = singlePokemon.url.slice(-5)
    const PokemonNumber = endOfURL.replace(/\D/g, "");


    const handleClick = function() {
        // got to change get the ID from singlePokemon to pass to onPokemonClick

        const endOfURL = singlePokemon.url.slice(-5)
        const pokemonID = endOfURL.replace(/\D/g, "");

        // console.log("")
        // console.log("handling click")
        // console.log("")
        // console.log("")


        onPokemonClick(pokemonID)
    };

    return (
        <>
        {/* <li > */}
            <div className="pokemon_name"  onClick={handleClick} >

            {/* onclick="doSomething();doSomethingElse();" */}


                <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonNumber}.png` }></img>
                    
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


