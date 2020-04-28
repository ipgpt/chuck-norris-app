import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./JokesForm.scss";
import { apiUrl, categoryData } from "./JokesForm.constants";

function JokesForm(props) {
  const { getData } = props;
  const [state, setState] = useState({
    jokeType: "",
    value: "",
    isAlert: false,
    alertText: "",
  });

  async function getJokes(params) {
    try {
      const response = await axios.get(`${apiUrl}${params}`);
      console.log(response);
      getData(response);
    } catch (error) {
      console.error(error);
    }
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
        {state.jokeType === "Category"
          ? categoryData.map((data) => (
              <Form.Check
                custom
                className={data.name}
                type={data.type}
                name={data.name}
                id={data.id}
                label={data.value}
                value={data.value}
                checked={state.value === data.value}
                onChange={handleChangeCategory}
              />
            ))
          : null}
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
