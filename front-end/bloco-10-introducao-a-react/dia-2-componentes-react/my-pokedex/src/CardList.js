import React from "react";
import pokemons from "./data";
import Cards from './Cards'

class CardList extends React.Component{
  render(){
    return(
      <section>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className='pokemon-info'>
          <Cards data={pokemon} />
          </div>
        ))}
      </section>
    );
  }
}

export default CardList;