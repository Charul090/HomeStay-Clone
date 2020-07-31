const loadAuth=()=>{
    try{
        const authStore = localStorage.getItem("auth")
        if(authStore === null){
            return undefined
        }
        
        return JSON.parse(authStore)
    }
    catch(err){
        return undefined
    }
}


const saveAuth = (state)=>{
    try{
        localStorage.setItem("auth",JSON.stringify(state))
    }
    catch{
        //
    }
}

const deleteAuth = (state)=>{
    try{
        localStorage.removeItem("auth")
    }
    catch{
        //
    }
}

export {loadAuth,saveAuth,deleteAuth}