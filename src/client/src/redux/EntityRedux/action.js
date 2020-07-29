import {BASIC_QUERY,BASIC_QUERY_SUCCESS,BASIC_QUERY_FAIL,BOOKING_QUERY,BOOKING_QUERY_SUCCESS,BOOKING_QUERY_FAIL,AREA_QUERY,AREA_QUERY_SUCCESS,AREA_QUERY_FAIL,RECOMMEND_QUERY,RECOMMEND_QUERY_SUCCESS,RECOMMEND_QUERY_FAIL} from "./actiontypes.js"
import axios from "axios"

const SEND_BASIC_QUERY = ()=>{
    return {
        type:BASIC_QUERY
    }
}

const BASIC_API_SUCCESS=(payload)=>{
    return{
        type:BASIC_QUERY_SUCCESS,
        payload
    }
}

const BASIC_API_FAILURE = (payload)=>{
    return {
        type:BASIC_QUERY_FAIL,
        payload
    }
}

const SEND_BOOKING_QUERY = ()=>{
    return {
        type:BOOKING_QUERY
    }
}

const BOOKING_API_SUCCESS=(payload)=>{
    return{
        type:BOOKING_QUERY_SUCCESS,
        payload
    }
}

const BOOKING_API_FAILURE = (payload)=>{
    return {
        type:BOOKING_QUERY_FAIL,
        payload
    }
}

const SEND_AREA_QUERY = ()=>{
    return {
        type:AREA_QUERY
    }
}

const AREA_API_SUCCESS=(payload)=>{
    return{
        type:AREA_QUERY_SUCCESS,
        payload
    }
}

const AREA_API_FAILURE = (payload)=>{
    return {
        type:AREA_QUERY_FAIL,
        payload
    }
}

const SEND_RECOMMEND_QUERY = ()=>{
    return {
        type:RECOMMEND_QUERY
    }
}

const RECOMMEND_API_SUCCESS=(payload)=>{
    return{
        type:RECOMMEND_QUERY_SUCCESS,
        payload
    }
}

const RECOMMEND_API_FAILURE = (payload)=>{
    return {
        type:RECOMMEND_QUERY_FAIL,
        payload
    }
}

const Start_Basic_Query = (id)=>{
    return dispatch=>{
        dispatch(SEND_BASIC_QUERY())
        return axios({
            method:"get",
            baseURL:"https://7e9638a87721.ngrok.io",
            url:`/apartment/info/${id}`
        })
        .then((res)=>res.data)
        .then((data)=>{
            if(data["error"]){
                dispatch(BASIC_API_FAILURE(data))
            }
            else{
                dispatch(BASIC_API_SUCCESS(data))
                dispatch(Start_Booking_Query(id))
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

const Start_Booking_Query = (id)=>{
    return dispatch=>{
        dispatch(SEND_BOOKING_QUERY())
        return axios({
            method:"get",
            baseURL:"https://7e9638a87721.ngrok.io",
            url:`/apartment/booking-info/${id}`
        })
        .then((res)=>res.data)
        .then((data)=>{
            if(data["error"]){
                dispatch(BOOKING_API_FAILURE(data))
            }
            else{
                dispatch(BOOKING_API_SUCCESS(data))
                dispatch(Start_Area_Query(id))
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

const Start_Area_Query = (id)=>{
    return dispatch=>{
        dispatch(SEND_AREA_QUERY())
        return axios({
            method:"get",
            baseURL:"https://7e9638a87721.ngrok.io",
            url:`/apartment/area-info/${id}`
        })
        .then((res)=>res.data)
        .then((data)=>{
            if(data["error"]){
                dispatch(AREA_API_FAILURE(data))
            }
            else{
                dispatch(AREA_API_SUCCESS(data))
                dispatch(Start_Recommend_Query(id))
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

const Start_Recommend_Query = (id)=>{
    return dispatch=>{
        dispatch(SEND_RECOMMEND_QUERY())
        return axios({
            method:"get",
            baseURL:"https://7e9638a87721.ngrok.io",
            url:`/apartment/recommend/${id}`
        })
        .then((res)=>res.data)
        .then((data)=>{
            if(data["error"]){
                dispatch(RECOMMEND_API_FAILURE(data))
            }
            else{
                dispatch(RECOMMEND_API_SUCCESS(data))
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export {Start_Basic_Query}