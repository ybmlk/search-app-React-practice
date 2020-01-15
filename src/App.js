import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import SearchForm from './components/SearchForm'
import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Search App</h1>
                <p>This is a simple search app</p>
              </Col>
              <Col>
                <SearchForm />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Results />
      </div>
    );
  }
}

export default App;
