import React from 'react'
import styles from "./HomeInsiderTip.module.css"

export default function HomeInsiderTip() {
    return (
        <>
            <section className={styles.section}>
                <div className="container-fluid">
                    <hr className={styles.hr}></hr>
                    <div className={styles.spacer1}></div>
                    <h3 className={styles.title}>Get the insider travel tips</h3>
                    <p className={styles.quote}>Inspiration, discounts and homestay recommendations</p>
                    <div className="row justify-content-center">
                        <div className="col-7">
                            <form className={styles.form}>
                                <div className="form-row">
                                    <div className="col-5">
                                        <input type="mail" className="form-control" placeholder="Your email address"></input>
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Your first name"></input>
                                    </div>
                                    <div className="col-3">
                                        <button className={styles.button}>Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <div className={styles.spacer1}></div>
            </section>
        </>
    )
}
