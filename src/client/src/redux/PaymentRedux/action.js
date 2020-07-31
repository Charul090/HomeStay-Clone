import { RESET_PAYMENT, PAYMENT_QUERY, PAYMENT_SUCCESS, PAYMENT_FAIL, BOOKING_QUERY, BOOKING_SUCCESS, BOOKING_FAIL } from "./actiontypes.js"
import axios from "axios"

const SEND_PAYMENT_QUERY=()=>{
    return {
        type:PAYMENT_QUERY
    }
}

const PAYMENT_SUCCESSFULL=(payload)=>{
    return {
        type:PAYMENT_SUCCESS,
        payload
    }
}

const PAYMENT_FAILURE=(payload)=>{
    return {
        type:PAYMENT_FAIL,
        payload
    }
}

const SEND_BOOKING_QUERY=()=>{
    return {
        type:BOOKING_QUERY
    }
}

const BOOKING_SUCCESSFULL=(payload)=>{
    return {
        type:BOOKING_SUCCESS,
        payload
    }
}

const BOOKING_FAILURE=(payload)=>{
    return {
        type:BOOKING_FAIL,
        payload
    }
}

const RESET=()=>{
    return{
        type:RESET_PAYMENT
    }
}

const Start_Payment_Query=(info)=>{
    return dispatch =>{
        dispatch(SEND_PAYMENT_QUERY())
        return axios({
            method:"post",
            baseURL:"https://1f709f3ba43e.ngrok.io",
            url:"/payment/authenticate",
            data:info["payment"]
        })
        .then((res)=>res.data)
        .then((data)=>{
            if(data["payment"]){
                dispatch(PAYMENT_SUCCESSFULL(data))
                dispatch(Start_Booking_Query(info["booking_info"]))
            }
            else{
                dispatch(PAYMENT_FAILURE(data))
            }
        })
    }
}

const Start_Booking_Query=(info)=>{
    return dispatch =>{
        dispatch(SEND_BOOKING_QUERY())
        return axios({
            method:"post",
            baseURL:"https://1f709f3ba43e.ngrok.io",
            url:"/booking/add",
            data:info
        })
        .then((res)=>res.data)
        .then((data)=>{
            if(data["error"]){
                dispatch(BOOKING_FAILURE(data))
            }
            else{
                dispatch(BOOKING_SUCCESSFULL(data))
            }
        })
    }
}

export {Start_Payment_Query,RESET}