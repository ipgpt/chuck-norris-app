import React, { useState, useEffect } from "react";
import "./App.scss";
import JokesForm from "./JokesForm";
import JokesList from "./JokesList";
import Favourite from "./Favourite";

function App() {
  const [state, setState] = useState({
    jokeData: {},
    isOpenFavourite: window.innerWidth >= 1200 ? true : false,
    favouriteDate: {
      data: {
        result: [],
      },
    },
  });

  function resizeWindow() {
    if (window.innerWidth >= 1200) {
      setState({ ...state, isOpenFavourite: true });
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
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
        <div
          className={
            state.isOpenFavourite
              ? "header__headline header__headline--hidden"
              : "header__headline"
          }
        >
          MSI 2020
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
      {state.isOpenFavourite ? <Favourite /> : null}
      <main className="main">
        <JokesForm getData={getData} />
        <JokesList joke={state.jokeData} />
      </main>
    </div>
  );
}

export default App;
