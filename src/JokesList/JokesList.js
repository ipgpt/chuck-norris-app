import React from "react";
import { Alert } from "react-bootstrap";
import JokesCard from "../JokesCard";

function JokesList(props) {
  const {
    jokeData,
    isFavouriteList,
    checkFavouriteItem,
    addToFavourite,
    removeFromFavourite,
  } = props;

  return (
    <>
      {Object.keys(jokeData).length ? (
        jokeData.total === 0 ? (
          <Alert variant="primary" style={{ marginTop: 20, maxWidth: "680px" }}>
            The search has not given any results
          </Alert>
        ) : jokeData.result.length ? (
          jokeData.result.map((item) => (
            <JokesCard
              key={item.id}
              item={item}
              isFavouriteList={isFavouriteList}
              checkFavouriteItem={checkFavouriteItem}
              addToFavourite={addToFavourite}
              removeFromFavourite={removeFromFavourite}
            />
          ))
        ) : null
      ) : null}
    </>
  );
}

export default JokesList;
