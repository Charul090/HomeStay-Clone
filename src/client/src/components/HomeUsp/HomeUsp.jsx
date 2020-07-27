import React from 'react'
import styles from "./HomeUsp.module.css"

export default function HomeUsp() {
    return (
        <section className={styles.section}>
            <div className="container-fluid">
                <div className={styles.spacer1}></div>
                <div className="row">
                    <div className="col-4">
                        <div className={styles.icon_container}>
                            <div className={styles.icon1}>
                                <i class="fa fa-money" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h4>True value</h4>
                            <p>Offering quality and affordability, homestays are a great value accommodation option for short or long term stays.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.icon_container}>
                            <div className={styles.icon2}>
                                <i class="fa fa-home" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h4>Real Homes</h4>
                            <p>Every home has a host present and they do more than just hand over keys. They'll help you settle into life in a new place.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.icon_container}>
                            <div className={styles.icon3}>
                                <i class="fa fa-comments-o" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h4>Real Connections</h4>
                            <p>Use our helpful features to find the perfect host family. Whether you want to borrow a bike or have full access to the kitchen we've the right room for your stay.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.spacer1}></div>
            </div>
        </section>
    )
}
