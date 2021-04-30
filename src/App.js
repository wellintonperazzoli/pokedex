import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import './App.css'
// import './AppBEM.css'
//import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App_final.scss'
import CardList from './Components/CardList'
import Info from './Components/Info'
import { Col, Container, Navbar, Row } from 'react-bootstrap';


class App extends Component {
  render(){
    return (
      <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Row>
            <Col lg="12">
            <Navbar.Brand>Pokedéx</Navbar.Brand>
          </Col>
        </Row>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={CardList} />
            <Route path="/sobre/:id" component={Info} />
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
