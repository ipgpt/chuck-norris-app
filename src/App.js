import React, { useState, useEffect } from "react";
import "./App.scss";
import JokesForm from "./JokesForm";
import JokesList from "./JokesList";
import Favourite from "./Favourite";

function App() {
  const favouriteLocalStore =
    JSON.parse(localStorage.getItem("favourite")) || [];
  const isDesktopWidth = window.innerWidth >= 1200 ? true : false;
  const [state, setState] = useState({
    jokeData: {},
    isOpenFavourite: isDesktopWidth,
    favouriteData: { result: favouriteLocalStore },
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

  useEffect(() => {
    if (state.isOpenFavourite && window.innerWidth < 1200) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "auto");
  });

  function getData(data) {
    setState({ ...state, jokeData: data });
  }

  function handleFavouriteArea() {
    setState({ ...state, isOpenFavourite: !state.isOpenFavourite });
  }

  function checkFavouriteItem(item) {
    const {
      favouriteData: { result },
    } = state;
    return result.find((joke) => joke.id === item.id);
  }

  function addToFavourite(item) {
    const {
      favouriteData: { result },
    } = state;
    const newFavouriteStore = [...favouriteLocalStore, item];
    localStorage.setItem("favourite", JSON.stringify(newFavouriteStore));
    setState({
      ...state,
      favouriteData: { result: [...result, item] },
    });
  }

  function removeFromFavourite(item) {
    const {
      favouriteData: { result },
    } = state;
    const newFavouriteStore =
      favouriteLocalStore.filter((data) => data.id !== item.id) ||
      favouriteLocalStore;
    localStorage.setItem("favourite", JSON.stringify(newFavouriteStore));
    if (checkFavouriteItem(item)) {
      setState({
        ...state,
        favouriteData: {
          result: result.filter((joke) => joke.id !== item.id),
        },
      });
    }
  }

  return (
    <div className="App">
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
          onClick={handleFavouriteArea}
        >
          Favourite
        </button>
      </header>
      {state.isOpenFavourite ? (
        <Favourite
          favouriteData={state.favouriteData}
          checkFavouriteItem={checkFavouriteItem}
          removeFromFavourite={removeFromFavourite}
        />
      ) : null}
      <main className="main">
        <p className="main__hey">Hey!</p>
        <p className="main__title">Let’s try to find a joke for you:</p>
        <JokesForm getData={getData} />
        <JokesList
          jokeData={state.jokeData}
          isFavouriteList={false}
          checkFavouriteItem={checkFavouriteItem}
          addToFavourite={addToFavourite}
          removeFromFavourite={removeFromFavourite}
        />
      </main>
    </div>
  );
}

export default App;
