import React from 'react'
import styles from "./MainEntityInfo.module.css"
import { useSelector } from "react-redux"
import EntityCarousel from '../EntityCarousel/EntityCarousel'

export default function MainEntityInfo() {
    let { welcomes } = useSelector(state => state.entity.host_profile)
    let { about, house_facilities } = useSelector(state => state.entity.apartment_data)
    let welcomes_keys = null

    if (welcomes) {
        welcomes_keys = Object.keys(welcomes)
    }

    if (about) {
        about = about.split("\n")
    }

    let house_facilities_keys = null

    if (house_facilities) {
        house_facilities_keys = Object.keys(house_facilities)
    }

    return (
        <div className={styles.main} data-spy="scroll" data-target="#navbar-example2" data-offset="0">
            <div className="container-fluid" id="about">
                <div className="row">
                    <div className="col-8">
                        <div className={styles.spacer1}></div>
                        <h2 className={styles.about}>About the homestay</h2>
                        <div className={styles.spacer2}></div>
                        <div className={styles.welcomes}>
                            <p className="small">Welcomes</p>
                            {welcomes_keys && welcomes_keys.map((elem) => {
                                return (
                                    <p className="small">
                                        {welcomes[elem] ?
                                            <span className={styles.wel_yay}>
                                                <i className="fa fa-check mr-1" aria-hidden="true"></i>
                                                <span className={styles.reset}>{elem[0].toUpperCase() + elem.slice(1)}</span>
                                            </span>
                                            :
                                            <span className={styles.wel_nay}>
                                                <i class="fa fa-times mr-1" aria-hidden="true"></i>
                                                <span>{elem[0].toUpperCase() + elem.slice(1)}</span>
                                            </span>
                                        }
                                    </p>
                                )
                            })}
                        </div>
                        <div className={styles.spacer3}></div>
                        {
                            about && about.map((elem) => {
                                return (
                                    <p>{elem}</p>
                                )
                            })
                        }
                        <div className={styles.spacer1}></div>
                        <h5 className={styles.house_fac}>HOUSE FACILITIES</h5>
                        <div className={styles.house_fac_container}>
                            <div className="row">
                                {
                                    house_facilities_keys && house_facilities_keys.map((elem) => {

                                        if (house_facilities[elem]) {
                                            return (
                                                <div className="col-3">
                                                    <p className="small">
                                                        <i className="fa fa-check mr-1" aria-hidden="true"></i>
                                                        <span>{elem[0].toUpperCase() + elem.slice(1)}</span>
                                                    </p>
                                                </div>
                                            )
                                        }

                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.spacer4}></div>
                    </div>
                </div>
                <div className="row" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                    <div className="col-8" style={{maxHeight:"none"}} id="photo">
                        <EntityCarousel />
                    </div>
                </div>
                <div className={styles.spacer4}></div>
            </div>
        </div>
    )
}
