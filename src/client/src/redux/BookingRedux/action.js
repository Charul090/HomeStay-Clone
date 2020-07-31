import { CHECK_DATES_QUERY, CHECK_DATES_SUCCESS, CHECK_DATES_FAIL, SET_QUERY_FALSE,SET_BOOKING_GUEST ,SET_NIGHTS} from "./actiontypes.js"
import axios from "axios"

const DATES_QUERY=()=>{
    return {
        type:CHECK_DATES_QUERY
    }
}

const DATES_SUCCESS=(payload)=>{
    return {
        type:CHECK_DATES_SUCCESS,
        payload
    }
}

const DATES_FAIL=(payload)=>{
    return {
        type:CHECK_DATES_FAIL,
        payload
    }
}

const QUERY_COMPLETE=()=>{
    return {
        type:SET_QUERY_FALSE
    }
}

const BOOKING_GUEST=(payload)=>{
    return {
        type:SET_BOOKING_GUEST,
        payload
    }
}

const SET_NIGHT_STAY = (payload)=>{
    return {
        type:SET_NIGHTS,
        payload
    }
}

const SEND_CHECK_QUERY=(obj)=>{
    let {id,start,end} = obj
    return dispatch=>{
        dispatch(DATES_QUERY())
        axios({
            method:"get",
            baseURL:"https://1f709f3ba43e.ngrok.io",
            url:`/booking/check/${id}`,
            params:{
                start,
                end
            }
        })
        .then((payload)=>payload.data)
        .then((data)=>{
            if(data["status"]){
                dispatch(DATES_SUCCESS(data))
            }
            else{
                dispatch(DATES_FAIL(data))
            }
        })
    }
}

export {SEND_CHECK_QUERY,QUERY_COMPLETE,BOOKING_GUEST,SET_NIGHT_STAY}