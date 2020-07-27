import React from 'react'
import NavBarHome from "../NavBarHome/NavBarHome.jsx"
import ApartmentInfo from '../ApartmentInfo/ApartmentInfo.jsx'
import styles from "./Entity.module.css"

export default function Entity() {
    return (
        <div className={styles.main}>
            <NavBarHome/>
            <ApartmentInfo />
        </div>
    )
}
