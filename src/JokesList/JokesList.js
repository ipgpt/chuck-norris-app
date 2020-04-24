import React from "react";
import JokesCard from "../JokesCard";

function JokesList(props) {
  const { joke } = props;
  return (
    <>
      {Object.keys(joke).length ? (
        joke.data.result ? (
          joke.data.result.map((item) => (
            <JokesCard
              id={item.id}
              link={item.url}
              joke={item.value}
              date={item.updated_at}
              category={item.categories.length ? item.categories[0] : null}
            />
          ))
        ) : (
          <JokesCard
            id={joke.data.id}
            link={joke.data.url}
            joke={joke.data.value}
            date={joke.data.updated_at}
            category={
              joke.data.categories.length ? joke.data.categories[0] : null
            }
          />
        )
      ) : null}
    </>
  );
}

export default JokesList;
