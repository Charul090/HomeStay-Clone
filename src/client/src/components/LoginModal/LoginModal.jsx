import React, { useState ,useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux"
import {useHistory} from "react-router-dom"
import "./LoginModal.css"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from "react-facebook-login"
import axios from "axios";
import {Start_Login_Query} from "../../redux/AuthRedux/action.js"


export default function LoginModal() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let disptach = useDispatch()
    let {logged_user,admin} = useSelector(state=>state.auth)
    let history = useHistory()

    useEffect(()=>{
        if(logged_user){
            if(admin){
                history.push("/host/listing")
            }
            else{
                history.push("/guest")
            }
            
        }
    },[logged_user])

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let data = {
            "email": email,
            "password": password
        }

        disptach(Start_Login_Query(data))
    }

    const responseGoogle = (response) => {
        console.log(response)
        axios({
            "method": "post",
            "url": "https://c4491e4b9d2e.ngrok.io/oauth/google",
            "data": response
        })
            .then((data) => {
                console.log(data)
            })
    }

    const responseFacebook = (response) => {
        console.log(response)
        axios({
            "method": "post",
            "url": "https://c4491e4b9d2e.ngrok.io/oauth/facebook",
            "data": response
        })
            .then((data) => {
                console.log(data)
            })
    }

    console.log(email, password)

    return (
        <div className="modal fade" id="loginmodal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content" id="logincontent">
                    <div className="modal-header">
                        <div></div>
                        <h5 className="modal-title text-center h3 font-weight-lighter" id="loginmodalLabel">Log in</h5>
                        <button type="button btn-lg" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="close-text">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <FacebookLogin
                            appId="3292281994166597"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="my-facebook-button-class"
                            icon="fa-facebook" />
                        <GoogleLogin
                            clientId="863252758203-dajc84f5om56upbk0ufibfjpj2062dht.apps.googleusercontent.com"
                            buttonText="LOGIN WITH GOOGLE"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <div id="login-separator">
                            or with your email
                        </div>
                        <form id="login-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="email" value={email} onChange={handleEmail} class="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" value={password} onChange={handlePassword} class="form-control" placeholder="Password" />
                            </div>
                            <button className="btn btn-block btn-danger" data-dismiss="modal">Log In</button>
                        </form>
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
        </div>
    )
}
