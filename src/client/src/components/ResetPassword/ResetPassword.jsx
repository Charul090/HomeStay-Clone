import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer'
import styles from './ResetPassword.module.css'
import NavBarHome from '../NavBarHome/NavBarHome'

export class ResetPassword extends Component {
    render() {
        return (
            <div>
                <div className={styles.bgWhite}>
                <NavBarHome />
                </div>
                <div className={styles.bgSilver}>
                    <div className={styles.cardPadding}>
                    <div>
                    <div className={styles.cardBody}>
                    <div class="card-header" style={{background:"#CA005D"}}>
                    <h3 className={styles.forgot}>Reset Password</h3>
                    </div>
                    <div class="card text-center" >
                    <span style={{background:"rgba(183, 177, 174, 0.3)"}}>
                    <div class="card-body">
                        <p class="card-text ">Please choose a new password, make sure it's at least 6 characters long..</p>
                        <input type="text" placeholder="Password" className=" p-2 w-100"></input><br/><br/>
                        <input type="text" placeholder="Confirm Password" className=" p-2 w-100"></input><br/>
                        <button className={styles.btnCss}>Reset Password</button>
                    </div>
                    </span>
                    </div>
                    </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
