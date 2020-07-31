import React from 'react'
import styles from "./MealInfo.module.css"
import { useSelector } from "react-redux"

export default function MealInfo() {
    let { meals,rules } = useSelector(state => state.entity.area)
    let meals_key = null

    if (meals !== undefined) {
        meals_key = Object.keys(meals)
    }

    if(rules !== undefined){
        rules = rules.split("\n")
    }
    return (
        <div className={styles.mealmain} data-spy="scroll" data-target="#navbar-example2" data-offset="0">
            <div className={styles.spacer1} id="meal"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <h2 className={styles.title}>Meals</h2>
                        <p className={styles.para}>
                            Hosts can offer a complimentary light breakfast at their discretion. All other meals, including a full breakfast, might incur an additional cost, if offered. Meals and any additional payment should be arranged directly with your host.
                        </p>
                        <div className={styles.spacer3}></div>
                        <h5>INCLUDED IN THE STAY</h5>
                        {
                            meals_key && meals_key.map((elem) => {
                                if (meals[elem]) {
                                    return (
                                        <p className={styles.wel_yay}>
                                            <i className="fa fa-check mr-1" aria-hidden="true"></i>
                                            <span className={styles.reset}> {elem[0].toUpperCase() + elem.slice(1)}</span>
                                        </p>
                                    )
                                }
                                else {
                                    return (
                                        <p className={styles.wel_nay}>
                                            <i class="fa fa-times mr-1" aria-hidden="true"></i>
                                            <span> {elem[0].toUpperCase() + elem.slice(1)}</span>
                                        </p>
                                    )
                                }
                            })
                        }
                        <div className={styles.spacer3}></div>
                        <h2 className={styles.title}>House Rules</h2>
                        {
                            rules && rules.map((elem)=>{
                                return(
                                    <p className={styles.para}>{elem}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
