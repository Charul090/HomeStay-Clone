import React from 'react'
import ApartmentInfo from '../ApartmentInfo/ApartmentInfo.jsx'
import styles from "./Entity.module.css"
import NavBarHome from "../NavBarHome/NavBarHome.jsx"
import Footer from "../Footer/Footer.jsx"
import BedroomInfo from '../BedroomInfo/BedroomInfo.jsx'
import AreaInfo from '../AreaInfo/AreaInfo.jsx'
import MealInfo from '../MealInfo/MealInfo.jsx'

export default function Entity() {
    return (
        <div className={styles.main}>
            <ApartmentInfo />
            <BedroomInfo />
            <AreaInfo />
            <MealInfo />
            <Footer />
        </div>
    )
}
