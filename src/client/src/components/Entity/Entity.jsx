import React from 'react'
import ApartmentInfo from '../ApartmentInfo/ApartmentInfo.jsx'
import styles from "./Entity.module.css"
import NavBarHome from "../NavBarHome/NavBarHome.jsx"
import Footer from "../Footer/Footer.jsx"

export default function Entity() {
    return (
        <div className={styles.main}>
            <ApartmentInfo />
            <Footer />
        </div>
    )
}
