import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./App.scss";
import JokesForm from "./JokesForm";
import JokesList from "./JokesList";
import Favourite from "./Favourite";

function App() {
  const [state, setState] = useState({
    jokeData: {},
    isOpenFavourite: false,
    favouriteDate: {
      data: {
        result: [],
      },
    },
  });

  function getData(data) {
    setState({ ...state, jokeData: data });
  }

  function handleFavourite() {
    setState({ ...state, isOpenFavourite: !state.isOpenFavourite });
  }

  return (
    <div className={state.isOpenFavourite ? "App App--grey" : "App"}>
      <header className="header">
        <div className="header__headline">
          {state.isOpenFavourite ? "" : "MSI 2020"}
        </div>
        <button
          className={
            state.isOpenFavourite
              ? "header__favourite header__favourite--open"
              : "header__favourite"
          }
          onClick={handleFavourite}
        >
          Favourite
        </button>
      </header>
      {state.isOpenFavourite ? (
        <Favourite />
      ) : (
        <>
          <main>
            <Row>
              <Col className="column" xl={8}>
                <JokesForm getData={getData} />
                <JokesList joke={state.jokeData} />
              </Col>
              <Col className="column" xl={4}>
                Favourite (in desktop)
              </Col>
            </Row>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
