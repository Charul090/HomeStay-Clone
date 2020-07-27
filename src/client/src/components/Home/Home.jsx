import React from 'react'
import HomeHero from '../HomeHero/HomeHero';
import RegisterModal from "../RegisterModal/RegisterModal"
import LoginModal from '../LoginModal/LoginModal';
import TransparentNavBar from "../TransparentNavBar/TransparentNavBar.jsx"
import SecondaryNavBar from '../SecondaryNavBar/SecondaryNavBar';
import HomeReviewPanel from '../HomeReviewPanel/HomeReviewPanel';
import styles from "./Home.module.css"
import HomePromoBox from '../HomePromoBox/HomePromoBox';
import HomeVideoActivity from '../HomeVideoActivity/HomeVideoActivity';
import HomeUsp from '../HomeUsp/HomeUsp';
import HomeGuideBook from '../HomeGuideBook/HomeGuideBook';
import HomePress from '../HomePress/HomePress';
import HomeInsiderTip from '../HomeInsiderTip/HomeInsiderTip';
import Footer from '../Footer/Footer';
import HeroBanner from '../HeroBanner/HeroBanner';

export default function Home() {
    return (
        <div className={styles.body}>
            <TransparentNavBar />
            <LoginModal />
            <RegisterModal />
            <HeroBanner />
            <HomeHero />
            <SecondaryNavBar />
            <HomeReviewPanel />
            <HomePromoBox />
            <HomeVideoActivity />
            <HomeUsp />
            <HomeGuideBook />
            <HomePress />
            <HomeInsiderTip />
            <Footer />
        </div>
    )
}
