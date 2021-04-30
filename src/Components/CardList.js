import React, { Component } from 'react';
import PokeCard from './PokeCard';
import SearchBox from './SearchBox';
import { Col, Container, Row } from 'react-bootstrap'

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      pokemons: []
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
    .then(res => res.json())
    .then( (result) => {
      this.setState({
        isLoaded: true,
        loadedPokemons: result.results,
        pokemons: result.results,
      });
    });
  }

  filterPokemon = (e) => {
    const pokemons = this.state.loadedPokemons.filter( p => p.name.includes(e.target.value));
    this.setState({
      'pokemons': pokemons
    })
  }


  render(){
    const { isLoaded, pokemons } = this.state;
    if (!isLoaded) {
      return ( 
        <Container>
          <Row>
            <Col className="loading">
              <img src={'https://i.stack.imgur.com/h6viz.gif'} />
            </Col>
          </Row>
        </Container>
      );
    } 
    else {
      return (
        <Container>
          <SearchBox placeholder="Buscar pokemon..." action={this.filterPokemon}/>
          <Row>
            {pokemons.map((pokemon) => (
              <PokeCard pokemon={pokemon} key={pokemon.name}></PokeCard>
            ))}
          </Row>
        </Container>
      );
    }
  }
}  

export default CardList