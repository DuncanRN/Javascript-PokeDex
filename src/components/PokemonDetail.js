import React from "react";

const PokemonDetail = ({selectedPokemonData, onRandomClick, onPokemonClick}) => {
    
    // console.log("selectedPokemonData is - ")
    // console.table(selectedPokemonData);
    // const nameUpper = selectedPokemonData.name.toUpperCase();

    // const upperName =selectedPokemonData.name[0].toUpperCase;

    const handleRandomClick = function() {
        onRandomClick()
        
    };

    const handlePokemonClickPlusOne = function() {

        const pokemonID = selectedPokemonData.id;
        const pokemonIDPlusOne = pokemonID+1;
        onPokemonClick(pokemonIDPlusOne);
        
    };

    
    const handlePokemonClickMinusOne = function() {

        const pokemonID = selectedPokemonData.id;
        const pokemonIDMinusOne = pokemonID-1;
        onPokemonClick(pokemonIDMinusOne);
        
    };
    

    // const pokemonName = selectedPokemonData.name.toUpperCase();

    const pokemonName = selectedPokemonData.name;

    return (
        <div className="detail">
            <div className="arrow"  
            onClick={handlePokemonClickMinusOne}
            > &#8592;
            </div>

            
            <div className="detail_image" >
                {/* <img src= { `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/${selectedPokemonData.id}.gif` }></img> */}
                <img src= { `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${selectedPokemonData.id}.svg` }></img>
            </div>

            <div className="detail_text" >
                <h2><b> </b>{pokemonName} </h2>
                <h4><b>ID : </b>{selectedPokemonData.id}</h4>
                
            
                

            {/* { console.table(selectedPokemonData) } */}
             {/* <h3><b>Sprites: </b>{selectedPokemonData["stats"]["stat"]["name"]}</h3>  */}
            
                {/* <h4><b>Base XP : </b>{selectedPokemonData.base_experience}</h4>
                <h4><b>Height : </b>{selectedPokemonData.height}</h4>
                <h4><b>Weight : </b>{selectedPokemonData.weight}</h4>

                <h3><b>order </b>{selectedPokemonData.order}</h3>  */}
                <h3><b>type </b>{selectedPokemonData.types[0].type.name}</h3> 

            {/* <h3><b>forms 0  url: </b>{selectedPokemonData.forms[0].url}</h3> */}

            <h3><b>
            
            {selectedPokemonData.stats[0].stat.name}:  &nbsp;
            {selectedPokemonData.stats[0].base_stat}
            <br></br>
            
            {selectedPokemonData.stats[1].stat.name}:   &nbsp;
            {selectedPokemonData.stats[1].base_stat}
            <br></br>
            {selectedPokemonData.stats[2].stat.name}:   &nbsp;
            {selectedPokemonData.stats[2].base_stat}
            <br></br>
            {selectedPokemonData.stats[3].stat.name}:   &nbsp;
            {selectedPokemonData.stats[3].base_stat}
            <br></br>
            {selectedPokemonData.stats[4].stat.name}:   &nbsp;
            {selectedPokemonData.stats[4].base_stat}
            <br></br>
            {selectedPokemonData.stats[5].stat.name}:   &nbsp;
            {selectedPokemonData.stats[5].base_stat}
            <br></br>
            
            </b></h3> 

            </div>
            {/* <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${PokemonNumber}.png` }></img> */}
            

            <div className="detail_image" >
                <img src= { `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${selectedPokemonData.id}.gif` }></img>
            </div>
            


            <div className="arrow"  onClick={handlePokemonClickPlusOne}> &#8594;  </div>
        </div>
    )
}

export default PokemonDetail;