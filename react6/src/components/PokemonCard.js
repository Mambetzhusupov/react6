import React, { useState, useEffect } from "react";
import classes from './pokemonCards.module.css';

const PokemonCard = ({ pokemons }) => {
    const [pokemonDetails, setPokemonDetails] = useState([]);

    const fetchPokemonDetails = async (index) => {
        try {
            if (index < pokemons.length) {
                const response = await fetch(pokemons[index].url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch details for ${pokemons[index].name}`);
                }
                const data = await response.json();
                setPokemonDetails((prevDetails) => [...prevDetails, data]);
                fetchPokemonDetails(index + 1);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchPokemonDetails(0);
    }, [pokemons]);

    const renderPokemonCards = () => {
        return pokemonDetails.map((details, index) => (
            <div key={index} className={classes.card}>
                <img
                    src={details.sprites.other.dream_world.front_default}
                    alt={details.name}
                />
                <h3>{details.name}</h3>
            </div>
        ));
    };

    return (
        <div className={classes.cardWrapper}>
            {renderPokemonCards()}
        </div>
    );
};

export default PokemonCard;