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
import NavBarAfterLogin from "../NavBarAfterLogin/NavBarAfterLogin.jsx"
import {useSelector} from "react-redux"

export default function Home() {
    let {logged_user} = useSelector(state=>state.auth)
    return (
        <div className={styles.body}>
            {
                logged_user?
                <NavBarAfterLogin />
                :
                <TransparentNavBar />
            }
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
