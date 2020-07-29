import React, { useState,useEffect } from 'react'
import styles from "./BedroomInfo.module.css"
import DatePicker from "react-datepicker"
import CustomCalendar from "../CustomCalendar/CustomCalendar.jsx"
import { useSelector } from "react-redux"


export default function BedroomInfo() {
    let mindate2 = new Date()
    let date1 = new Date()

    const [startDate1, setStartDate1] = useState(date1);
    const [startDate2, setStartDate2] = useState(mindate2);
    const [minDate2,setMinDate2] = useState(mindate2)
    const [date_diff,setDiff] = useState(1)
    const [available, setAvailable] = useState(true)

    let { name, guests, price_1_night,image } = useSelector(state => state.entity.bedroom)

    useEffect(()=>{
        let time_diff = startDate2.getTime() - startDate1.getTime()
        let day_diff = Math.floor(time_diff / (1000 * 3600 * 24))
        setDiff(day_diff)
    },[startDate2,startDate1])

    useEffect(()=>{
        let time_diff = startDate2.getTime() - startDate1.getTime()
        let day_diff = Math.floor(time_diff / (1000 * 3600 * 24))
        let day = 60 * 60 * 24 * 1000;
        let date = new Date()
        date.setTime(startDate1.getTime()+day)

        if(day_diff <= 0){
            setStartDate2(date)
        }

        setMinDate2(date)

    },[startDate1])

    useEffect(()=>{
        if(date_diff > 29){
            
            let last_day = 29 * 60 * 60 * 24 * 1000;
            last_day = startDate1.getTime()+last_day
            setStartDate2(new Date(last_day))
        }
    },[date_diff])

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
                                        minDate={new Date()}
                                        selectsStart
                                        customInput={<CustomCalendar checkout={false} wrapper={styles.wrapper} className={styles.date} />} 
                                        startDate={startDate1}
                                        endDate={startDate2}
                                        />
                                </div>
                                <div>
                                    <DatePicker
                                        selected={startDate2}
                                        onChange={date => setStartDate2(date)}
                                        dateFormat="MMMM d, yyyy"
                                        customInput={<CustomCalendar checkout={false} wrapper={styles.wrapper} className={styles.date} />}
                                        startDate={startDate1}
                                        selectsEnd
                                        endDate={startDate2}
                                        minDate={minDate2}
                                    />
                                </div>
                                <div className={styles.badge}>
                                    <span class="badge badge-pill badge-primary">{
                                        date_diff
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
