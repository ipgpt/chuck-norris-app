import React from "react";
import "./JokesCard.scss";
import linkIcon from "../assets/img/link.png";
import heartEmptyIcon from "../assets/img/heart-empty.png";
//import heartFullIcon from "../assets/img/heart-full.png";

function JokesCard() {
  return (
    <div className="jokes-card">
      <button className="jokes-card__button">
        <img src={heartEmptyIcon} alt="heart" />
      </button>
      <div className="jokes-card__body">
        <p className="jokes-card__link-area">
          ID:{" "}
          <a className="jokes-card__link" href="#">
            XNaAxUduSw6zANDaIEab7A
          </a>
          <img
            className="jokes-card__link-icon"
            src={linkIcon}
            alt="link icon"
          />
        </p>
        <p className="jokes-card__content">
          No one truly knows who's Chuck Norris' real father. No one is
          biologically strong enough for this. He must've conceived himself.
        </p>
      </div>
      <div className="jokes-card__footer">
        <div className="jokes-card__last-update">
          Last update:{" "}
          <span className="jokes-card__last-update-hours">1923 hours ago</span>
        </div>
        <div className="jokes-card__category">Celebrity</div>
      </div>
    </div>
  );
}

export default JokesCard;
