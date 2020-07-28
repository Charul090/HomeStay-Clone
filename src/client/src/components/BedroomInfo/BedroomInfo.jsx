import React, { useState } from 'react'
import styles from "./BedroomInfo.module.css"
import DatePicker from "react-datepicker"
import CustomCalendar from "../CustomCalendar/CustomCalendar.jsx"
import { useSelector } from "react-redux"


export default function BedroomInfo() {
    let date = new Date()
    date.setDate(date.getDate() + 1)
    const [startDate1, setStartDate1] = useState(new Date());
    const [startDate2, setStartDate2] = useState(date);
    const [available, setAvailable] = useState(true)

    let { name, guests, price_1_night,image } = useSelector(state => state.entity.bedroom)

    const subDays = (obj, day) => {
        obj.setDate(obj.getDate() + 1)
        return obj
    }

    console.log(startDate1, startDate2)

    return (
        <div className={styles.main}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className={styles.spacer1}></div>
                        <h2 className={styles.title}>Bedrooms available for booking</h2>
                        <div className={styles.spacer2}></div>
                        <div className={styles.booking_section}>
                            <h5>Select Dates</h5>
                            <div className={styles.calendar}>
                                <div>
                                    <DatePicker
                                        selected={startDate1}
                                        onChange={date => setStartDate1(date)}
                                        dateFormat="MMMM d, yyyy"
                                        customInput={<CustomCalendar checkout={false} wrapper={styles.wrapper} className={styles.date} />} />
                                </div>
                                <div>
                                    <DatePicker
                                        selected={startDate2}
                                        onChange={date => setStartDate2(date)}
                                        dateFormat="MMMM d, yyyy"
                                        customInput={<CustomCalendar checkout={false} wrapper={styles.wrapper} className={styles.date} />}
                                    />
                                </div>
                                <div className={styles.badge}>
                                    <span class="badge badge-pill badge-primary">{
                                        startDate2.getDate() - startDate1.getDate()
                                    } Nights</span>
                                </div>
                            </div>
                            <div className={styles.messages}>
                                <p className="small">
                                    <i className="fa fa-check mr-1" aria-hidden="true"></i>
                                    <span>Minimum stay is for 1 night</span>
                                </p>
                                <p className="small">
                                    <i className="fa fa-check mr-1" aria-hidden="true"></i>
                                    <span>Maximum stay is for 29 night</span>
                                </p>
                                <p className="small">
                                    <i className="fa fa-check mr-1" aria-hidden="true"></i>
                                    <span>Check-in date must be before 28 Jan 2021</span>
                                </p>
                                <div className={styles.status}>
                                    <p className="small">
                                        {
                                            available ?
                                                <>
                                                    <span className={styles.yay}>
                                                        <i className="fa fa-check mr-1" aria-hidden="true"></i>
                                                    </span>
                                                    <span>Available for given dates</span>
                                                </>
                                                :
                                                <span className={styles.nay}>
                                                    <i class="fa fa-times mr-1" aria-hidden="true"></i>
                                                    <span> Available for given dates</span>
                                                </span>
                                        }
                                    </p>
                                </div>
                                <div className={styles.alert}>
                                    {
                                        available ?
                                            <div class="alert alert-success" role="alert">
                                                We found 1 bedroom available for these dates
                                            </div>
                                            :
                                            <div class="alert alert-danger" role="alert">
                                                No rooms available. Change dates or choose another homestay
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className={styles.spacer1}></div>
                            <div className={styles.booking_card}>
                                <div className={styles.card} style={available ? { borderColor: "#92C01F" } : null}>
                                    <header>
                                        <h5>{name}</h5>
                                    </header>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className={styles.bedroom_image} style={{backgroundImage:`url(${image})`}}></div>
                                        </div>
                                        <div className="col-8">
                                            <div className={styles.bedroom_cont}>
                                                <div className={styles.bedroom_info}>
                                                    <div>
                                                        <div>Room</div>
                                                        <h5>Sleeps {guests}</h5>
                                                        <div className={styles.spacer3}></div>
                                                    </div>
                                                    <div className={styles.price_badge}>
                                                        From <strong style={{ fontSize: "17px" }}>₹{price_1_night}</strong> per night
                                                    </div>
                                                </div>
                                                <div className={styles.bedroom_info2}>
                                                    <div>
                                                        <p class="small">Bathroom&nbsp;shared (with family / other guests)<br />1 Single&nbsp;Bed</p>
                                                        <div className={styles.spacer3}></div>
                                                        <div className={styles.bedroom_status}>
                                                            {available ?
                                                                <>
                                                                    <span className={styles.available}>Bedroom available</span>
                                                                </>
                                                                :
                                                                <>
                                                                    <span className={styles.unavailable}>Not available for dates</span>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className={styles.button_container}>
                                                        <button className={styles.button}>
                                                            <i class="fa fa-plus" aria-hidden="true"></i> Select Room
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.footer}>
                                        <a className="small strong" data-toggle="collapse" href="#moredetails">See Calendar, Prices and Room Details</a>
                                        <div className="collapse" id="moredetails">
                                            <h1>Hello</h1>
                                        </div>
                                    </div>
                                    <div className={styles.spacer1}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
