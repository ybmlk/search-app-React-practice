import React from 'react'
import {
  Container,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'


const Results = () => {
  return (
    <Container>
      <h2>Result List</h2>
      <ListGroup id="list-item">
        <ListGroupItem href="#" key={1}>Link 1</ListGroupItem>
        <ListGroupItem href="#"key={2}>Link 2</ListGroupItem>
        <ListGroupItem href="#" key={3}>Link 3</ListGroupItem>
        <div className="list-group-item">Link 4</div>
      </ListGroup>
    </Container>
  )
}

export default Results;