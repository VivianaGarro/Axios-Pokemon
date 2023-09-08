import axios from "axios";
import './PokemonList.css';
import { useState } from "react";

const PokemonList = () => {

    const [responseList, setResponseList] = useState([]);

    const fetchPokemon =() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000')
        .then(response =>{
            console.log(response.data);
            setResponseList(response.data.results);
        })

    }
    return(
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>
                {responseList.map((pokemon, index) =>{
                    return(<li key={index}>{pokemon.name}</li>)
                }
                )}
            </ul>
        </div>
    );
}

export default PokemonList;

