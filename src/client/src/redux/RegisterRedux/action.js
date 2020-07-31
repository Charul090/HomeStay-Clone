import {SEND_REGISTER_QUERY,REGISTER_SUCCESSFULL,REGISTER_FAIL} from "./actiontypes.js"
import axios from "axios"

const REGISTER_QUERY = () => {
    return {
        type: SEND_REGISTER_QUERY
    }
}

const REGISTER_SUCCESS = (payload) => {
    return {
        type: REGISTER_SUCCESSFULL,
        payload
    }
}

const REGISTER_FAILURE = (payload) => {
    return {
        type: REGISTER_FAIL,
        payload
    }
}

const Start_Register_Query = (data)=>{
    return dispatch=>{
        dispatch(REGISTER_QUERY())
        return axios({
            method:"post",
            baseURL:"https://1f709f3ba43e.ngrok.io",
            url:"/guest/register",
            data:data
        })
        .then((payload)=>payload.data)
        .then((data)=>{
            if(data["error"]){
                dispatch(REGISTER_FAILURE(data))
            }
            else{
                window.$("#registermodal").modal("toggle");
                dispatch(REGISTER_SUCCESS(data))
                window.$("#loginmodal").modal("toggle");
            }

        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export {Start_Register_Query}