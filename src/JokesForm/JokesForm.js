import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./JokesForm.scss";

const apiUrl = "https://api.chucknorris.io/jokes/";
const apiUrlCategories = `${apiUrl}categories`;

function JokesForm(props) {
  const { getData } = props;
  const [state, setState] = useState({
    jokeType: "",
    value: "",
    categories: [],
    isAlert: false,
    alertText: "",
  });

  useEffect(() => {
    axios
      .get(`${apiUrlCategories}`)
      .then((result) => {
        setState({ ...state, categories: result.data });
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getJokes(params) {
    axios
      .get(`${apiUrl}${params}`)
      .then((result) => {
        getData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleChangeRadioButtons(event) {
    if (state.jokeType !== "Random") {
      setState({ ...state, jokeType: event.target.value, value: "" });
    } else {
      setState({ ...state, jokeType: event.target.value });
    }
  }

  function handleChangeCategory(event) {
    setState({ ...state, value: event.target.value });
  }

  function handleChangeSearchField(event) {
    setState({ ...state, value: event.target.value });
  }

  function handleSubmit(event) {
    let params = "";
    if (state.jokeType === "Random") {
      params = "random";
      getJokes(params + state.value);
      setState({ ...state, isAlert: false });
    } else if (state.jokeType === "Category") {
      params = "random?category=";
      if (!state.value) {
        setState({
          ...state,
          alertText: "WARNING: You need to choose the category of joke",
          isAlert: true,
        });
      } else {
        getJokes(params + state.value);
        setState({ ...state, isAlert: false });
      }
    } else if (state.jokeType === "Search") {
      params = "search?query=";
      if (!state.value) {
        setState({
          ...state,
          alertText: "WARNING: You need to write what to search",
          isAlert: true,
        });
      } else {
        getJokes(params + state.value);
        setState({ ...state, isAlert: false });
      }
    } else if (!state.jokeType) {
      setState({
        ...state,
        alertText: "WARNING: You need to choose the type of joke",
        isAlert: true,
      });
    }
    event.preventDefault();
  }

  return (
    <>
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
        {state.jokeType === "Category" ? (
          <div className="form__categories">
            {state.categories.map((data) => (
              <Form.Check
                custom
                key={data}
                className="form__category"
                type="radio"
                name="category"
                id={data}
                label={data}
                value={data}
                checked={state.value === data}
                onChange={handleChangeCategory}
              />
            ))}
          </div>
        ) : null}
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
        {state.isAlert ? (
          <Alert
            className="form__alert"
            variant="warning"
            onClose={() => {
              setState({ ...state, isAlert: false });
            }}
            dismissible
          >
            {state.alertText}
          </Alert>
        ) : null}
        <Button className="form__submit" variant="primary" type="submit">
          Get a joke
        </Button>
      </Form>
    </>
  );
}

export default JokesForm;
