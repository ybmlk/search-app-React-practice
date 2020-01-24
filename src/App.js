import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import SearchForm from './components/SearchForm'
import Results from './components/Results'

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  addListItem = () => {
    const listGroupItem = document.createElement('div');
    listGroupItem.className = 'list-group-item';
    const listItem = document.getElementById('list-item');
    listGroupItem.innerText = 'New list item';
    listItem.appendChild(listGroupItem);
  }

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
            <Row>
              <Col>
                <h1>Click on the list</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this.addListItem}> Add list item </Button>
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
