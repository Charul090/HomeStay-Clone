import React from 'react'
import styles from "./HomePromoBox.module.css"

export default function HomePromoBox() {
    return (
        <>
        <section className={styles.section}>
            <div className={styles.spacer}></div>
            <div className="container-fluid">
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h4>Rent out your spare room</h4>
                        <p>Earn extra income renting out your spare room to professionals, international students and tourists looking for nightly, weekly and monthly stays.</p>
                        <button className={styles.button}>
                            Learn more
                        </button>
                    </div>
                    <div className={styles.picture}></div>
                </div>
            </div>
            <div className={styles.spacer}></div>
        </section>
        <div className={styles.hr}>
            <hr></hr>
        </div>
        </>
    )
}
