import React from 'react'
import { useSelector } from "react-redux";
import styles from './RecommendationRef.module.css'
import ListCard from '../listing/ListCard.jsx'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function RecommendationRef() {
    let { recommend } = useSelector(state => state.entity);
    // console.log(recommend[0]);
    const data = []
    for(var key in recommend){
        data.push(recommend[key]);
    }
    console.log(data);
    
    return (
        <div className={styles.mealmain}>
            <div className={styles.spacer1}></div>
            <div className="container-fluid ml-5">
            <div className={styles.spacer1}></div>
            <h2 className={styles.title}>Other Homestays Nearby</h2>
            <div className={styles.spacer1}></div>
                <div className="row">
                    {data && data.map(data=>(
                    
                    <div className="col-8">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12  mb-3 ">
                        <div className="row1 card row pl-1 ml-1 pr-1" >
                            <div class="col-4 col-sm-6 col-md-4 col-lg-4 p-0">
                            <div class="carousel-wrapper">
                            <Carousel showThumbs={false} showStatus={false} useKeyboardArrows className="carousel-root presentation-mode " style={{height:"100%"}}>
                            <div key="content-1" className="my-slide content" onClick={()=> window.open(`/apartment/${data.apartment_id}`, "_blank")}>
                                <img  className="row1" src={data.bedroom_image} />
                                <div>
                                <img className="img img-fluid  legendInline" src={data.user_pic}/>
                                </div>
                                <div className=" legendInlinestar"><i className="fa fa-star p-2" style={{fontSize:"18px"}} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div key="content-2" className="my-slide content " onClick={()=> window.open(`/apartment/${data.apartment_id}`, "_blank")}>
                                <img className="row1" src={data.apartment_image} />
                                <div style={{border:"4px solid white"}} ><img className="img img-fluid  legendInline" src={data.user_pic}/></div>
                            </div>
                        </Carousel>
                        </div>                   
                    </div>
                    <div class="col-6 col-sm-6  col-md-7 col-lg-8">
                        <div class="card-body text-left"  onClick={()=> window.open(`/apartment/${data.apartment_id}`, "_blank")}>
                            <h4 class="card-title title">{data.apartment_name}</h4>
                            <p style={{color:"#512B1A"}} className="homestay"><span className=" font-weight-bold"> {data.user_name}</span>  {data.location} </p>
                            <div class="card-text  small italic" style={{color:"lightgrey"}}>{data.description}</div>
                            <p style={{color:"#512B1A"}} className="  small">FROM <span className="price h5 font-weight-bold" style={{color:"#92C01F"}}> ${data.price_per_night} </span>PER NIGHT</p>
                            <p class="card-text"><span class="text-muted"></span></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          ))
                }       
                </div>
            </div>
        </div>
    )
}
