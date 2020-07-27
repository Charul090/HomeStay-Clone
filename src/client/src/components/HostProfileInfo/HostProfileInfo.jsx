import React from 'react'
import styles from "./HostProfile.module.css"
import { useSelector } from "react-redux"

export default function HostProfile() {
    let { number_reviews, price_starting } = useSelector(state => state.entity.apartment_data)
    let {host_name,questions,social_skills,host_pic,created_at,hobbies} = useSelector(state=>state.entity.host_profile)
    let questions_keys = null

    if(questions){
        questions_keys = Object.keys(questions)
    }
    

    const question_map={
        friends_describe:"FRIENDS MIGHT DESCRIBE ME AS…",
        host_guest:"WHEN I HOST GUESTS….",
        typical_day:"ON A TYPICAL DAY…",
        difference:"I’M DIFFERENT TO OTHER HOSTS BECAUSE…",
        home_is:"MY HOME IS…"
    }

    return (
        <div className="container-fluid" id="main-content-row-margin">
            <div className="row">
                <div className="col-3 offset-9" style={{
                    position: "relative",
                    overflow: "visible",
                    boxSizing: "border-box",
                    minHeight: "1px"
                }}>
                    <div className={styles.sideContainer}>
                        <div className={styles.sidebar}>
                            <button className={styles.button}>
                                Check Avialability
                            </button>
                            <div className={styles.spacer1}></div>
                            <div className={styles.card}>
                                <div className={styles.card_body}>
                                    <div className={styles.host_info}>
                                        <div className={styles.spacer2}></div>
                                        <h2>Meet {host_name}</h2>
                                        <div className={styles.spacer1}></div>
                                        <div className={styles.profile}>
                                            <img src={host_pic}/>
                                            <img src={"https://www.homestay.com/assets/small-review-score-img-c68dbe08abd3620cb7ae9b367952c1caac5322eb67c4d65ecfcafd83fba88dda.svg"}/>
                                        </div>
                                        <div className={styles.spacer2}></div>
                                        <p className={styles.social}>{social_skills}</p>
                                        <div className={styles.spacer1}></div>
                                        <hr className={styles.hr}></hr>
                                        <div className={styles.spacer1}></div>
                                        <div className={styles.questions}>
                                            {
                                                questions_keys === null || questions_keys.length === 0?null:
                                                questions_keys.map((elem)=>{
                                                    return( 
                                                    <div className="mb-3">
                                                        <h5 className={styles.question_title}>{question_map[elem]}</h5>
                                                        <p className={styles.question_answer}>{questions[elem]}</p>
                                                    </div>
                                                    )
                                                })
                                            }
                                            {
                                                hobbies === undefined?null:
                                                <div className="mb-3">
                                                        <h5 className={styles.question_title}>FAMILY HOBBIES</h5>
                                                        <p className={styles.question_answer}>{hobbies.join(",")}</p>
                                                </div>
                                            }{
                                                created_at === undefined?null:
                                                <div className="mb-3">
                                                        <h5 className={styles.question_title}>HOSTING GUESTS SINCE</h5>
                                                        <p className={styles.question_answer}>{created_at}</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
