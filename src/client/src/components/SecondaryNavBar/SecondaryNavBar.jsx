import React from 'react'
import styles from "./SecondaryNavBar.module.css"
import {Link} from "react-router-dom"

export default function SecondaryNavBar() {
    return (
        <section className="sticky-top">
            <nav className="navbar navbar-zero">
                <div className="container">
                    <div className={styles.main}>
                        <div className={styles.element}>
                            <Link>LIST A ROOM</Link>
                        </div>
                        <div className={styles.element}>
                            <Link>Travel</Link>
                        </div>
                        <div className={styles.element}>
                            <Link>Study</Link>
                        </div>
                        <div className={styles.element}>
                            <Link>Work</Link>
                        </div>
                        <div className={styles.btn_container}>
                            <button className={styles.button}>Find a homestay</button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}
