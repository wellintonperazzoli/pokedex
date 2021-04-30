import React, { Component } from 'react'
import { Col, Card, Badge } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';

class PokeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      pokemon: {},
      redirect: 0,
    };
  }

  componentDidMount(){
    fetch(this.props.pokemon.url)
    .then(res => res.json())
    .then( (result) => {
      this.setState({
        isLoaded: true,
        pokemon: result,
      });
    });
  }


  render() {
    const { redirect, isLoaded, pokemon } = this.state;

    if(redirect !== 0){
      return <Redirect to={"/sobre/"+redirect} />
    }

    if (!isLoaded) {
      return (
        <Col xs="12" sm="6" md="4" lg="3">
          <Card className="card-poke loading">
            <Card.Img src={'https://i.stack.imgur.com/h6viz.gif'} />
          </Card>
        </Col>
      )
    } 
    else {
      var id = ('000'+pokemon.id).slice(-3);
      return (
        <Col xs="12" sm="6" md="4" lg="3">
          <Card className="card-poke" onClick={() => { this.setState({redirect: pokemon.id}) }}>
            <Card.Img variant="top" src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+id+'.png'} />
            <Card.Body>
              <small>Nº{id}</small>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>
                {pokemon.types.map((t) => {
                  return (
                    <Badge variant={t.type.name} key={pokemon.id+" "+t.type.name}>
                      {t.type.name}
                    </Badge>
                  )
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        )
      }
  }
}


export default PokeCard