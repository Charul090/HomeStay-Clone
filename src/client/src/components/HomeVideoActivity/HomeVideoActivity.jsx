import React from 'react'
import styles from "./HomeVideoActivity.module.css"
import HomeVideoPlayer from '../HomeVideoplayer/HomeVideoPlayer'

export default function HomeVideoActivity() {
    return (
        <section className={styles.section}>
            <div className="container-fluid">
                <div className={styles.spacer1}></div>
                <h3>Experience a home away from home</h3>
                <div className={styles.spacer2}></div>
                <div className="row">
                    <div className="col-7">
                        <HomeVideoPlayer />
                    </div>
                    <div className="col-5"></div>
                </div>
                <div className={styles.spacer1}>
                    
                </div>
            </div>
        </section>
    )
}
