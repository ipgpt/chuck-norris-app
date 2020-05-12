import React from "react";
import "./Favourite.scss";
import JokesList from "../JokesList";

function Favourite(props) {
  const { favouriteData, checkFavouriteItem, removeFromFavourite } = props;

  return (
    <div className="favourite">
      <div className="favourite__mask">Favourite</div>
      <div className="favourite__content">
        <div className="favourite__list">
          <JokesList
            jokeData={favouriteData}
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
