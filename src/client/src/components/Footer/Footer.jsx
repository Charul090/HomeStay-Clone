import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <dl className={styles.dl}>
                                    <dt className={styles.dt}>Company</dt>
                                    <dd className={styles.dd}>About Us</dd>
                                    <dd className={styles.dd}>Press</dd>
                                    <dd className={styles.dd}>Become an Affiliate</dd>
                                    <dd className={styles.dd}>Work with us</dd>
                                    <dd className={styles.dd}>Contact us</dd>
                                </dl>
                            </div>
                            <div className="col-4">
                                <dl className={styles.dl}>
                                    <dt className={styles.dt}>Explore</dt>
                                    <dd className={styles.dd}>Blog</dd>
                                    <dd className={styles.dd}>Find Guests</dd>
                                    <dd className={styles.dd}>Inspire me</dd>
                                    <dd className={styles.dd}>Invite Friends</dd>
                                </dl>
                            </div>
                            <div className="col-4">
                                <dl className={styles.dl}>
                                    <dt className={styles.dt}>Customer Service</dt>
                                    <dd className={styles.dd}>Need Help?</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <h5 className={styles.dt}>GET SOCIAL</h5>
                        </div>
                        <div className={styles.spacer}>
                        </div>
                        <div className={styles.social_cont}>
                            <div>
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                            <div>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                            <div>
                                <i class="fa fa-pinterest" aria-hidden="true"></i>
                            </div>
                            <div>
                                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.spacer1}></div>
            <div className={styles.footnote}>
                <h6>
                    &nbsp;
                    <a>Terms and Conditions</a>
                    &nbsp;|&nbsp;
                    <a>Privacy Statement</a>
                    &nbsp;|&nbsp;
                    <a>Cookie Settings</a>
                </h6>
            </div>
        </footer>
    )
}
