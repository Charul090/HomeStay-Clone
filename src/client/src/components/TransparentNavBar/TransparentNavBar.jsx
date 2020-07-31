import React from 'react'
import { Link } from "react-router-dom"
import "./TransparentNavBar.css"

export default function TransparentNavBar() {
    return (
        <header>
            <nav className="navbar navbar-home">
                <div className="navbar-header">
                    <div className="navbar-brand navbar-brand-home">
                        <a href="/">
                            <img alt="Homestay.com"
                                src="https://www.homestay.com/assets/logo-homestay-36a9388d17da279b965e5b0dc5153eab12f98ceef3e29332a720df00b71fa2ac.svg" />
                        </a>
                    </div>
                </div>
                <div class="nav-right">
                    <div class="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Destinations
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div>
                        <a><i class="fas fa-heart text-danger pr-1"></i>
                                        INSPIRE ME</a>
                    </div>
                    <div class="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sign Up
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#registermodal" data-toggle="modal">Guest Signup</a>
                            <a class="dropdown-item" href="#">Host Signup</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Log in
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#loginmodal" data-toggle="modal" data-target="#loginmodal">Guest Login</a>
                            <a class="dropdown-item" href="#loginmodal" data-toggle="modal" data-target="#loginmodal">Host Login</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            English
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Help
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div>
                        <a id="list-room">List Room</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
