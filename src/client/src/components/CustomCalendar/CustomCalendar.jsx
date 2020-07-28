import React from 'react'
import styles from "./CustomCalendar.module.css"

export default function CustomCalendar(props) {
    return (
        <div className={props.wrapper}>
            <i onClick={props.onClick} aria-hidden="true" className="fa fa-calendar"></i>
            <input onClick={props.onClick} className={props.className} value={props.value} type="text" readOnly/>
        </div>
    )
}
