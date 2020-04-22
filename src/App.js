import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__headline">MSI 2020</div>
        <div className="header__favourite">Favourite</div>
      </header>
      <main>
        <Row className="row">
          <Col xl={8}>
            
          </Col>
          <Col xl={4}>Favourite (in desktop)</Col>
        </Row>
      </main>
    </div>
  );
}

export default App;
