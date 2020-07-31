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
        // console.log(this.props.data)
        const {data} = this.props
        return (
            
            <div className="col-12 col-sm-12 col-md-6 col-lg-6  mb-3 ">
                    <div className="row1 card row  ml-1 pr-1" >
                        <div class="col-4 col-sm-6 col-md-5 col-lg-5 p-0">
                        <div class="carousel-wrapper">
                        <Carousel showThumbs={false} showStatus={false} useKeyboardArrows className="carousel-root presentation-mode " style={{height:"100%"}}>
                          <div key="content-1" className="my-slide content imgH" onClick={()=> window.open(`/apartment/${data.apartment_id}`, "_blank")}>
                            <img  className="row1" style={{maxHeight:"100%",maxWidth:"100%"}} src={data.bedroom_image} />
                            <div class="">
                              <img className=" legendInline" style={{maxHeight:"100%",maxWidth:"100%"}} src={data.user_pic}/>
                            </div>
                            <div className=" legendInlinestar"><i className="fa fa-star p-2" style={{fontSize:"18px"}} aria-hidden="true"></i>
                            </div>
                          </div>
                          <div key="content-2" className="my-slide content imgH" onClick={()=> window.open(`/apartment/${data.apartment_id}`, "_blank")}>
                            <img className="row1" style={{maxHeight:"100%",maxWidth:"100%"}} src={data.apartment_image} />
                            <div style={{border:"4px solid white"}}  class=""><img className=" legendInline" src={data.user_pic}/></div>
                            <div className=" legendInlinestar"><i className="fa fa-star p-2" style={{fontSize:"18px"}} aria-hidden="true"></i>
                            </div>
                          </div>
                      </Carousel>
                    </div>                   
                    </div>
                    <div class="col-6 col-sm-6  col-md-8 col-lg-8">
                    <div class="card-body text-left"  onClick={()=> window.open(`/apartment/${data.apartment_id}`, "_blank")}>
                        <h4 class="card-title title">{data.apartment_name}</h4>
                        <p style={{color:"#512B1A"}} className="homestay"><span className=" font-weight-bold"> {data.user_name}</span>  {data.location} </p>
                        <div style={{display:"block",maxWidth:"100%"}}><img src="https://www.homestay.com/assets/small-review-score-img-c68dbe08abd3620cb7ae9b367952c1caac5322eb67c4d65ecfcafd83fba88dda.svg"></img><span className="small text-muted">{data.reviews}</span></div>
                          <div style={{color:"#512B1A"}}>{data.city}</div>
                          <div class="card-text  small italic" style={{color:"lightgrey"}}>{this.props.data.description}</div>
                          <p style={{color:"#512B1A"}} className="  small">FROM <span className="price h5 font-weight-bold" style={{color:"#92C01F"}}> ${this.props.data.price_per_night} </span>PER NIGHT</p>
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
