import React from 'react'
import ApartmentInfo from '../ApartmentInfo/ApartmentInfo.jsx'
import styles from "./Entity.module.css"
import NavBarHome from "../NavBarHome/NavBarHome.jsx"
import Footer from "../Footer/Footer.jsx"
import BedroomInfo from '../BedroomInfo/BedroomInfo.jsx'
import AreaInfo from '../AreaInfo/AreaInfo.jsx'
import MealInfo from '../MealInfo/MealInfo.jsx'
import  RecommendationRef  from '../RecommendationRef/RecommendationRef.jsx'
import Reviews from '../Reviews/Reviews'

export default function Entity() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <NavBarHome />
            </div>
            <ApartmentInfo />
            <BedroomInfo />
            <AreaInfo />
            <MealInfo />
            <Reviews />
            <RecommendationRef  />
            <Footer />
        </div>
    )
}
