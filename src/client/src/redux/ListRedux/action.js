import axios from "axios";
import {FETCH_REQUEST,FETCH_FAILURE,FETCH_SUCCESS} from './actionTypes'


const fetchRequest = query => {
  console.log("fetch post request action called");
  return {
    type: FETCH_REQUEST,
    query: query || ""
  };
};

const fetchSuccess = data => {
  console.log("fetch post success action called");
  return {
    type: FETCH_SUCCESS,
    data: data
  };
};

const fetchFailure = error => {
  console.log("fetch post failure action called");
  return {
    type: FETCH_FAILURE,
    error: error
  };
};

const fetchData = (query = null) => {
  console.log("fetch Data called", query);
  return dispatch => {
    console.log("dispatching post request action...");
    dispatch(fetchRequest());
    return axios
      .get(`http://0f3cf9485c74.ngrok.io/stays/listing${query}`)
      .then(res => {
        console.log("response success", res);
        return dispatch(fetchSuccess(res));
      })
      .catch(err => dispatch(fetchFailure(err)));
  };
};

export {
  fetchData,
  fetchFailure,
  fetchRequest,
  fetchSuccess,
};
