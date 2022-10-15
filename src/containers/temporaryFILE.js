function PokeContainer() {
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        getPokedex();
    }, [])

    const getPokedex = function() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
        .then(result => result.json())
        .then((allPokemon) => {
            allPokemon.results.forEach((pokemon) => {
                getPokemonData(pokemon); 
            });
        })
    }

    const getPokemonData = function(pokemon) {
        let source = pokemon.url
        let pokeList = []

        fetch(source)
        .then(result => result.json())
        .then(pokeData => setPokedex(pokeData))

        console.log(pokedex)
    }

}




//--- 
//  belowe is what was in PokemonContainer.js

import React, {useState, useEffect} from 'react';
import PokemonList from '../components/PokemonList';

const PokemonContainer = () => {
    const [pokedex, setPokemon] = useState([]);

    // useEffect(() => {
    //     getPokemon();
    // }, []); 

    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2';

    const result = fetch(`${url}`, { method: 'get' })
    .then(response => response.json()) // pass the data as promise to next then block
    .then(data => {
        
        
        // console.log("This is the result")
        // console.table(result)

        console.log("This is the data.results")
        console.table(data.results)
        
        // console.log("This is the url")
        // console.log(url)
        
        // let pokemonURLs = "";
        // pokemonURLs = data.results.map(x => x.url)

        var pokemonURLS = data.results.map (function(singleP) {
            console.log("thisURL -  ");
            console.log(singleP.url);

            return fetch(`${singleP.url}}`); // make a 2nd request and return a promise
        })
            .then(response => response.json())
            .catch(err => {
                console.error('Request failed', err)
            })
            .then(      )

            // I'm using the result const to show that you can continue to extend the chain from the returned promise
            // result.then(r => {
            //     console.log(r); // 2nd request result first_stage property
            // });

    })

        // {
        //     console.log("This is x")
        //     return x.url
        //     // console.log(x, '\n');
        // }

        // console.log("This is the pokemonURL")
        // console.log(pokemonURLs, '\n');
    
        



    // const url = 'https://api.spacexdata.com/v4';

    // const result = fetch(`${url}/launches/latest`, { method: 'get' })
    // .then(response => response.json()) // pass the data as promise to next then block
    // .then(data => {
    //     const rocketId = data.rocket;

    //     console.log(rocketId, '\n');
    
    //     return fetch(`${url}/rockets/${rocketId}`); // make a 2nd request and return a promise
    // })
    // .then(response => response.json())
    // .catch(err => {
    //     console.error('Request failed', err)
    // })

    // // I'm using the result const to show that you can continue to extend the chain from the returned promise
    // result.then(r => {
    //     console.log(r.first_stage); // 2nd request result first_stage property
    // });





    // -------


    // function copyPushReplacePokedex(pokemonToAdd){

    //     const copyPokedex=[];
    //     copyPokedex.push({pokemonToAdd})
    //     setPokemon(copyPokedex)
    // }

    // function getPokemon(){
    //     fetch('https://pokeapi.co/api/v2/pokemon/1/')
    //     .then(response => response.json())
    //     .then(result => setPokemon(result))
    //     // .then(function(allpokemon){result => setPokemon(result) })

        

    //     fetch('https://pokeapi.co/api/v2/pokemon/2/')
    //     .then(response => response.json())
    //     .then(result => copyPushReplacePokedex(result)
    //         )

    // }




    


    // function getPokemon(){
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    //     .then(response => response.json())
    //     .then(function(allpokemon){
    //         allpokemon.results.forEach(function(singlePokemon){
    //             fetchPokemonData(singlePokemon); 
    //         })
    //     })
    // }

    
    // function fetchPokemonData(singlePokemon){
    //     let url = singlePokemon.url 
    //         fetch(url)
    //         .then(response => response.json())
    //         .then( 
    //             // result => console.log(result)
    //             result => setPokemon({result})
    //             // result => setPokemon([...result.pokedex, result])

    //             // const copyPokedex = [...pokedex]
    //             // copyPokedex.push({result})
    //             // setPokemon(copyPokedex)
    //         )
    // }


    // function(pokemondetails){
                // }
                // console.log(pokemondetails);

                // so right here I have the pokemondetails
                // it is console.log-ing out nicely.
                
                // I just need to add it to the state.
                
                // const copyPokedex = [...pokedex];
                // copyPokedex.push({pokemondetails});
                // setPokemon(copyPokedex);
                
                // pokedex => setPokemon(pokedex)

    // const getPokemonData = function(pokemon) {
    //     let source = pokemon.url
    //     let pokeList = []

    //     // we are about teh get the inside info about the pokemon
    //     // we also want to put in the pokemon name. 
    //     // so shouldn't we be handing the setPokemon
    //     // function just below here something better than
    //     // pokedata

    //     fetch(source)
    //     .then(result => result.json())
    //     .then(pokeData => setPokemon(pokeData))


    //     // .then(pokemon => setPokemon(pokemon.results))
    //     console.log(pokemon)
    // }

    return( 
        <div>
            {/* <PokemonList pokemon={pokemon} /> */}
        </div>
        );
}

export default PokemonContainer;