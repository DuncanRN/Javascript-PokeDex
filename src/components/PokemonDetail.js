import React from "react";

const PokemonDetail = ({selectedPokemonData, spritesBackDefault}) => {
    

    console.log("selectedPokemonData is - ")
    console.table(selectedPokemonData);
        

    return (
        <div className="detail">
            <h3><b>ID : </b>{selectedPokemonData.id}</h3>
            <h2><b>name: </b>{selectedPokemonData.name}</h2>

            {/* { console.table(selectedPokemonData) } */}
             {/* <h3><b>Sprites: </b>{selectedPokemonData["stats"]["stat"]["name"]}</h3>  */}
            
            <h3><b>Base XP : </b>{selectedPokemonData.base_experience}</h3>
            <h3><b>Height : </b>{selectedPokemonData.height}</h3>
            <h3><b>Weight : </b>{selectedPokemonData.weight}</h3>
            
            {/* <h3><b>Sprite : </b>{selectedPokemonData.stats.base_stat}</h3> */}
            {/* <h3><b>Landlocked? </b>{selectedPokemonData.sprites.back_default
}</h3>  */}
        </div>
    )
}

export default PokemonDetail;