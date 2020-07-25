import React from 'react'
import HomeHero from '../HomeHero/HomeHero';
import RegisterModal from "../RegisterModal/RegisterModal"
import LoginModal from '../LoginModal/LoginModal';
import TransparentNavBar from "../TransparentNavBar/TransparentNavBar.jsx"
import SecondaryNavBar from '../SecondaryNavBar/SecondaryNavBar';
import HomeReviewPanel from '../HomeReviewPanel/HomeReviewPanel';
import styles from "./Home.module.css"
import HomePromoBox from '../HomePromoBox/HomePromoBox';

export default function Home() {
    return (
        <div className={styles.body}>
            <TransparentNavBar />
            <LoginModal />
            <RegisterModal />
            <HomeHero />
            <SecondaryNavBar />
            <HomeReviewPanel />
            <HomePromoBox />
        </div>
    )
}
