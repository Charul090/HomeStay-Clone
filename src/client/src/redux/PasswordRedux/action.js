import axios from "axios";
import {FETCH_RECOVERY_REQUEST,FETCH_RECOVERY_FAILURE,FETCH_RECOVERY_SUCCESS,FETCH_RESET_REQUEST,FETCH_RESET_FAILURE,FETCH_RESET_SUCCESS} from './actionTypes'


const fetchRecoveryRequest = () => {
  console.log("fetch post recovery request action called");
  
  return {
    type: FETCH_RECOVERY_REQUEST,
    
  };
};

const fetchRecoverySuccess = (res) => {
  console.log("fetch post recovery success action called"+ res);
  return {
    type: FETCH_RECOVERY_SUCCESS,
    payload : res
  };
};

const fetchRecoveryFailure = error => {
  console.log("fetch post recovery failure action called");
  return {
    type: FETCH_RECOVERY_FAILURE,
    payload:error
    
    // error: error
  };
};


 const fetchRecovery = (data) => {
  console.log("fetch Data called", data);
  return dispatch => {
      dispatch(fetchRecoveryRequest())
      return  axios.post(
          "https://1f709f3ba43e.ngrok.io/password/recovery",
            {
            "email": `${data}`
        }).then(res=>{
          console.log("response success", res);
          return dispatch(fetchRecoverySuccess(res));
        })
        .catch(error => fetchRecoveryFailure(error))
  }
}


const fetchResetRequest = () => {
  console.log("fetch post reset request action called");
  
  return {
    type: FETCH_RESET_REQUEST,
    
  };
};

const fetchResetSuccess = (res) => {
  console.log("fetch post reset success action called"+ res);
  return {
    type: FETCH_RESET_SUCCESS,
    payload : res
  };
};

const fetchResetFailure = error => {
  console.log("fetch post reset failure action called");
  return {
    type: FETCH_RESET_FAILURE,
    payload:error
    
    // error: error
  };
};


 const fetchReset = (data) => {
  console.log("fetch Data called", data);
  return dispatch => {
      dispatch(fetchResetRequest())
      return  axios.post(
          "https://1f709f3ba43e.ngrok.io/password/reset",
            {
            "token": `${data.token}`,
            "email": `${data.email}`,
            "password":`${data.password}`
        }).then(res=>{
          console.log("response success", res);
          return dispatch(fetchResetSuccess(res));
        })
        .catch(error => fetchResetFailure(error))
  }
}



export {
  
  fetchRecovery,
  fetchRecoveryFailure,
  fetchRecoveryRequest,
  fetchRecoverySuccess,
  fetchReset,
  fetchResetFailure,
  fetchResetRequest,
  fetchResetSuccess,
};
