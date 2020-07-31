import React from 'react'
import styles from './Reviews.module.css'
import { useSelector } from "react-redux";

export default function Reviews() {
    let { reviews } = useSelector(state => state.entity);
    console.log(reviews);
    const data = []
    for(var key in reviews){
        data.push(reviews[key]);
    }
    return (
        <div className={styles.spacer1}>
            {data&& data.map((item)=>(<div className="container ">
                <h3 className="text-left">Reviews</h3>
                <div className="row ">
                    <div className="col-8">
                        <div className="row mt-2 p-2">
                            <div className="col-2 ">
                                <div className="pr-2">
                                <img className = {styles.imgheight} src={item.profile_pic} alt="image"/>
                                </div>
                                <h5 className="text-primary">{item.name}</h5>
                                <div class="text-muted ">Italy</div>
                                <div class="text-muted " >Age: 45</div>
                            </div>
                            <div className="col-10 pl-5" style={{background:"#F1EFEF",borderRadius: "15px"}}>
                                <div className={styles.arrowBox}>
                                <div class="row pt-3">
                                <div className="text-left text-muted col-6">August 2020</div>
                                <div className="float-right col-6"><img src="https://www.homestay.com/assets/small-review-score-img-c68dbe08abd3620cb7ae9b367952c1caac5322eb67c4d65ecfcafd83fba88dda.svg"/></div>
                                <span className="pt-3">
                                <div className={styles.para} >{item.review}</div>
                                </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>))}
        </div>
    )
}
