import React from 'react';
// import pokemons from './data';

class Cards extends React.Component {
  render() {
    const { data } = this.props;
    const { name, type, averageWeight, image } = data;
    const { value, measurementUnit } = averageWeight
    return (
      <article className='pokemonInfo'>
        <p id='name'>{name}</p>
        <p>{type}</p>
        <p>{value}{measurementUnit}</p>
        <img src={image} alt={`Foto do ${name}`} />
      </article >
    )
  }
}

export default Cards;