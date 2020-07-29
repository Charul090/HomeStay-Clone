import { CHECK_DATES_QUERY, CHECK_DATES_SUCCESS, CHECK_DATES_FAIL, SET_QUERY_FALSE } from "./actiontypes.js"

const initialState = {
    query:false,
    available:true
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CHECK_DATES_QUERY:
        return {
            ...state,
            query:false
        }
    
    case CHECK_DATES_SUCCESS:
        return {
            ...state,
            query:true,
            available:payload.status
        }
    
    case CHECK_DATES_FAIL:
        return {
            ...state,
            query:true,
            available:payload.status
    }

    case SET_QUERY_FALSE:
        return{
            ...state,
            query:false
        }

    default:
        return state
    }
}
