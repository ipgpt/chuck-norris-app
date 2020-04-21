import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Chuck Norris App</h1>
      
        <Row>
          <Col xl={9}>1 of 2</Col>
          <Col xl={3}>2 of 2</Col>
        </Row>
      
    </div>
  );
}

export default App;
