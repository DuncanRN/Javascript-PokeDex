import React, {useState, useEffect} from 'react';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../components/PokemonDetail'

const PokemonContainer = () => {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [selectedPokemonData, setSelectedPokemonData] = useState([]);

    useEffect(() => {
        getPokemon();
    }, []); 

    const getPokemon = function(){
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
        .then(res => res.json())
        .then(pokemon => setPokemon(pokemon.results))
    };

    const onPokemonClick = function(pokemon){
        // console.log("in the click");
        setSelectedPokemon(pokemon);
        window.scrollTo(0, 0);
    }

    if(selectedPokemon){

        // console.log("IN HERE ")
        const endOfURL = selectedPokemon.url.slice(-5)
        const PokemonNumber = endOfURL.replace(/\D/g, "");
        const urlForSelected = `https://pokeapi.co/api/v2/pokemon/${PokemonNumber}/`;
        // console.log("urlForSelected is - ")
        // console.log(urlForSelected);
        fetch(urlForSelected)
        .then(res => res.json())
        .then(pokemonDetails => setSelectedPokemonData(pokemonDetails))

        // console.log("selectedPokemonData is - ")
        // console.table(selectedPokemonData);
        
        
        
    }



    return( 
        <div className="container">
            { selectedPokemon ? 
            <PokemonDetail selectedPokemonData={selectedPokemonData} 
            // spritesBackDefault={selectedPokemonData.sprites.back_default}
            /> : null }

            <PokemonList pokemon={pokemon}  onPokemonClick={onPokemonClick}/>
            

        </div>
        );


}


export default PokemonContainer;