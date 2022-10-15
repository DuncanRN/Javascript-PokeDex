import React from "react";

const PokemonDetail = ({selectedPokemonData, onArrowClick}) => {
    
    // console.log("selectedPokemonData is - ")
    // console.table(selectedPokemonData);
    // const nameUpper = selectedPokemonData.name.toUpperCase();

    // const upperName =selectedPokemonData.name[0].toUpperCase;

    const handleClick = function() {
        onArrowClick()
        
    };

    const pokemonName = selectedPokemonData.name.toUpperCase();

    return (
        <div className="detail">
            <div className="arrow"  onClick={handleClick}> &#8592;
            </div>
            <div className="detail_text" >
                <h4><b>ID : </b>{selectedPokemonData.id}</h4>
                <h4><b>name: </b>{pokemonName} </h4>

            {/* { console.table(selectedPokemonData) } */}
             {/* <h3><b>Sprites: </b>{selectedPokemonData["stats"]["stat"]["name"]}</h3>  */}
            
                <h4><b>Base XP : </b>{selectedPokemonData.base_experience}</h4>
                <h4><b>Height : </b>{selectedPokemonData.height}</h4>
                <h4><b>Weight : </b>{selectedPokemonData.weight}</h4>
            </div>
            {/* <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${PokemonNumber}.png` }></img> */}
            <div className="detail_image" >
                <img src= { `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${selectedPokemonData.id}.svg` }></img>
            

            </div>
            {/* <h3><b>Sprite : </b>{selectedPokemonData.stats.base_stat}</h3> */}
            {/* <h3><b>Landlocked? </b>{selectedPokemonData.sprites.back_default
}</h3>  */}


            <div className="arrow"  onClick={handleClick}> &#8594;  </div>
        </div>
    )
}

export default PokemonDetail;