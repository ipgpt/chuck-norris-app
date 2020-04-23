import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./JokesForm.scss";

function JokesForm() {
  const [state, setState] = useState({
    jokeType: "",
    value: "",
  });

  function handleChangeRadioButtons(event) {
    if (state.jokeType === "Search") {
      setState({ jokeType: event.target.value, value: "" });
    } else {
      setState({ ...state, jokeType: event.target.value });
    }
  }

  function handleChangeSearchField(event) {
    setState({ ...state, value: event.target.value });
  }

  function handleSubmit(event) {
    let params = "";
    if (state.jokeType === "Random") {
      params = "random";
    } else if (state.jokeType === "Category") {
      params = "random?category=";
    } else if (state.jokeType === "Search") {
      params = "search?query=";
    } else {
      alert("You need to choose the type of joke");
      return;
    }
    alert(params + state.value);
    setState({ jokeType: "", value: "" });
    event.preventDefault();
  }

  return (
    <>
      <p className="hey">Hey!</p>
      <p className="title">Let’s try to find a joke for you:</p>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Check
          custom
          type="radio"
          name="joke"
          id="jokeRandom"
          label="Random"
          value="Random"
          checked={state.jokeType === "Random"}
          onChange={handleChangeRadioButtons}
        />
        <Form.Check
          custom
          type="radio"
          name="joke"
          id="jokeCategory"
          label="From categories"
          value="Category"
          checked={state.jokeType === "Category"}
          onChange={handleChangeRadioButtons}
        />
        <Form.Check
          custom
          type="radio"
          name="joke"
          id="jokeSearch"
          label="Search"
          value="Search"
          checked={state.jokeType === "Search"}
          onChange={handleChangeRadioButtons}
        />
        {state.jokeType === "Search" ? (
          <Form.Control
            className="form__search-field"
            type="text"
            placeholder="Free text search..."
            onChange={handleChangeSearchField}
          />
        ) : null}
        <br />
        <Button className="form__submit" variant="primary" type="submit">
          Get a joke
        </Button>
      </Form>
    </>
  );
}

export default JokesForm;
