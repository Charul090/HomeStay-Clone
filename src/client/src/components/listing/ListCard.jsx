import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SearchBar.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export class ListCard extends Component {

        constructor(props){
            super(props)
        }

        
    render() {
        console.log(this.props.data)
        const {data} = this.props
        return (
            <>
            <div className="col-6 ">
              <div className="card row m-3">
                <div className=" col-12">
                <div className="row  ">
                  <div class="col-4  p-0">
                  <div class="carousel-wrapper">
                  <Carousel showThumbs={false} showStatus={false} useKeyboardArrows className="carousel-root presentation-mode " style={{height:"100%"}}>
                    <div key="content-1" className="my-slide content ">
                      <img style={{display:"block",minHeight:"200px"}} src="https://www.homestay.com/assets/homepage/hero/double-bed-next-to-bright-window-7f379bf25b6b842eccfcc25921e9f1c98fa5727582669ddd9d480aa1c49d48e5.jpg" />
                    <div className="legend"><img className="img img-fluid profile" src="https://i.imgur.com/UG3C4rm.jpg"/></div>
                    </div>
                    <div key="content-2" className="my-slide content">
                      <img style={{display:"block",minHeight:"200px"}} src="https://www.homestay.com/assets/homepage/hero/double-bed-next-to-bright-window-7f379bf25b6b842eccfcc25921e9f1c98fa5727582669ddd9d480aa1c49d48e5.jpg" />
                    </div>
                    <div key="content-2" className="my-slide content">
                      <img style={{display:"block",minHeight:"200px"}} src="https://www.homestay.com/assets/homepage/hero/double-bed-next-to-bright-window-7f379bf25b6b842eccfcc25921e9f1c98fa5727582669ddd9d480aa1c49d48e5.jpg" />
                    </div>
                </Carousel>
              </div>                  
        
        {/* <div className="d-flex  justify-content-end  pt-0 pr-0 mr-0" >
            <div className="profile ">
            <img className="img img-fluid profile" src="https://i.imgur.com/UG3C4rm.jpg"/>
            </div>
        </div> */}
              
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{data.user_name}</h5>
                        <div style={{display:"block",maxWidth:"100%"}}><img src="https://www.homestay.com/assets/small-review-score-img-c68dbe08abd3620cb7ae9b367952c1caac5322eb67c4d65ecfcafd83fba88dda.svg"></img></div>
                          <p class="card-text">{this.props.data.description}</p>
                          <h3 className="text-success"> ${this.props.data.price_per_night}</h3>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
              
                </div>
              </div>
            </div>
            
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCard)
