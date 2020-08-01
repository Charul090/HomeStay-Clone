import React, { useState, useEffect } from 'react'
import styles from "./HeroBanner.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomCalendar from "../CustomCalendar/CustomCalendar.jsx"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import {useHistory} from "react-router-dom"

export default function HeroBanner() {
    let date1 = new Date(new Date().getTime()+(60 * 60 * 24 * 1000))
    let date2 = new Date(date1.getTime()+(60 * 60 * 24 * 1000))

    let history = useHistory()

    const [location, setLocation] = useState("")
    const [check_in, setCheckIn] = useState("")
    const [check_out, setCheckOut] = useState("")
    const [guests, setGuest] = useState(1)
    const [startDate1, setStartDate1] = useState(date1);
    const [startDate2, setStartDate2] = useState(date2);
    const [minDate2, setMinDate2] = useState(startDate1)
    const [date_diff, setDiff] = useState(1)
    const [flag, setFlag] = useState(false)

    let guest_options = []

    for (let x = 1; x <= 8; x++) {
        guest_options.push(
            <option value={x}>{x}</option>
        )
    }

    useEffect(() => {
        let time_diff = startDate2.getTime() - startDate1.getTime()
        let day_diff = Math.floor(time_diff / (1000 * 3600 * 24))
        setDiff(day_diff)
    }, [startDate2, startDate1])

    useEffect(() => {
        let time_diff = startDate2.getTime() - startDate1.getTime()
        let day_diff = Math.floor(time_diff / (1000 * 3600 * 24))
        let day = 60 * 60 * 24 * 1000;
        let date = new Date()
        date.setTime(startDate1.getTime() + day)

        if (day_diff <= 0) {
            setStartDate2(date)
        }

        setMinDate2(date)

    }, [startDate1])

    useEffect(() => {
        if (date_diff > 29) {

            let last_day = 29 * 60 * 60 * 24 * 1000;
            last_day = startDate1.getTime() + last_day
            setStartDate2(new Date(last_day))
        }
    }, [date_diff])

    const customInput = (props)=>{
        return (
            <div className={styles.wrapper}>
                <i class="fas fa-map-marker-alt"></i>
            <input className={styles.date} type="text" {...props}/>
        </div>
        )
    }

    const handleChange = (e) => {
        if (e.target.name === "location") {
            setLocation(e.target.vlaue)
        }
        else if (e.target.name === "check_in") {
            setCheckIn(e.target.value)
        }
        else if (e.target.name === "check_out") {
            setCheckOut(e.target.value)
        }
        else {
            if (e.target.name === "guests") {
                setGuest(e.target.value)
            }
        }
    }

    const handleClick = (e)=>{
        e.preventDefault()

        let current_location = location.description.split(",")[0]
        let start = startDate1
        let end = startDate2

        let params = new URLSearchParams()
        params.set("location",current_location)
        params.set("start",JSON.stringify(start))
        params.set("end",JSON.stringify(end))
        params.set("guest",guests)
        
        history.push({
            pathname:"/destination",
            search:params.toString()
        })
    }

    return (
        <section className={styles.main}>
            <div className={styles.search}>
                <div className="container-fluid d-flex align-items-center">
                    <div className={styles.intro}>
                        <h1>
                            Quality Rooms at
                            <br />
                            Wallet-Friendly Prices
                        </h1>
                        <h2>33,000 homestays in over 160 countries</h2>
                    </div>
                    <div className={styles.book}>
                        <div className={styles.cont}>
                            <h4>
                                Book a room in a home
                            </h4>
                            <form className={styles.form} onSubmit={handleClick}>
                                <div className={styles.location}>
                                    <GooglePlacesAutocomplete
                                    debounce="600"
                                    apiKey="AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M"
                                    placeholder="Where do you want to go?"
                                    onSelect={setLocation}
                                    autocompletionRequest={{
                                        componentRestrictions: {
                                        country: ['in']
                                        }
                                    }}
                                    renderInput={(props)=>customInput(props)}
                                    />
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.date1}>
                                        <DatePicker
                                            selected={startDate1}
                                            onChange={date => setStartDate1(date)}
                                            dateFormat="d MMM yyyy"
                                            minDate={date1}
                                            selectsStart
                                            customInput={<CustomCalendar checkout={false} wrapper={styles.wrapper} className={styles.date} />}
                                            startDate={startDate1}
                                            endDate={startDate2}
                                            placeholderText="Check In"
                                        />
                                    </div>
                                    <div className={styles.date2}>
                                        <DatePicker
                                            selected={startDate2}
                                            onChange={date => setStartDate2(date)}
                                            dateFormat="d MMM yyyy"
                                            customInput={<CustomCalendar checkout={false} wrapper={styles.wrapper} className={styles.date} />}
                                            startDate={startDate1}
                                            selectsEnd
                                            endDate={startDate2}
                                            minDate={minDate2}
                                            placeholderText="Check Out"
                                        />
                                    </div>
                                    <div className={styles.select}>
                                        <i class="far fa-user"></i>
                                        <select className={styles.guestInput} name="guests" value={guests} onChange={handleChange}>
                                            {
                                                guest_options
                                            }
                                        </select>
                                    </div>
                                </div>
                                <button className={styles.button}>
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                &nbsp; Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
