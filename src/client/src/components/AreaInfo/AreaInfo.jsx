import React from 'react'
import styles from "./AreaInfo.module.css"
import { StaticGoogleMap, Marker } from "react-static-google-map"
import { useSelector } from "react-redux"

export default function AreaInfo() {

    let { latitude, longitude, about_area, local_facilities, meals } = useSelector(state => state.entity.area)
    let local_facilities_keys = null
    

    if (local_facilities !== undefined) {
        local_facilities_keys = Object.keys(local_facilities)
    }
    
    let point = `${latitude},${longitude}`

    if (about_area !== undefined) {
        about_area = about_area.split("\n")
    }

    return (
        <div className={styles.main} data-spy="scroll" data-target="#navbar-example2" data-offset="0">
            <div className={styles.spacer1} ></div>
            <div className="container-fluid" id="location">
                <div className="row">
                    <div className="col-8">
                        <h2>About Area</h2>
                        <div className={styles.spacer2}></div>
                        <div styles={{ width: "100%", textAlign: "center" }}>
                            {
                                latitude && longitude &&
                                <StaticGoogleMap size="750x360" apiKey="" center={point}>
                                    <Marker
                                        location={point}
                                        color="blue"
                                    />
                                </StaticGoogleMap>
                            }
                        </div>
                        <div className={styles.spacer3}></div>
                        {about_area && about_area.map((element) => {
                            return <p className={styles.about}>{element}</p>
                        })}
                        <div className={styles.spacer3}></div>
                        <h5 className={styles.loc_fac}>LOCAL AREA FACILITIES</h5>
                        <div className={styles.loc_fac_container}>
                            <div className="row">
                                {
                                    local_facilities_keys && local_facilities_keys.map((elem) => {
                                        if (local_facilities[elem]) {
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
                        <div className={styles.spacer1}></div>

                    </div>
                </div>
            </div>
        </div>
    )
}
