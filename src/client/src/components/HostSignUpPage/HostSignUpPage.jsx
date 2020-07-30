import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBarHome from '../NavBarHome/NavBarHome'
import styles from './HostSignUpPage.module.css';
import { Facebook_Login_Query } from '../../redux/AuthRedux/action';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from "react-facebook-login"

export class HostSignUpPage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className={styles.bgWhite}>
                <NavBarHome />
                </div>
                <section className={styles.sectionBackground}>
                    <div className="container">
                        <div className="row">
                            <div className="col-7">
                                <div className={styles.content}>
                                <h2 className={styles.rent}>Rent your spare room</h2>
                                <h3 className={styles.subContent}>Join our global host community of over 
                                    33,000 homestays in 160 countries</h3>
                                </div>
                            </div>
                            <div className="col-4 offset-1">
                                <section className={styles.listRoom}>
                                <div>
                                    <div className={styles.list}>List your room</div>
                                    <hr/>
                                    

                                    <div class="input-group row m-3">
                                    <div class="col-auto ">
                                    <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                    <div class="input-group mb-2 ml-4 ">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text"><i class='fa fa-facebook' style={{fontSize:"25px",color:"darkblue"}}></i></div>
                                        </div>
                                        <input type="text" style={{color:"darlblue",paddingLeft:"15px"}} id="inlineFormInputGroup" placeholder="Login with Facebook"/>
                                    </div>
                                    </div>
                                    </div>

                                    {/* <div class="input-group row m-3">
                                    <div class="col-auto ">
                                    <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                    <div class="input-group mb-2 ml-4 ">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text"><i class='fa fa-google' style={{fontSize:"25px",color:"blue"}}></i></div>
                                        </div>
                                        <input type="text" style={{color:"darlblue",paddingLeft:"15px"}} id="inlineFormInputGroup" placeholder="Login with Facebook"/>
                                    </div>
                                    </div>
                                    </div> */}
                            
                                
                                        <GoogleLogin  style={{padding:"30px"}}/>
                                    <div id="login-separator">
                                        or with your email
                                    </div>
                                    <form id="login-form">
                                    
                                    <small className="form-text text-danger"></small>
                                        <div className="row mb-2">
                                            <div className="col-6">
                                            <input type="email"  class="" placeholder="" />
                                            </div>
                                            <div className="col-6">
                                            <input type="email"  class="w-100 pl-2" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <input type="email" class="w-100 pl-2"  placeholder="Email" />
                                        </div>
                                        <div className="mb-2">
                                            <input type="password"  class="w-100 h-70 pl-2" placeholder="Password" />
                                        </div>
                                        <button className="btn btn-block text-light" style={{background:"#CA005D"}}>Log In</button>
                                    </form>
                                    <p className="small p-1">Already have a Homestay.com account? Log In</p>
                                    </div>
                                    </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})
 
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HostSignUpPage)
