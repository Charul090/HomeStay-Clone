import {BASIC_QUERY,BASIC_QUERY_SUCCESS,BASIC_QUERY_FAIL} from "./actiontypes.js"

const initialState = {
    error:false,
    message:"",
    apartment_id:null,
    apartment_data:{},
    host_profile:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case BASIC_QUERY:
        return { ...state}

    case BASIC_QUERY_SUCCESS:
        return {
            ...state,
            error:payload["error"],
            apartment_id:payload["apartment_id"],
            apartment_data:{...payload["apartment_data"]},
            host_profile:{...payload["host_data"]}
        }
    case BASIC_QUERY_FAIL:
        return {
            ...state,
            error:payload["error"],
            message:payload["message"]
        }
    default:
        return {
            ...state
        }
    }
}
