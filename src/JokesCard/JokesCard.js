import React, { useState, useEffect } from "react";
import "./JokesCard.scss";
import linkIcon from "../assets/img/link.png";
import heartEmptyIcon from "../assets/img/heart-empty.png";
import heartFullIcon from "../assets/img/heart-full.png";

function JokesCard(props) {
  const {
    item,
    isFavouriteList,
    checkFavouriteItem,
    addToFavourite,
    removeFromFavourite,
  } = props;
  const cardClassName = isFavouriteList
    ? "jokes-card jokes-card--white"
    : "jokes-card";
  const [heart, setHeart] = useState(isFavouriteList);

  useEffect(() => {
    checkFavouriteItem(item) ? setHeart(true) : setHeart(false);
  }, [checkFavouriteItem, heart, item]);

  function handleFavouriteButton() {
    heart ? removeFromFavourite(item) : addToFavourite(item);
    setHeart(!heart);
  }

  function convertDateToHoursAgo(date) {
    const currentTime = new Date();
    const jokeDate = new Date(date);
    return Math.floor((currentTime - jokeDate) / 3600 / 1000);
  }

  return (
    <div className={cardClassName}>
      <button className="jokes-card__button" onClick={handleFavouriteButton}>
        <img src={heart ? heartFullIcon : heartEmptyIcon} alt="heart" />
      </button>
      <div className="jokes-card__body">
        <p className="jokes-card__link-area">
          ID:{" "}
          <a
            className="jokes-card__link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.id}
          </a>
          <img
            className="jokes-card__link-icon"
            src={linkIcon}
            alt="link icon"
          />
        </p>
        <p className="jokes-card__content">{item.value}</p>
      </div>
      <div className="jokes-card__footer">
        <div className="jokes-card__last-update">
          Last update:{" "}
          <span className="jokes-card__last-update-hours">
            {convertDateToHoursAgo(item.updated_at)} hours ago
          </span>
        </div>
        {item.categories.length ? (
          <div className="jokes-card__category">{item.categories[0]}</div>
        ) : null}
      </div>
    </div>
  );
}

export default JokesCard;
