import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBarHome from '../NavBarHome/NavBarHome'
import styles from './HostSignUpPage.module.css';
import { Facebook_Login_Query } from '../../redux/AuthRedux/action';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import Footer from '../Footer/Footer.jsx'

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
                        <a class="nav-link " href="#earn" ><i class="far fa-calendar-check" style={{fontSize:"20px",color:"silver"}} aria-hidden="true"></i><span className="text-light p-2"> BE IN CONTROL</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#faq" ><i class="fa fa-question-circle" style={{fontSize:"20px",color:"silver"}} aria-hidden="true"></i> <span className="text-light p-2">FAQ?</span></a>
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
                <div class="container " style={{color:"#512B1A"}} id="earn">
                    <div className="row ">
                        <div class="col-12 ">
                        <h3 className={styles.subCont}>Earn Money Your Way</h3>
                            <div class="row">
                                
                                <div class="col-4 ">
                                <span className="text-left p-2">
                                <div className={styles.list}>Who stays</div>
                                </span>
                                <p className="small text-left">All guests are over 18 years old.<br/>
                                 Advertise your room to holiday-goers, <br/>
                                 international students/interns and professionals.</p>

                                </div>
                                <div class="col-4">
                                <span className="text-left p-2">
                                <div className={styles.list}>How long</div>
                                </span>
                                <p className="small text-left">Guests book homestays for nightly, weekly or monthly stays.<br/>
                                 Set your preferred length of stay to ensure you receive you the most 
                                 suitable guests.</p>

                                </div>
                                <div class="col-4">
                                <span className="text-left p-2">
                                <div className={styles.list}>Right price</div>
                                </span>
                                <p className="small text-left">You control and set your own prices. Remember long term <br/>
                                guests will look for a competitive monthly rate..</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.bgColor}>
                <div  style={{color:"#512B1A"}} id="faq">
                    <div class="container">
                <div className="row pb-5 pt-5">
                        <div class="col-12 ">
                        <div class="p-5">
                        <h3 className={styles.subCon}>Frequently asked questions</h3>
                        </div>
                        <div class="accordion p-5" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span className={styles.fq}>Who are the guests? <span className="float-right">+</span></span>
                        </button>
                    </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className={styles.fq}>How do I get paid?<span className="float-right">+</span></span>
                        </button>
                    </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span className={styles.fq}>What's expected of me when listing my room?<span className="float-right">+</span></span>
                        </button>
                    </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed bg-light" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span className={styles.fq}>Do I need insurance?<span className="float-right">+</span></span>
                        </button>
                    </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
              

                </div>
                </div>
                </div>
                </div>
                </div>
            </section>

            <section >
                <div  style={{color:"#512B1A"}} >
                <div className="row pt-5 pb-5">
                        <div class="col-12 ">
                        <h3 className={styles.subCon}>Now not a good time?</h3>
                        <p >We can email you more information to explain how it all works.</p>
                        <button className="btn btn-lg text-light" style={{background:"#CA005D"}}>Send me more Information</button>
                </div>
                </div>
                </div>
                </section>

            <Footer style={{marginTop:"0px"}} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})
 
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HostSignUpPage)
