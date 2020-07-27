import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./NavBarAfterLogin.css"
import {Link} from "react-router-dom"
import { ButtonGroup,Dropdown} from 'react-bootstrap'
import {Navbar,Nav,NavDropdown, Button, NavbarBrand,} from 'react-bootstrap';
import SecondNavBarLogin from "../SecondNavBarLogin/SecondNavBarLogin.jsx"

export class NavBarAfterLogin extends Component {

    
    render() {
        return (
            <div>
                <div className="border-dark border ">
                    <div className="row">
                        <div className="col-md-9 border himage " >
                            <div className=" h-image ">
                            <Link href="/"><img src="https://www.homestay.com/assets/logo-homestay-36a9388d17da279b965e5b0dc5153eab12f98ceef3e29332a720df00b71fa2ac.svg"/></Link>
                            </div>
                        </div>

                    <div className="col-6 col-md-3 border clear-left">
                        <div className="row ">
                        <div className="col-4 border-left border-secondary pt-4 fontstyle">CONTACT HOST</div>
                        <div className="col-4 border-left border-secondary pt-1">
                            <div className="row">
                                <div className="col-4 pb-1"><img className="imge"src="https://www.homestay.com/assets/user/graphic-avatar-placeholder-0f9a1eaaaad293c274aadb54ef4776c60ecb1d178e712b69b2b81002862e81f6.svg"/></div>
                                <div className="col-4 pt-3 ml-2"><span className="fontstyle1">LALITHA</span></div>
                                <div className="col-2 pt-2">
                                    <Dropdown >
                                    <Dropdown.Toggle split variant="transparent" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 border-left border-secondary pt-2 mt-1">
                        <div className="row">
                                <div className="col-6 pt-2"><span className="fontstyle1">HELP</span></div>
                                <div className="col-3">
                                <Dropdown >
                                    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 border-left border-secondary pt-3"><i className="fa fa-search" style={{fontSize:"28px",color:"#512B1A"}}></i></div>
                        </div>
                    </div>
                    </div>
                </div>

                <SecondNavBarLogin />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarAfterLogin)
