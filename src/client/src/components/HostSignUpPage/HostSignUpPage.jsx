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
                                    

                                    {/* <div class="input-group row m-3">
                                    <div class="ml-2">
                                    <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                    <div class="input-group mb-1 ml-5 w-50">
                                        {/* <div class="input-group-prepend">
                                        <div class="input-group-text"><i class='fa fa-facebook' style={{fontSize:"25px",color:"darkblue"}}></i></div>
                                        </div> */}
                                        {/* <div className={styles.icon}><i class='fa fa-facebook ' ></i></div>
                                        <input type="text" style={{background:"#f8f9fa",paddingLeft:"30px"}} id="inlineFormInputGroup" placeholder="Login with Facebook"></input>
                                    </div>
                                    </div>
                                    </div> */}

                                        <GoogleLogin />
                                    <div id="login-separator">
                                        or with your email
                                    </div>
                                    <form id="login-form">
                                    
                                    <small className="form-text text-danger"></small>
                                        <div className="row mb-2">
                                            <div className="col-6">
                                            <input type="email"  class="pl-4" placeholder="FisrtName" />
                                            </div>
                                            <div className="col-6">
                                            <input type="email"  class="w-100 pl-4" placeholder=" Last Name" />
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <input type="email" class="w-100 pl-4"  placeholder="Email" />
                                        </div>
                                        <div className="mb-2">
                                            <input type="password"  class="w-100 pl-4" placeholder="Password" />
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-6">
                                            <input type="email"  class="" placeholder="Prefix" />
                                            </div>
                                            <div className="col-6">
                                            <input type="email"  class="w-100 pl-2" placeholder="Mobile" />
                                            </div>
                                        </div>
                                        
                                        <button className="btn btn-block text-light" style={{background:"#CA005D"}}>Get Started</button>
                                    </form>
                                    <p className="small p-1">Already have a Homestay.com account? Log In</p>
                                    </div>
                                    </section>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.secNav} >
                    <div className="row">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#homestay">
                            <i class="fa fa-home" style={{fontSize:"20px",color:"#CA005D"}} aria-hidden="true"></i>
                            <span className="text-light "> WHY HOMESTAY.COM?</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#work"><i class="fa fa-calendar-check-o" style={{fontSize:"20px",color:"silver"}} aria-hidden="true"></i><span className="text-light p-2"> HOW DOES IT WORK</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#earn" ><i class="far fa-calendar-check" style={{fontSize:"20px",color:"silver"}} aria-hidden="true"></i><span className="text-light p-2"> BE IN CONTROL</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" ><i class="fa fa-question-circle" style={{fontSize:"20px",color:"silver"}} aria-hidden="true"></i> <span className="text-light p-2">FAQ?</span></a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="container">
                <div className="row " id="homestay">
                    <div className="col-6 p-4" >
                        <div className={styles.bgImage}></div>
                    </div>
                    <div className="col-6">
                        <div className={styles.roomRent}>
                        <div className="row ">
                            <h3 className={styles.subContet}>Room rental made easy</h3>
                            <div className="col-6 ">
                                <div><i class="fa fa-users" style={{fontSize:"40px",color:"#EFAA00",padding:"15px"}} aria-hidden="true"></i></div>
                                <p className={styles.smallIcon}>Short and Long Term Stays</p>
                                
                            </div>
                            <div className="col-6 ">
                            <div><i class="fa fa-money" style={{fontSize:"40px",color:"#EFAA00",padding:"15px"}} aria-hidden="true"></i></div>
                                <p className={styles.smallIcon}>Deposit Payment Option</p>
                            </div>
                            <div className="col-6">
                            <div><i class="fa fa-globe" style={{fontSize:"40px",color:"#EFAA00",padding:"15px"}} aria-hidden="true"></i></div>
                                <p className={styles.smallIcon}>Guests from 160 countries</p>
                            </div>
                            <div className="col-6">
                            <div><i class="fa fa-pencil-square-o" style={{fontSize:"40px",color:"#EFAA00",padding:"15px"}} aria-hidden="true"></i></div>
                                <p className={styles.smallIcon}>Excellent Customer Support</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <section className={styles.bgColor}>
                <div className="container">
                <div className="row " id="work">
                    <div className="col-12 ">
                    <h3 className={styles.subCont}>How HomeStay Works</h3>
                    <div className="row bg-light p-5 mb-5 ">
                        <div class="col-12 ">
                            <div class="row ">
                            <div className="col-2 offset-2"><i class="material-icons" style={{fontSize:"60px",color:"#CA005D"}} aria-hidden="true">search</i></div>
                            <div className="col-8 text-left  p-2">
                            <div className={styles.list}>Search & Request</div>
                            <p className={styles.smallIcon}>Guests search available rooms and send a booking request</p>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div className="col-2 offset-2 "><i class="fa fa-wallet" style={{fontSize:"40px",color:"#CA005D",padding:"15px"}} aria-hidden="true"></i></div>
                            <div className="col-8 text-left  p-2">
                            <div className={styles.list}>Booking & Fee</div>
                            <p className={styles.smallIcon}>Once you accept and confirm availability, guest books and <br/>
                            pays a booking fee to Homestay.com</p>
                            </div>
                        </div>
                     

                        <div class="row">
                            <div className="col-2 offset-2"><i class="fa fa-money" style={{fontSize:"40px",color:"#CA005D",padding:"15px"}} aria-hidden="true"></i></div>
                            <div className="col-8 text-left  p-2">
                            <div className={styles.list}>Payment</div>
                            <p className={styles.smallIcon}>The guest pays you the full amount on arrival. <br/>
                            If you want to ask for an upfront payment this must be clearly stated on your profile.<br/>
                             Some hosts (depending on country and currency) can avail of a 25% Deposit payment option to cover cancellations and no shows.</p>
                            </div>
                        </div>
                     

                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </section>
            
            <section className={styles.bgColor}>
                <div class="container" id="earn">
                    <div className="row">
                        <div class="col-12">
                        <h3 className={styles.subCont}>Earn Money Your Way</h3>
                            <div class="row">
                                
                                <div class="col-4 align-left">
                                <div className={styles.list}>Who stays</div>
                                <p className={styles.smallIcon}>All guests are over 18 years old.<br/>
                                 Advertise your room to holiday-goers, international<br/>
                                  students/interns and professionals.</p>

                                </div>
                                <div class="col-4">2</div>
                                <div class="col-4">3</div>
                            </div>
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
