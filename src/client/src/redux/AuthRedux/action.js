import { SEND_LOGIN_QUERY, LOGIN_SUCCESSFULL, LOGIN_FAIL, SEND_GOOGLE_QUERY, LOGIN_GOOGLE_SUCCESSFULL, LOGIN_GOOGLE_FAIL, SEND_FACEBOOK_QUERY, LOGIN_FACEBOOK_SUCCESSFULL, LOGIN_FACEBOOK_FAIL } from "./actiontypes.js"
import axios from "axios"

const LOGIN_QUERY = () => {
    return {
        type: SEND_LOGIN_QUERY
    }
}

const LOGIN_SUCCESS = (payload) => {
    return {
        type: LOGIN_SUCCESSFULL,
        payload
    }
}

const LOGIN_FAILURE = (payload) => {
    return {
        type: LOGIN_FAIL,
        payload
    }
}

const Start_Login_Query = (data)=>{
    return dispatch=>{
        dispatch(LOGIN_QUERY())
        return axios({
            method:"post",
            baseURL:"http://0f3cf9485c74.ngrok.io",
            url:"/guest/login",
            data:data
        })
        .then((payload)=>payload.data)
        .then((data)=>{
            if(data["error"]){
                dispatch(LOGIN_FAILURE(data))
            }
            else{
                dispatch(LOGIN_SUCCESS(data))
            }

        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

const GOOGLE_QUERY = ()=>{
    return {
        type:SEND_GOOGLE_QUERY
    }
}

const GOOGLE_SUCCESS = (payload) => {
    return {
        type: LOGIN_GOOGLE_SUCCESSFULL,
        payload
    }
}

const GOOGLE_FAILURE = (payload) => {
    return {
        type: LOGIN_GOOGLE_FAIL,
        payload
    }
}

const Google_Login_Query=(data)=>{
    return dispatch=>{
        dispatch(GOOGLE_QUERY())
        return axios({
            method: "post",
            baseURL:"http://0f3cf9485c74.ngrok.io",
            url: "/oauth/google",
            data: data
        })
        .then((payload)=>payload.data)
        .then((data)=>{
            if(data["error"]){
                dispatch(GOOGLE_FAILURE(data))
            }
            else{
                dispatch(GOOGLE_SUCCESS(data))
            }

        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export {Start_Login_Query,Google_Login_Query}