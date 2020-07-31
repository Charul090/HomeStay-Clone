import { SEND_LOGIN_QUERY, LOGIN_SUCCESSFULL, LOGIN_FAIL, SEND_GOOGLE_QUERY, LOGIN_GOOGLE_SUCCESSFULL, LOGIN_GOOGLE_FAIL, SEND_FACEBOOK_QUERY, LOGIN_FACEBOOK_SUCCESSFULL, LOGIN_FACEBOOK_FAIL, LOGOUT } from "./actiontypes.js"
import { deleteAuth } from "../localstorage.js"

const initialState = {
    error: false,
    host: false,
    logged_user: false,
    token: "",
    message: "",
    username: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SEND_LOGIN_QUERY:
            return { ...state, error: false }

        case LOGIN_SUCCESSFULL:
            return {
                ...state,
                host: payload["host"] || false,
                logged_user: true,
                token: payload["token"],
                message: payload["message"],
                username: payload["name"],
                error: false
            }

        case LOGIN_FAIL:
            return {
                ...state,
                host: false,
                logged_user: false,
                token: "",
                username: "",
                message: payload["message"],
                error: true,
                username: ""
            }

        case SEND_GOOGLE_QUERY:
            return { ...state }

        case LOGIN_GOOGLE_SUCCESSFULL:
            return {
                ...state,
                host: payload["host"] || false,
                logged_user: true,
                token: payload["token"],
                message: payload["message"],
                username: payload["name"]
            }

        case LOGIN_GOOGLE_FAIL:
            return {
                ...state,
                host: false,
                logged_user: false,
                token: "",
                message: payload["message"],
                username: ""
            }

        case SEND_FACEBOOK_QUERY:
            return { ...state }

        case LOGIN_FACEBOOK_SUCCESSFULL:
            return {
                ...state,
                host: payload["host"] || false,
                logged_user: true,
                token: payload["token"],
                message: payload["message"],
                username: payload["name"]
            }

        case LOGIN_FACEBOOK_FAIL:
            return {
                ...state,
                host: false,
                logged_user: false,
                token: "",
                message: payload["message"],
                username: ""
            }
        case LOGOUT:
            return {
                ...state,
                error: false,
                host: false,
                logged_user: false,
                token: "",
                message: "",
                username: ""
            }
        default:
            return { ...state }
    }
}
