import React from "react";

const SinglePokemon = ({singlePokemon}) => {

    return (
        <>
        <li >
            <div className="pokemon_name" >{singlePokemon.name} </div>
            <div className="pokemon_url" >{singlePokemon.url} </div>
        </li>
        </>
    )
}

export default SinglePokemon;


