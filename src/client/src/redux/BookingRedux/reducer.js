import { CHECK_DATES_QUERY, CHECK_DATES_SUCCESS, CHECK_DATES_FAIL, SET_QUERY_FALSE,SET_BOOKING_GUEST ,SET_NIGHTS} from "./actiontypes.js"
import { SET_NIGHT_STAY } from "./action.js"

const initialState = {
    query:false,
    available:true,
    booking_guest:0,
    nights:0
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

    case SET_BOOKING_GUEST:
        return {
            ...state,
            booking_guest:payload
        }
    case SET_NIGHTS:
        return {
            ...state,
            nights:payload
        }
    default:
        return state
    }
}
