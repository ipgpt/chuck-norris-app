import React from "react";
import "./Favourite.scss";
import JokesList from "../JokesList";

function Favourite(props) {
  const { favouriteDate, checkFavouriteItem, removeFromFavourite } = props;

  return (
    <div className="favourite">
      <div className="favourite__mask">Favourite</div>
      <div className="favourite__content">
        <div className="favourite__list">
          <JokesList
            jokeData={favouriteDate}
            isFavouriteList={true}
            checkFavouriteItem={checkFavouriteItem}
            removeFromFavourite={removeFromFavourite}
          />
        </div>
      </div>
    </div>
  );
}

export default Favourite;
