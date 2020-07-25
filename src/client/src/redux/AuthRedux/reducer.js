import { SEND_LOGIN_QUERY, LOGIN_SUCCESSFULL, LOGIN_FAIL, SEND_GOOGLE_QUERY, LOGIN_GOOGLE_SUCCESSFULL, LOGIN_GOOGLE_FAIL, SEND_FACEBOOK_QUERY, LOGIN_FACEBOOK_SUCCESSFULL, LOGIN_FACEBOOK_FAIL } from "./actiontypes.js"

const initialState = {
    error:false,
    host: false,
    logged_user: false,
    token: "",
    message: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SEND_LOGIN_QUERY:
            return { ...state,error:false}

        case LOGIN_SUCCESSFULL:
            return {
                ...state,
                host: payload["host"] || false,
                logged_user: true,
                token: payload["token"],
                message: payload["message"],
                error:false
            }

        case LOGIN_FAIL:
            return {
                ...state,
                host: false,
                logged_user: false,
                token: "",
                message: payload["message"],
                error:true
            }

        case SEND_GOOGLE_QUERY:
            return { ...state }

        case LOGIN_GOOGLE_SUCCESSFULL:
            return {
                ...state,
                host: payload["host"] || false,
                logged_user: true,
                token: payload["token"],
                message: payload["message"]
            }

        case LOGIN_GOOGLE_FAIL:
            return {
                ...state,
                host: false,
                logged_user: false,
                token: "",
                message: payload["message"]
            }

        case SEND_FACEBOOK_QUERY:
            return { ...state }

        case LOGIN_FACEBOOK_SUCCESSFULL:
            return {
                ...state,
                host: payload["host"] || false,
                logged_user: true,
                token: payload["token"],
                message: payload["message"]
            }

        case LOGIN_FACEBOOK_FAIL:
            return {
                ...state,
                host: false,
                logged_user: false,
                token: "",
                message: payload["message"]
            }

        default:
            return { ...state }
    }
}
