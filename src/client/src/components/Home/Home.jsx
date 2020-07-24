import React from 'react'
import HomeHero from '../HomeHero/HomeHero';
import HeroCard from '../HeroCard/HeroCard.jsx';
import LoginModal from '../LoginModal/LoginModal';
import TransparentNavBar from "../TransparentNavBar/TransparentNavBar.jsx"

export default function Home() {
    return (
        <>
            <TransparentNavBar />
            <LoginModal />
            <HomeHero />
        </>
    )
}
