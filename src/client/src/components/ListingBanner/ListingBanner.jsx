import React, { useState, useEffect } from 'react'
import styles from "./ListingBanner.module.css"
import { useSelector } from "react-redux"
import BannerNavBar from '../BannerNavBar/BannerNavBar'

export default function ListingBanner() {

    let { bedroom_image, name, area, city, country, price_starting } = useSelector(state => state.entity.apartment_data)



    return (
        <div className={styles.listing_container}>
            <div style={{ backgroundImage: `url(${bedroom_image})` }} className={styles.background} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className={styles.catchphrase}>
                            <h1 className={styles.title}>
                                {name}
                            </h1>
                            <div className={styles.spacer1}></div>
                            <h5>HOMESTAY IN {area}-{city},{country}</h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.price}>
                            <h5>
                                <a className={styles.price}>
                                    <span className="value">
                                        From <strong><span className={styles.amount}>₹{price_starting}</span></strong> per night</span>
                                </a>
                            </h5>
                        </div>
                        <div className={styles.spacer1}></div>
                    </div>
                </div>
                <div className={styles.fav_container}>
                    <div className={styles.fav_button}>

                    </div>
                </div>
                <BannerNavBar />
            </div>
        </div>
    )
}
