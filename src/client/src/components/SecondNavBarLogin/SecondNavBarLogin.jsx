import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

export class SecondNavBarLogin extends Component {
    render() {
        return (
            <div>
                <div  style={{background:"#6D635F"}}>
                    <div className="row">
                        <div className="col-md-9 border himage p-2" ></div>
                        <div className="col-6 col-md-3 border" >
                        <div className="row ">
                        <div className="col-4 border-left border-secondary  p-1 fontstyle"></div>
                        <div className="col-4 border-left border-secondary p-1">1</div>
                        <div className="col-2 border-left border-secondary p-1"></div>
                        <div className="col-2 border-left border-secondary p-1"><i className="fa fa-search" style={{fontSize:"28px",color:"black"}}></i></div>
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
