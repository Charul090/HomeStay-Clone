import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

export class SecondNavBarLogin extends Component {
    render() {
        return (
            <div>
                <div  style={{background:"#6D635F"}}>
                    <div className="row">
                        <div className="col-md-9 border border-dark himage p-2" ></div>
                        <div className="col-6 col-md-3 border border-dark" >
                        <div className="row ">
                        <div className="col-4  border-dark  p-1 "></div>
                        <div className="col-4 border-left border-dark p-1">1</div>
                        <div className="col-2 border-left border-dark  p-1"></div>
                        <div className="col-2 border-left border-dark p-1"></div>
                        </div>
                    </div>
                    </div>
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
