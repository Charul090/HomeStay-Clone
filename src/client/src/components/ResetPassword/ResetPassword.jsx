import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer'
import styles from './ResetPassword.module.css'
import NavBarHome from '../NavBarHome/NavBarHome'
import { fetchReset } from "../../redux/PasswordRedux/action";

export class ResetPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            token:"",
            email:"",
            firstPassword:"",
            confirmPassword:"",
            wrongPassword:false,
            resetSuccess:false
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value,
            wrongPassword:false
        })
    }

    handleReset = ()=>{

        if(this.state.firstPassword==this.state.confirmPassword&&this.state.firstPassword!==""&&this.state.confirmPassword!==""){
            var obj = {
                token:this.state.token,
                email:this.state.email,
                password:this.state.confirmPassword
            }
            this.props.fetchReset(obj);
            this.setState({
                resetSuccess:true
            })
        }
        else{
            this.setState({
                wrongPassword:true
            })
        }
    }

    componentDidMount(){
        const myurl = new URL(window.location.href);
        const param = myurl.searchParams
        this.setState({
            token:param.get('a'),
            email:param.get('email')
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <div className={styles.bgWhite}>
                <NavBarHome />
                </div>
                <div className={styles.bgSilver}>
                    <div className={styles.cardPadding}>
                    
                    <div>
                        {!this.state.resetSuccess?
                    <div className={styles.cardBody}>
                    <div class="card-header" style={{background:"#CA005D"}}>
                    <h3 className={styles.forgot}>Reset Password</h3>
                    </div>
                    <div class="card text-center" >
                    <span style={{background:"rgba(183, 177, 174, 0.3)"}}>
                    <div class="card-body">
                        <p class="card-text ">Please choose a new password, make sure it's at least 6 characters long..</p>
                        <input type="text" name="firstPassword" value ={this.state.firstPassword}placeholder="Password" onChange={this.handleChange} className=" p-2 w-100"></input><br/><br/>
                        <input type="password" name="confirmPassword" value = {this.state.confirmPassword} placeholder="Confirm Password" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                        <button className={styles.btnCss} onClick={this.handleReset}>Reset Password</button>
                    </div>
                    </span>
                    {this.state.wrongPassword?<div style={{color:'red'}}>Enter correct password</div>:""}
                    </div>
                    </div>
                    :
                    <div style={{padding:"170px"}}>
                    <h5 className=" p-3 bg-light text-success" >Password reset successful.</h5>
                    </div>
                    }
                    </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      resetError: state.password.resetError,
      resetSuccess: state.password.resetSuccess
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchReset: (n) => dispatch(fetchReset(n))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
