import React from 'react'
import styles from "./HomeReviewPanel.module.css"

export default function HomeReviewPanel() {
    return (
        <section className={styles.review}>
            <div className="container-fluid">
                <div className={styles.spacer}></div>
                <div className="row">
                    <div className="col-4">
                        <div className={styles.card}>
                            <div className={styles.profile}>
                                <div className={styles.picture_container}>
                                    <img src="https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSImZ2lkOi8vaHN0L0F2YXRhci85MDAyMD9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--60f0b0aab01d5ac5152c40d58cf7d18b2547da4f&style=small" alt="profile-1" />
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={styles.review_side}>
                                <div className={styles.review_content}>
                                    <em>
                                        <p class="small">
                                            Wonderful experience in the beautiful house of Tatiana. Big room and bathroom. Professi...
                                        </p>
                                    </em>
                                </div>
                                <div className={styles.hearts}>
                                    <img alt="hearts" src="https://www.homestay.com/assets/small-review-score-img-c68dbe08abd3620cb7ae9b367952c1caac5322eb67c4d65ecfcafd83fba88dda.svg" />
                                </div>
                                <div className={styles.review_link}>
                                    <p className="small strong">
                                        <a href="#" target="_blank">Read Bea's review</a>
                                        <span class="text-primary">&nbsp; ›</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.card}>
                            <div className={styles.profile}>
                                <div className={styles.picture_container}>
                                    <img src="https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8xMDI4NTA_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--fc29eea06c33f2cea7d8230e84d539220565323f&style=small" alt="profile-1" />
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={styles.review_side}>
                                <div className={styles.review_content}>
                                    <em>
                                        <p class="small">
                                            Judy was an excellent hostess, kind and helpful in every way. The room was comfortable ...
                                        </p>
                                    </em>
                                </div>
                                <div className={styles.hearts}>
                                    <img alt="hearts" src="https://www.homestay.com/assets/small-review-score-img-c68dbe08abd3620cb7ae9b367952c1caac5322eb67c4d65ecfcafd83fba88dda.svg" />
                                </div>
                                <div className={styles.review_link}>
                                    <p className="small">
                                        <a href="#" target="_blank">Read Judy's review</a>
                                        <span class="text-primary">&nbsp; ›</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.card}>
                            <div className={styles.profile}>
                                <div className={styles.picture_container}>
                                    <img src="https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSImZ2lkOi8vaHN0L0F2YXRhci84Nzk4Nj9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--ae8a8fdc971f052b31deea8eedfebbcfa0f414f5&style=small" alt="profile-1" />
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={styles.review_side}>
                                <div className={styles.review_content}>
                                    <em>
                                        <p class="small">
                                            I can only recommend this homestay! It's a young fun loving family. The food they provi...
                                        </p>
                                    </em>
                                </div>
                                <div className={styles.hearts}>
                                    <img alt="hearts" src="https://www.homestay.com/assets/small-review-score-img-c68dbe08abd3620cb7ae9b367952c1caac5322eb67c4d65ecfcafd83fba88dda.svg" />
                                </div>
                                <div className={styles.review_link}>
                                    <p className="small strong">
                                        <a href="#" target="_blank">Read Martin's review</a>
                                        <span class="text-primary">&nbsp; ›</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.spacer}></div>
            </div>
        </section>
    )
}
