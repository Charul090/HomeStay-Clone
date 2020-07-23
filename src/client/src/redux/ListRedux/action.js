import axios from "axios";

const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

const fetchPostRequest = query => {
  console.log("fetch post request action called");
  return {
    type: FETCH_REQUEST,
    query: query || ""
  };
};

const fetchPostSuccess = data => {
  console.log("fetch post success action called");
  return {
    type: FETCH_SUCCESS,
    data: data
  };
};

const fetchPostFailure = error => {
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
    dispatch(fetchPostRequest());
    console.log("hello");
    return axios
      .get(`https://api.github.com/search/users?q=${query}`)
      .then(res => {
        console.log("response success", res.data.items);
        return dispatch(fetchPostSuccess(res.data.items));
      })
      .catch(err => dispatch(fetchPostFailure(err)));
  };
};

export {
  fetchData,
  fetchGetFailure,
  fetchGetRequest,
  fetchGetSuccess,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS
};
