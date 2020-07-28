import {FETCH_REQUEST,FETCH_FAILURE,FETCH_SUCCESS,fetchRequest,fetchGetFailure,fetchGetSuccess,} from './actionTypes'

const initState = {
    data:["lalitha"],
    error:"",
    total:5,
    page:1
}

 const reducer = (state=initState,{type,payload})=>{

    switch(type){
        case "PAGE_CHANGE":
            // console.log(state)
            return{
                ...state,
                page:payload
            }
        case "FETCH_REQUEST":
            // console.log(state)
            return{
                ...state
            }
            case "FETCH_SUCCESS":
             console.log(payload)
            return{
                ...state,
                data:payload,
                total:payload.total_pages
            }

            case "FETCH_FAILURE":
            // console.log(state)
            return{
                ...state,
                error:payload
            }

            default:
                return{
                    ...state
                }
    }

}
export default reducer
