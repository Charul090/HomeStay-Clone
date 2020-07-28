import React from 'react'
import styles from "./HomeGuideBook.module.css"

export default function HomeGuideBook() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.content}>
                    <div className="container-fluid">
                        <div className={styles.spacer1}>
                        </div>
                        <h3>Student Accommodation</h3>
                        <div className={styles.spacer2}></div>
                        <div className="row">
                            <div className="col-9">
                                <p className={styles.text}>Homestays provide a truly affordable and safe way to stay, when learning a new language, studying abroad on Erasmus or doing an internship. Our secure online booking system, complete with reviews gives you peace of mind that your accommodation is now sorted.</p>
                            </div>
                        </div>
                        <div className={styles.spacer2}></div>
                        <div>
                            <button className={styles.button}>
                                READ STUDENT STORIES
                        </button>
                        </div>
                    </div>
                </div>
            </section>
            <hr className={styles.hr}></hr>
            <div className={styles.spacer1}></div>
        </>
    )
}
