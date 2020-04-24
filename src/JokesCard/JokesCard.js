import React from "react";
import "./JokesCard.scss";
import linkIcon from "../assets/img/link.png";
import heartEmptyIcon from "../assets/img/heart-empty.png";
//import heartFullIcon from "../assets/img/heart-full.png";

function JokesCard(props) {
  const { id, link, joke, date, category } = props;

  return (
    <div className="jokes-card">
      <button className="jokes-card__button">
        <img src={heartEmptyIcon} alt="heart" />
      </button>
      <div className="jokes-card__body">
        <p className="jokes-card__link-area">
          ID:{" "}
          <a
            className="jokes-card__link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {id}
          </a>
          <img
            className="jokes-card__link-icon"
            src={linkIcon}
            alt="link icon"
          />
        </p>
        <p className="jokes-card__content">{joke}</p>
      </div>
      <div className="jokes-card__footer">
        <div className="jokes-card__last-update">
          Last update:{" "}
          <span className="jokes-card__last-update-hours">{date}</span>
        </div>
        {category ? (
          <div className="jokes-card__category">{category}</div>
        ) : null}
      </div>
    </div>
  );
}

export default JokesCard;
