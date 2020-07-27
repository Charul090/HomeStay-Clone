import React from 'react'
import styles from "./HomeHero.module.css"
import { Carosel } from '../Carosel/Carosel'
import HeroBanner from '../HeroBanner/HeroBanner'

export default function HomeHero() {
    return (
        <section className={styles.hero}>
            <Carosel />
        </section>
    )
}
