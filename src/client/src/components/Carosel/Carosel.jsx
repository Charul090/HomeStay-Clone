import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import PrevArrow from "../PrevArrow/PrevArrow.jsx"
import NextArrow from "../NextArrow/NextArrow.jsx"
import styles from "./Carosel.module.css"

export class Carosel extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel className={styles.main} indicators={false} prevIcon={<PrevArrow />} nextIcon={<NextArrow />}>
                    <Carousel.Item>
                        <div >
                            <img
                                className="d-block w-100"
                                src="https://www.homestay.com/assets/homepage/hero/double-bed-next-to-bright-window-7f379bf25b6b842eccfcc25921e9f1c98fa5727582669ddd9d480aa1c49d48e5.jpg"
                                alt="First slide" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div >
                            <img
                                className="d-block w-100" 
                                src="https://www.homestay.com/assets/homepage/hero/double-bed-with-bed-locker-and-wardrobes-ed8c9bd5df88db08f90424467ef902df4f301b492dee25b3fdbf88e1b88aebed.jpg"
                                alt="Second slide" 
                            />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div>
                            <img
                                className="d-block w-100"
                                src="https://www.homestay.com/assets/homepage/hero/homestay-cambodia-host-valentina-talking-673fec791dc2d7b60a9d2fa9d057abbc2df7abd846bc33afe9ac32ebbb20bde2.jpg"
                                alt="Third slide"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Carosel)



