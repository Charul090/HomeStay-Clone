import React from 'react'
import styles from "./BannerNavBar.module.css"
import {useSelector} from "react-redux"


export default function BannerNavBar() {

    let {number_reviews,price_starting} = useSelector(state=>state.entity.apartment_data)

    return (
        <div className={styles.banner_nav}>
            <nav className="navbar navbar-zero sticky-top">
                <div className="container-fluid d-flex">
                    <div className={styles.main}>
                        <div className={styles.element}>
                            <a>HOMESTAY</a>
                        </div>
                        <div className={styles.element}>
                            <a>PHOTOS</a>
                        </div>
                        <div className={styles.element}>
                            <a>Rooms</a>
                        </div>
                        <div className={styles.element}>
                            <a>Location</a>
                        </div>
                        <div className={styles.element}>
                            <a>Meals & Rules</a>
                        </div>
                        <div className={styles.element}>
                            <a>{number_reviews} Reviews</a>
                        </div>
                        <div className={styles.element}>
                            <a>How to Book</a>
                        </div>
                        <div className={styles.element}>
                            <a></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
