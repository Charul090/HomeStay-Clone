import {FETCH_REQUEST,FETCH_FAILURE,FETCH_SUCCESS,fetchRequest,fetchGetFailure,fetchGetSuccess,} from './actionTypes'

const initState = {
    data:"",
    error:""
}

 const reducer = (state=initState,{type,payload})=>{

    switch(type){
        case "FETCH_REQUEST":
            // console.log(state)
            return{
                ...state
            }
            case "FETCH_SUCCESS":
            // console.log(state)
            return{
                ...state,
                data:payload
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
