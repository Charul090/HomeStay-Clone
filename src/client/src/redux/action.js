import {AUTH_SUCCESS,LOGOUT} from './actionTypes';

export const auth_success = ()=>({
    type:AUTH_SUCCESS
    
})

export const logout = (payload)=>({
    type:LOGOUT,
    payload
})