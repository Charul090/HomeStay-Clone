import React from 'react'
import { Link, useParams, useLocation, useRouteMatch } from "react-router-dom"
import { Dropdown } from 'react-bootstrap'
import SecondNavBarLogin from "../SecondNavBarLogin/SecondNavBarLogin.jsx"
import { useSelector,useDispatch } from "react-redux"
import styles from "./NavBarAfterLogin.module.css"
import {LOGOUT_USER} from "../../redux/AuthRedux/action.js"
import {deleteAuth} from "../../redux/localstorage.js"

const NavBarAfterLogin = () => {

    let { username } = useSelector(state => state.auth)

    let params = useParams()
    let location = useLocation()
    let match = useRouteMatch()
    let dispatch = useDispatch()

    console.log(params, location, match)

    const handleLogout = (e)=>{
        e.preventDefault()
        dispatch(LOGOUT_USER())
        deleteAuth()
    }

    return (
        <header className={styles.main}>
            <nav>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <div className={styles.himage}>
                            <Link to="/"><img src="https://www.homestay.com/assets/logo-homestay-36a9388d17da279b965e5b0dc5153eab12f98ceef3e29332a720df00b71fa2ac.svg" /></Link>
                        </div>
                    </div>
                    <div className={styles.links}>
                        {
                            match && match.path === "/apartment/:id" ?
                                <div className={styles.search}>
                                    <i className="fa fa-search">
                                        </i>
                                </div>
                                :
                                null
                        }
                        <div className={styles.help} >
                            <div><span className={styles.fontstyle1}>HELP</span></div>
                            <div className="">
                                <Dropdown className={styles.dropdownarrow}>
                                    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
                                    <Dropdown.Menu className={styles.logout}>
                                        <Dropdown.Item href="#/action-1">General</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Host</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Guests</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Messeging</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Reviews</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Invite Friend</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div >
                        <div className={styles.profile} >
                            <div className="pt-1"><img className={styles.imge} src="https://www.homestay.com/assets/user/graphic-avatar-placeholder-0f9a1eaaaad293c274aadb54ef4776c60ecb1d178e712b69b2b81002862e81f6.svg" /></div>
                            <div><span className={styles.fontstyle1}>{username}</span></div>
                            <div>
                                <Dropdown className={styles.dropdownarrow}>
                                    <Dropdown.Toggle split variant="light" />
                                    <Dropdown.Menu className={styles.logout}>
                                        <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Inbox</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Trips</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Find guest</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Verify</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Bookings</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Acount</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={handleLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div >
                        {location && location.pathname === "/" ?
                            <div className={styles.inspire}>
                                <div>
                                    <span className={styles.fontstyle1}>
                                        <i class="fas fa-heart text-danger pr-1"></i>
                                        INSPIRE ME
                                     </span>
                                </div>
                            </div>

                            :
                            <div className={styles.contact}>
                                <div><span className={styles.fontstyle1}>CONTACT HOSTS</span></div>
                            </div>}
                    </div>
                </div>
            </nav>

            {
                location && location.pathname === "/" ?
                    <SecondNavBarLogin />
                    :
                    null
            }

        </header>
    )
}


export default NavBarAfterLogin
