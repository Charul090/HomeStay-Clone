import React, { useState ,useEffect} from 'react'
import { useDispatch ,useSelector} from "react-redux"
import { useHistory } from "react-router-dom"
import "../LoginModal/LoginModal.css"
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from "react-facebook-login"
import { Google_Login_Query, Facebook_Login_Query } from "../../redux/AuthRedux/action.js"
import {Start_Register_Query} from "../../redux/RegisterRedux/action.js"
import $ from "jquery"


export default function RegisterModal() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")

    const [local_message,setMessage] = useState("")
    let disptach = useDispatch()
    let history = useHistory()
    let {query,fail,message} = useSelector(state=>state.regis)

    useEffect(() => {
        if(query === false && fail === true){
            setMessage(message)
        }
    }, [query,fail])


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleFirstname = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastname = (e) => {
        setLastName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setMessage("")

        if(firstname == "" || lastname =="" || email == "" || password == ""){
            setMessage("Please do not leave fields empty")
        }
        else{
            if(password.length > 4){
                let data = {
                    "firstname":firstname,
                    "lastname":lastname,
                    "email": email,
                    "password": password
                }
        
                disptach(Start_Register_Query(data))
            }
            else{
                setMessage("Password should be long than 4 charaters")
            }
        }

        
    }

    const responseGoogle = (response) => {
        window.$("#registermodal").modal("toggle");
        disptach(Google_Login_Query(response))

    }

    const responseFacebook = (response) => {
        window.$("#registermodal").modal("toggle");
        disptach(Facebook_Login_Query(response))
    }


    return (
        <div className="modal fade" id="registermodal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content" id="logincontent">
                    <div className="modal-header">
                        <div></div>
                        <h5 className="modal-title text-center h3 font-weight-lighter" id="registermodalLabel">Sign Up</h5>
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
                        <form id="login-form">
                            <small className="form-text text-danger">{local_message !== ""?local_message:null}</small>
                            <div className="form-group">
                                <input type="text" value={firstname} onChange={handleFirstname} class="form-control" placeholder="Firstname" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={lastname} onChange={handleLastname} class="form-control" placeholder="Lastname" />
                            </div>
                            <div className="form-group">
                                <input type="email" value={email} onChange={handleEmail} class="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" value={password} onChange={handlePassword} class="form-control" placeholder="Password" />
                            </div>
                            <button className="btn btn-block btn-danger" onClick={handleSubmit}>GET STARTED</button>
                        </form>
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
        </div>
    )
}
