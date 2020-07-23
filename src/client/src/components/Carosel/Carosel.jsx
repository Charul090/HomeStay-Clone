import NavBarHome from "../NavBarHome/NavBarHome.jsx";
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Carousel} from 'react-bootstrap';

export class Carosel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBarHome />
                <Carousel >
                    <Carousel.Item>
                            <div style={{height:"500px"}}>
                                <img
                                    className="d-block w-100  img-fluid"
                                    src="https://www.homestay.com/assets/homepage/hero/double-bed-next-to-bright-window-7f379bf25b6b842eccfcc25921e9f1c98fa5727582669ddd9d480aa1c49d48e5.jpg"
                                    alt="First slide"/>
                            </div>
                        <Carousel.Caption style={{bottom:"300px"}}> 
                                <h2>Quality Rooms at
                                    Wallet-Friendly Prices</h2>
                                <p>33,000 homestays in over country.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                            <div style={{height:"500px"}}>
                                <img
                                className="d-block w-100"
                                src="https://www.homestay.com/assets/homepage/hero/double-bed-next-to-bright-window-7f379bf25b6b842eccfcc25921e9f1c98fa5727582669ddd9d480aa1c49d48e5.jpg"
                                alt="Third slide"
                                />
                            </div>
                        <Carousel.Caption style={{bottom:"300px"}}>
                                <h2>Quality Rooms at
                                    Wallet-Friendly Prices</h2>
                                <p>33,000 homestays in over country.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div style={{height:"500px"}}>
                            <img
                            className="d-block w-100"
                            src="https://www.homestay.com/assets/homepage/hero/double-bed-next-to-bright-window-7f379bf25b6b842eccfcc25921e9f1c98fa5727582669ddd9d480aa1c49d48e5.jpg"
                            alt="Third slide"
                            />
                        </div>
                        <Carousel.Caption style={{bottom:"300px"}}>
                                <h2>Quality Rooms at
                                    Wallet-Friendly Prices</h2>
                                <p>33,000 homestays in over country.</p>
                        </Carousel.Caption>
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



