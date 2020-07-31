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
import NavBarAfterLogin from "../NavBarAfterLogin/NavBarAfterLogin.jsx"
import {useSelector} from "react-redux"
import LoginModal from '../LoginModal/LoginModal.jsx'
import RegisterModal from '../RegisterModal/RegisterModal.jsx'

export default function Entity() {
    let {logged_user} = useSelector(state=>state.auth)

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                {
                    logged_user?
                    <NavBarAfterLogin />
                    :
                    <NavBarHome />
                }
            </div>
            <LoginModal />
            <RegisterModal />
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
