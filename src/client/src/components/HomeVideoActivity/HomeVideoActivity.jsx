import React from 'react'
import styles from "./HomeVideoActivity.module.css"
import HomeVideoPlayer from '../HomeVideoplayer/HomeVideoPlayer'

export default function HomeVideoActivity() {
    return (
        <>
            <section className={styles.section}>
                <div className="container-fluid">
                    <div className={styles.spacer1}></div>
                    <h3>Experience a home away from home</h3>
                    <div className={styles.spacer2}></div>
                    <div className="row">
                        <div className="col-7">
                            <HomeVideoPlayer />
                        </div>
                        <div className="col-4 offset-1">
                            <div className={styles.list_container}>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <h5 className={styles.list_title}>HAPPENING RIGHT NOW...</h5>
                                    </li>
                                    <li className="list-group-item">
                                        <a>
                                            <div className={styles.item_container}>
                                                <div className={styles.icon}>
                                                    <i class="fa fa-home" aria-hidden="true"></i>
                                                </div>
                                                <div>
                                                    <p className={styles.list_text}>A guest in France requested to book with <strong>Caroline in Paris, France</strong> for <span class="price-amount"><span class="currency_symbol">₹</span>51</span> <span class="currency-isoCode">INR</span> per night</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        <a>
                                            <div className={styles.item_container}>
                                                <div className={styles.icon}>
                                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                                </div>
                                                <div>
                                                    <p className={styles.list_text}>Inna in Switzerland left a review for <strong>Emmanuel in Paris, France</strong></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li><li className="list-group-item">
                                        <a>
                                            <div className={styles.item_container}>
                                                <div className={styles.icon}><i class="fa fa-briefcase" aria-hidden="true"></i></div>
                                                <div>
                                                    <p className={styles.list_text}>A guest in India requested to book with <strong>Kajol in Nainital, India</strong> for <span class="price-amount"><span class="currency_symbol">₹</span>805</span> <span class="currency-isoCode">INR</span> per night</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li><li className="list-group-item">
                                        <a>
                                            <div className={styles.item_container}>
                                                <div className={styles.icon}>
                                                    <i class="fa fa-moon-o" aria-hidden="true"></i>
                                                </div>
                                                <div>
                                                    <p className={styles.list_text}>A guest in United Kingdom booked 7 nights with <strong>Ramesh Brinda . in Lisbon, Portugal</strong> for <span class="price-amount"><span class="currency_symbol">₹</span>21</span> <span class="currency-isoCode">INR</span> per night</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        <a>
                                            <div className={styles.item_container}>
                                                <div className={styles.icon}>
                                                    <i class="fa fa-moon-o" aria-hidden="true"></i>
                                                </div>
                                                <div>
                                                    <p className={styles.list_text}>Justin in Auckland, New Zealand left a review for <strong>Gail in New Zealand</strong></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.spacer1}>
                    </div>
                </div>
            </section>
            <hr className={styles.line}></hr>
        </>
    )
}
