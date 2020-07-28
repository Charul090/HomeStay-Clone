import React from 'react'
import styles from "./HomePress.module.css"

export default function HomePress() {
    return (
        <section className={styles.section}>
            <div className="container-fluid">
                <hr className={styles.hr}></hr>
                <div className={styles.spacer1}></div>
                <div className={styles.row}>
                    <a></a>
                    <a></a>
                    <a></a>
                    <a></a>
                    <a></a>
                </div>
                <div className={styles.spacer1}></div>
            </div>
        </section>
    )
}
