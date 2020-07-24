import { SEND_LOGIN_QUERY, LOGIN_SUCCESSFULL, LOGIN_FAIL, SEND_GOOGLE_QUERY, LOGIN_GOOGLE_SUCCESSFULL, LOGIN_GOOGLE_FAIL, SEND_FACEBOOK_QUERY, LOGIN_FACEBOOK_SUCCESSFULL, LOGIN_FACEBOOK_FAIL } from "./actiontypes.js"

const initialState = {
    admin: false,
    logged_user: false,
    token: "",
    message: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SEND_LOGIN_QUERY:
            return { ...state }

        case LOGIN_SUCCESSFULL:
            return {
                ...state,
                admin: payload["admin"]||false,
                logged_user: true,
                token: payload["token"],
                message: payload["message"]
            }

        case LOGIN_FAIL:
            return {
                ...state,
                admin: false,
                logged_user: false,
                token: "",
                message: payload["message"]
            }

        default:
            return { ...state }
    }
}
