import {SEND_REGISTER_QUERY,REGISTER_SUCCESSFULL,REGISTER_FAIL} from "./actiontypes.js"

const initialState = {
    query: false,
    fail: false,
    message: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SEND_REGISTER_QUERY:
            return { 
                ...state,
                query:true,
                message:"",
                fail:false
            }

        case REGISTER_SUCCESSFULL:
            return {
                ...state,
                query:false,
                fail:false,
                message: payload["message"]
            }

        case REGISTER_FAIL:
            return {
                ...state,
                query:false,
                fail:true,
                message: payload["message"]
            }

        default:
            return { ...state }
    }
}
