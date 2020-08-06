import React, { useState, useEffect } from 'react'
import { connect} from 'react-redux'
import {useHistory} from "react-router-dom"
import Filter from '../Filter(Listing page)/Filter.jsx'
import Slider from './Slider.jsx'
import './SearchBar.css'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import styles from "./SearchBar.module.css"
import CustomCalendar from "../CustomCalendar/CustomCalendar.jsx";
import DatePicker from "react-datepicker";


export default function SearchBar(props) {
    let history = useHistory()
    let url = new URLSearchParams(history.location.search.slice(1,-1))
    
    let date1 = new Date(JSON.parse(url.get("start")))
    let date2 = new Date(JSON.parse(url.get("end")))


    const [location, setLocation] = useState("")
    const [startDate1, setStartDate1] = useState(date1);
    const [startDate2, setStartDate2] = useState(date2);
    const [minDate2, setMinDate2] = useState(startDate1)
    const [date_diff, setDiff] = useState(1)
    const [flag, setFlag] = useState(false)
    const [guests, setGuest] = useState(1)

    let guest_options = []

    for (let x = 1; x <= 8; x++) {
        guest_options.push(
            <option value={x}>{x}</option>
        )
    }

    const handleChange = (e) => {
        if (e.target.name === "guests") {
            setGuest(e.target.value)
        }
    }

    const customInput = (props) => {
        return (
            <div className={styles.wrapper}>
                <i class="fas fa-map-marker-alt"></i>
                <input className={styles.date} type="text" {...props} />
            </div>
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

    const handleClick = (e)=>{
        e.preventDefault()        
    }
    // console.log(this.props);
    return (
        <div className={styles.main}>
            <div className="search-bar">
                <div className="">
                    <div className="container-fluid">
                        <form onSubmit={handleClick}>
                            <div id="row" class="row no-gutters mr-0 pt-2">
                                <div className="col-9">
                                    <div className="form-row">
                                        <div className="col-5">
                                            <div className={styles.location}>
                                                <GooglePlacesAutocomplete
                                                    debounce="600"
                                                    apiKey=""
                                                    placeholder="Where do you want to go?"
                                                    onSelect={setLocation}
                                                    autocompletionRequest={{
                                                        componentRestrictions: {
                                                            country: ['in']
                                                        }
                                                    }}
                                                    renderInput={(props) => customInput(props)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className={styles.date1}>
                                                <DatePicker
                                                    selected={startDate1}
                                                    onChange={date => setStartDate1(date)}
                                                    dateFormat="dd MMM yyyy"
                                                    minDate={date1}
                                                    selectsStart
                                                    customInput={<CustomCalendar checkout={false} wrapper={styles.wrapper} className={styles.date} />}
                                                    startDate={startDate1}
                                                    endDate={startDate2}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className={styles.date2}>
                                                <DatePicker
                                                    selected={startDate2}
                                                    onChange={date => setStartDate2(date)}
                                                    dateFormat="dd MMM yyyy"
                                                    customInput={<CustomCalendar checkout={false} wrapper={styles.wrapper} className={styles.date} />}
                                                    startDate={startDate1}
                                                    selectsEnd
                                                    endDate={startDate2}
                                                    minDate={minDate2}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className={styles.select}>
                                                <i class="far fa-user"></i>
                                                <select className={styles.guestInput} name="guests" value={guests} onChange={handleChange}>
                                                    {
                                                        guest_options
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <button type="submit" className={styles.btn} style={{ background: "#CA005D", border: "#CA005D", borderRadius: "none" }}><i className="fa fa-search" style={{ fontSize: "26px", color: "white" }}></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <Filter {...props} />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}







