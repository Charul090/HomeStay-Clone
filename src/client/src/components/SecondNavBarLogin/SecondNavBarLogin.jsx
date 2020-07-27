import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import  "./SecondNavBarLogin.css"

export class SecondNavBarLogin extends Component {
    render() {
        return (
            <div>
                <div class="d-flex justify-content-end secNav" style={{background:"#6D635F"}}>
                <div>dashboard</div>
                <div>inbox</div>
                <div>find guests</div>
                <div>bookings</div>
                <div>verify me</div>
                <div>calender</div>
                <div>my listing</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondNavBarLogin)
