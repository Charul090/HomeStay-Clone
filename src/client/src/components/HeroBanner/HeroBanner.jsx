import React, { useState } from 'react'
import styles from "./HeroBanner.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function HeroBanner() {

    const [location, setLocation] = useState("")
    const [check_in, setCheckIn] = useState("")
    const [check_out, setCheckOut] = useState("")
    const [guests, setGuest] = useState("")


    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput1 = ({ value, onClick }) => (
        <input style={{zIndex:"10400",width:"60px"}} className="form-control form-control-sm pt-4 pb-3" style={{ borderRadius: "unset" }} onClick={onClick} placeholder="Check-In" name="check_in" type="text" value={value} />

    );

    const ExampleCustomInput2 = ({ value, onClick }) => (
        <input style={{zIndex:"10400",width:"60px"}} className="form-control form-control-sm pt-4 pb-3" style={{ borderRadius: "unset" }} onClick={onClick} placeholder="Check-Out" name="check_out" type="text" value={value} />

    );

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
                            <form className={styles.form}>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text text-black-50">
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <input type="text" readOnly className="form-control form-control-lg" placeholder="Where do you want to go?" />
                                </div>
                                <div className={styles.row}>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" style={{ borderRadius: "unset" }}>
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                </span>
                                                <DatePicker value={check_out} selected={startDate} customInput={<ExampleCustomInput1 />} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" style={{ borderRadius: "unset" }}>
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                </span>
                                                <DatePicker value={check_in} selected={startDate} customInput={<ExampleCustomInput2 />} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" style={{ borderRadius: "unset" }}>
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                            </span>
                                            <select id="inputState" style={{ borderRadius: "unset" }} name="guests" onChange={handleChange} className="form-control">
                                                <option value="1" selected> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                            </select>
                                        </div>
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
