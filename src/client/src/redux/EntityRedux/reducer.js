import {BASIC_QUERY,BASIC_QUERY_SUCCESS,BASIC_QUERY_FAIL,BOOKING_QUERY,BOOKING_QUERY_SUCCESS,BOOKING_QUERY_FAIL,AREA_QUERY,AREA_QUERY_SUCCESS,AREA_QUERY_FAIL,RECOMMEND_QUERY,RECOMMEND_QUERY_SUCCESS,RECOMMEND_QUERY_FAIL} from "./actiontypes.js"


const initialState = {
    error: false,
    message: "",
    apartment_id: null,
    apartment_data: {},
    host_profile: {},
    bedroom: {},
    booking: {},
    area:{},
    reviews:{},
    recommend:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case BASIC_QUERY:
            return { ...state }

        case BASIC_QUERY_SUCCESS:
            return {
                ...state,
                error: payload["error"],
                apartment_id: payload["apartment_id"],
                apartment_data: { ...payload["apartment_data"] },
                host_profile: { ...payload["host_data"] }
            }
        case BASIC_QUERY_FAIL:
            return {
                ...state,
                error: payload["error"],
                message: payload["message"]
            }

        case BOOKING_QUERY:
            return { ...state }

        case BOOKING_QUERY_SUCCESS:
            return {
                ...state,
                error: payload["error"],
                bedroom: { ...payload["bedroom"] },
                booking: { ...payload["booking"] }
            }
        case BOOKING_QUERY_FAIL:
            return {
                ...state,
                error: payload["error"],
                message: payload["message"]
            }

        case AREA_QUERY:
            return { ...state }

        case AREA_QUERY_SUCCESS:
            return {
                ...state,
                area: {...payload["area_data"]},
                reviews: { ...payload["reviews_data"] }
            }
        case AREA_QUERY_FAIL:
            return {
                ...state,
                error: payload["error"],
                message: payload["message"]
            }
        case RECOMMEND_QUERY:
            return { ...state }

        case RECOMMEND_QUERY_SUCCESS:
            return {
                ...state,
                recommend:{
                    ...payload["data"]
                }
            }
        case RECOMMEND_QUERY_FAIL:
            return {
                ...state,
                error: payload["error"],
                message: payload["message"]
            }

        default:
            return {
                ...state
            }
    }
}
