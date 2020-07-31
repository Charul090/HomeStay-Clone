import axios from "axios";
import {FETCH_REQUEST,FETCH_FAILURE,FETCH_SUCCESS,PAGE_CHANGE} from './actionTypes'

const pageChange = num => {
  // console.log("fetch post request action called");
  return {
    type: PAGE_CHANGE,
    payload: num
  };
};

const fetchRequest = query => {
  // console.log("fetch post request action called");
  return {
    type: FETCH_REQUEST,
    payload: query || ""
  };
};

const fetchSuccess = data => {
  // console.log("fetch post success action called");
  return {
    type: FETCH_SUCCESS,
    payload: data,
    page:1
  };
};

const fetchFailure = error => {
  // console.log("fetch post failure action called");
  return {
    type: FETCH_FAILURE,
    payload: error
  };
};

const fetchData = (query = null) => {
  // console.log("fetch Data called", query);
  return dispatch => {
    // console.log("dispatching post request action...");
    dispatch(fetchRequest());
    return axios
      .get(`http://dacaf3626775.ngrok.io/stays/listing${query}`)
      .then(res => {
        // console.log("response success", res.data);
        return dispatch(fetchSuccess(res.data));
      })
      .catch(err => dispatch(fetchFailure(err)));
  };
};

export {
  fetchData,
  fetchFailure,
  fetchRequest,
  fetchSuccess,
  pageChange
};
