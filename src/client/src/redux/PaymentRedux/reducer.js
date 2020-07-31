import { RESET_PAYMENT, PAYMENT_QUERY, PAYMENT_SUCCESS, PAYMENT_FAIL, BOOKING_QUERY, BOOKING_SUCCESS, BOOKING_FAIL } from "./actiontypes.js"

const initialState = {
    start: false,
    end: false,
    status: false,
    booking: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case PAYMENT_QUERY:
            return { ...state, start: true }

        case PAYMENT_SUCCESS:
            return {
                ...state,
                end: true,
                status: payload["payment"]
            }

        case PAYMENT_FAIL:
            return {
                ...state,
                end: true,
                status: payload["payment"]
            }

        case BOOKING_QUERY:
            return {
                ...state
            }

        case BOOKING_SUCCESS:
            return {
                ...state,
                booking: payload["booking"]
            }
        case BOOKING_FAIL:
            return {
                ...state,
                booking: payload["booking"]
            }

        case RESET_PAYMENT:
            return {
                ...state,
                start: false,
                end: false,
                status: false,
                booking: false
            }

        default:
            return state
    }
}
