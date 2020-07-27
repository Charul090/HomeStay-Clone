import React from 'react'
import styles from "./MainEntityInfo.module.css"
import { useSelector } from "react-redux"

export default function MainEntityInfo() {
    let { number_reviews, price_starting } = useSelector(state => state.entity.apartment_data)

    return (
        <div className="container-fluid" id="main-content-row-margin">
            <div className="row">
                <div className="col-3 offset-9" style={{
                    position: "relative",
                    overflow: "visible",
                    boxSizing: "border-box",
                    minHeight: "1px"
                }}>
                    <div className={styles.sideContainer}>
                        <div className={styles.sidebar}>
                            <button className={styles.button}>
                                Check Avialability
                            </button>
                            <div className={styles.spacer1}></div>
                            <div className={styles.card}>
                                <div className={styles.card_body}>
                                    <div className={styles.host_info}>
                                        <div className={styles.spacer2}></div>
                                        <h2>Meet </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
