import React from 'react'
import "./LoginModal.css"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from "react-facebook-login"
import axios from "axios";

export default function LoginModal() {
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
                        <form id="login-form" style={{width:"95%",margin:"0 auto"}}>
                            <div className="form-group">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
        </div>
    )
}
