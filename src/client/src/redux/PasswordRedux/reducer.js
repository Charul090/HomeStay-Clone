import {FETCH_RECOVERY_REQUEST,FETCH_RECOVERY_FAILURE,FETCH_RECOVERY_SUCCESS,FETCH_RESET_REQUEST,FETCH_RESET_FAILURE,FETCH_RESET_SUCCESS} from './actionTypes'
const initStore = {

    resetError:"",
    resetSuccess:"",
    recoveryError:"",
    recoverySuccess:"",
    
  };
  
  const reducer = (state = initStore,{type,payload}) => {
    console.log("reducer called");
    switch (type) {
      
        case FETCH_RECOVERY_REQUEST:
        console.log("reducer recovery request called");
        return {
          ...state
          
        };
        case FETCH_RECOVERY_SUCCESS:
        console.log("reducer recovery request called");
        return {
          ...state,
          recoverySuccess:payload
        };
        case FETCH_RECOVERY_FAILURE:
        console.log("reducer recovery  failure request called");
        return {
          ...state,
          recoveryError: payload
        };

        case FETCH_RESET_REQUEST:
        console.log("reducer reset request called");
        return {
          ...state
          
        };
        case FETCH_RESET_SUCCESS:
        console.log("reducer reset success called");
        return {
          ...state,
          resetSuccess:payload,
        };

        case FETCH_RESET_FAILURE:
        console.log("reducer reset failure request called");
        return {
          ...state,
          resetError: payload
        };
        

      default:
        console.log("reducer default called");
        return state;
    }
  };
  
  export default reducer;