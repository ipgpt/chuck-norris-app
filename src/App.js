import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./App.scss";
import JokesForm from "./JokesForm";
import JokesList from "./JokesList";

function App() {
  const [state, setState] = useState({});

  function getData(data) {
    setState(data);
  }

  return (
    <div className="App">
      <header className="header">
        <div className="header__headline">MSI 2020</div>
        <div className="header__favourite">Favourite</div>
      </header>
      <main>
        <Row>
          <Col className="column" xl={8}>
            <JokesForm getData={getData} />
            <JokesList joke={state} />
          </Col>
          <Col className="column" xl={4}>
            Favourite (in desktop)
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default App;
