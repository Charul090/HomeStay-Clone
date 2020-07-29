import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './ForgotPassword.module.css';
import NavBarHome from '../NavBarHome/NavBarHome'
import Footer from '../Footer/Footer'


export class ForgotPassword extends Component {
        constructor(props){
            super(props)
            this.state = {
                password:false
            }
        }

        handlePassword = ()=>{
            this.setState({
                password:true
            })
        }

    render() {
        return (
            <div>
                <div className={styles.bgWhite}>
                <NavBarHome />
                </div>
                <div className={styles.bgSilver}>
                    <div className={styles.cardPadding}>
                    {!this.state.password?
                        <div className={styles.cardBody}>
                        <div class="card-header" style={{background:"#CA005D"}}>
                        <h3 className={styles.forgot}>Forgot Password?</h3>
                        </div>
                        <div class="card text-center" >
                        <div class="card-body">
                            <p class="card-title text-left">If you have forgotten your password, <span className="font-weight-bold">please enter your email address below.</span></p>
                            <p class="card-text text-left">We will send you an email with instructions to reset your password.</p>
                            <input type="text" placeholder="email" className=" p-2 w-100"></input><br/>
                            <button className={styles.btnCss} onClick={this.handlePassword}>Reset Password</button>
                        </div>
                        </div>
                        </div>
                        :
                        <div style={{padding:"170px"}}>
                        <h5 className=" p-3 bg-light text-success" >We have sent you an email with instructions to reset your password.</h5>
                        </div>
                    }                   
                    </div>
                    <Footer />
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
