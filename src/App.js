import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Chuck Norris App</h1>
      
        <Row className="row">
          <Col xl={8}>1 of 2</Col>
          <Col xl={4}>2 of 2</Col>
        </Row>
      
    </div>
  );
}

export default App;
