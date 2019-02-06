import * as actionTypes from "./actionTypes";
import { resetErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => {
  return dispatch => {
    instance
      .get("/api/authors/")
      .then(res => res.data)
      .then(authors =>
        dispatch({ type: actionTypes.FETCH_AUTHORS, payload: authors })
      );
  };
};

export const filterAuthors = query => {
  return {
    type: actionTypes.FILTER_AUTHORS,
    payload: query
  };
};

//POST THE AUTHOR TO https://the-index-api.herokuapp.com/api/authors/
export const postAuthor = (newAuthor, closeModal) => {
  return async dispatch => {
    try {
      const res = await instance.post("/api/authors/", newAuthor);
      const author = res.data;
      dispatch(resetErrors());
      dispatch({
        type: actionTypes.POST_AUTHOR,
        payload: author
      });
      closeModal();
    } catch (err) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};
