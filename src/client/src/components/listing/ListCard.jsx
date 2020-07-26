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
            
            <div className="col-12 col-sm-12 col-md-6 col-lg-6  mb-2 ">
              <div className="card row m-1">
                  <div class="col-4 col-sm-6 col-md-4 col-lg-4 p-0">
                  <div class="carousel-wrapper">
                  <Carousel showThumbs={false} showStatus={false} useKeyboardArrows className="carousel-root presentation-mode " style={{height:"100%"}}>
                    <div key="content-1" className="my-slide content ">
                      <img style={{display:"block",minHeight:"250px",maxHeight:"250px"}} src={data.bedroom_image} />
                      <div style={{border:"4px solid white"}} className=" profile"><img className="img img-fluid profile legendInline" src={data.user_pic}/></div>
                      <div  className=" legendInlinestar"><i className="fa fa-star p-2" style={{fontSize:"18px"}} aria-hidden="true"></i>
</div>
                    </div>
                    <div key="content-2" className="my-slide content ">
                      <img style={{display:"block",minHeight:"250px" ,maxHeight:"250px"}} src={data.apartment_image} />
                      <div style={{border:"4px solid white"}} className=" profile"><img className="img img-fluid profile legendInline" src={data.user_pic}/></div>
                    </div>
                </Carousel>
              </div>                   
        
        {/* <div className="d-flex  justify-content-end  pt-0 pr-0 mr-0" >
            <div className="profile ">
            <img className="img img-fluid profile" src="https://i.imgur.com/UG3C4rm.jpg"/>
            </div>
        </div> */}
              
                    </div>
                    <div class="col-6 col-sm-6  col-md-8 col-lg-8">
                    <div class="card-body text-left">
                        <h4 class="card-title title">{data.apartment_name}</h4>
                        <p style={{color:"#512B1A"}} className="homestay"><span className=" font-weight-bold"> {data.user_name}</span>  {data.location} </p>
                        <div style={{display:"block",maxWidth:"100%"}}><img src="https://www.homestay.com/assets/small-review-score-img-c68dbe08abd3620cb7ae9b367952c1caac5322eb67c4d65ecfcafd83fba88dda.svg"></img><span className="small text-muted">{data.reviews}</span></div>
                          <p style={{color:"#512B1A"}}>{data.city}</p>
                          <p class="card-text  small italic" style={{color:"lightgrey"}}>{this.props.data.description}</p>
                          <p style={{color:"#512B1A"}} className=" font-weight-bold small">FROM <span className="price h5 font-weight-bold" style={{color:"#92C01F"}}> ${this.props.data.price_per_night} </span>PER NIGHT</p>
                        <p class="card-text"><span class="text-muted"></span></p>
                    </div>
                    </div>
                </div>
            </div>
          
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCard)
