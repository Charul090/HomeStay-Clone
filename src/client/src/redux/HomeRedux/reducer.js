

const initState = {
    status:false
}

 const authReducer = (state=initState,{type,payload})=>{

    switch(type){
        case "AUTH_SUCCESS":
            console.log(state)
            return{
                ...state,
                status:true
            }

            case "LOGOUT":
            return{
                ...state,
                status:false
            }

            default:
                return{
                    ...state
                }
    }

}
export default authReducer
