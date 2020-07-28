import React from 'react'
import styles from "./EntityCarousel.module.css"
import { Carousel } from "react-bootstrap"
import PrevArrow from "../PrevArrow/PrevArrow.jsx"
import NextArrow from "../NextArrow/NextArrow.jsx"
import { useSelector } from "react-redux"

export default function EntityCarousel() {
    let { apartment_image, bedroom_image } = useSelector(state => state.entity.apartment_data)
    return (
        <Carousel indicators={false} prevIcon={<PrevArrow />} nextIcon={<NextArrow />} className={styles.main}>
            <Carousel.Item>
                <div
                    className={styles.container}>
                    <img
                        className="d-block w-100"
                        src={apartment_image}
                        alt="First slide" className={styles.img}
                        className={styles.img} />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    className={styles.container}>
                    <img
                        className="d-block w-100"
                        src={bedroom_image}
                        alt="Second slide" className={styles.img}
                        className={styles.img} />
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
