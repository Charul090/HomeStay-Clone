import React from 'react'
import HomeHero from '../HomeHero/HomeHero';
import RegisterModal from "../RegisterModal/RegisterModal"
import LoginModal from '../LoginModal/LoginModal';
import TransparentNavBar from "../TransparentNavBar/TransparentNavBar.jsx"
import SecondaryNavBar from '../SecondaryNavBar/SecondaryNavBar';

export default function Home() {
    return (
        <>
            <TransparentNavBar />
            <LoginModal />
            <RegisterModal />
            <HomeHero />
            <SecondaryNavBar />
        </>
    )
}
