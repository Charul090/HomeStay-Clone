import React from 'react'
import styles from './Reviews.module.css'
import { useSelector } from "react-redux";

export default function Reviews() {
    let { reviews } = useSelector(state => state.entity);
    console.log(reviews);
    const data = []
    for (var key in reviews) {
        data.push(reviews[key]);
    }
    return (
        <div className={styles.main} data-spy="scroll" data-target="#navbar-example2" data-offset="0">
            <h2 className={styles.review} id="review">Reviews</h2>
            <div className={styles.spacer3}></div>
            {data && data.map((item) => (<div className="container-fluid">
                <div className="row ">
                    <div className="col-8">
                        <div className="row mt-2 p-2">
                            <div className="col-2 ">
                                <div className="text-center">
                                    <img className={styles.imgheight} src={item.profile_pic} alt="image" />
                                </div>
                                <div className={styles.name}>
                                    <p className="text-primary">{item.name}</p>
                                </div>
                            </div>
                            <div className="col-10 pb-3" style={{ background: "#F1EFEF", borderRadius: "15px" }}>
                                <div className={styles.arrowBox}>
                                    <div class="pt-3 ">
                                        <div className={styles.top}>
                                            <h5 className={styles.date}>July 2020</h5>
                                            <div className={styles.hearts}>
                                                <img src="https://www.homestay.com/assets/small-review-score-img-c68dbe08abd3620cb7ae9b367952c1caac5322eb67c4d65ecfcafd83fba88dda.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.para_cont}>
                                            <span className={styles.para} >{item.review}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>))}
            <div className={styles.how}>
                <div className="container-fluid">
                    <div className={styles.spacer1}>
                        <h4>How do I book?</h4>
                        <p>Contact the host to check their availability and ask them any questions you have about staying with them. Once the host confirms they’re available for your dates, you can complete your booking.</p>
                        <h4>
                            When do I pay?
                        </h4>
                        <p>
                            Once a host confirms they're available, you can go ahead and pay the 15% booking fee (maximum of 199 $£€ for longer term bookings) using a choice of payment methods: Visa, Mastercard, American Express, Maestro, Laser, JCB & PayPal (not available in certain countries). You then pay your host on arrival or as stated by your host on their profile and agreed by you on booking. Please be cautious if a host requests advance payment if its not included on their profile. Our hosts have been advised that if they wish to request advance payment they must make this explicit in their profile. We do not recommend the use of Money gram or Western Union.
                        </p>
                        <h4>
                            When can I share my contact details?
                        </h4>
                        <p>
                            Host and Guest email address, phone number and home address will be exchanged in a confirmation email sent to both immediately after a booking is completed. It's against our policy for Guests and Hosts to exchange direct contact details via our messaging system.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
