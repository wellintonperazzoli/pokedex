import React, { Component } from 'react'
import { Badge, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Info extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.state = {
      isLoaded: false,
      pokemon: {}
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/'+this.id)
    .then(res => res.json())
    .then( (result) => {
      this.setState({
        isLoaded: true,
        pokemon: result
      });
    });
  }

  render(){
      const { isLoaded, pokemon } = this.state;
      if (!isLoaded) {
        return (
          <section className="info">
            <div className="info-header">
              Loading...
            </div>
          </section>
        );
      } 
      else {
        var id = ('000'+pokemon.id).slice(-3);
        return (
          <Container className="info">
                <Row>
                  <Col>
                    <h1 className="info-title">{pokemon.name}</h1>
                    <hr/>
                  </Col>
                </Row>
                <Row>
                <Col>
                  <img className="info-img" src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+id+'.png'} alt={pokemon.name}/>
                </Col>
                <Col className="info-content">
                    <p><strong>Height:</strong> {pokemon.height}</p>
                    <p><strong>Weight:</strong> {pokemon.weight}</p>
                    <p>
                      <strong>Abilities:</strong> {pokemon.moves.map((m,index) => {
                        return (
                          <span key={index}>
                            {index === 0 ? m.move.name : ", " + m.move.name}
                          </span>
                        )
                      })}
                    </p>
                    <strong>Types: </strong>
                    <p>
                    {pokemon.types.map((t) => {
                      return (
                        <Badge variant={t.type.name} key={pokemon.id+" "+t.type.name}>
                          {t.type.name}
                        </Badge>
                      )
                    })}
                    </p>
                </Col>
                </Row>
                <hr/>
                <Link className="btn btn-info" to="/">Voltar!</Link>
          </Container>
      )
    }
  }
}

export default Info