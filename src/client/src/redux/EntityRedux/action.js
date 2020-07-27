import {BASIC_QUERY,BASIC_QUERY_SUCCESS,BASIC_QUERY_FAIL} from "./actiontypes.js"
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

const Start_Basic_Query = (id)=>{
    return dispatch=>{
        dispatch(SEND_BASIC_QUERY())
        return axios({
            method:"get",
            baseURL:"https://231b28e3df63.ngrok.io",
            url:`/apartment/info/${id}`
        })
        .then((res)=>res.data)
        .then((data)=>{
            if(data["error"]){
                dispatch(BASIC_API_FAILURE(data))
            }
            else{
                dispatch(BASIC_API_SUCCESS(data))
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export {Start_Basic_Query}