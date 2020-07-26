import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal,Button, ButtonGroup,Dropdown} from 'react-bootstrap'
import  './Filter.css';
import {fetchData} from '../../redux/ListRedux/action.js';
import Slider from '../listing/Slider.jsx'
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`

  width: 10px;
  height: 10px;
  background: ${props.color};
  cursor: pointer;
  outline: 2px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .1s;
`);

const Styles = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
  color: white;
  .value {
    flex: 1;
    font-size: 15px;
    font-weight:bold;
  }
  .slider {
    flex: 6;
    -webkit-appearance:white;
    width: 100%;
    height: 20px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: white;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;


export class Filter extends Component {

    constructor(props){
        super(props)
        this.state={
            meals_provided :false,
            accept_male:false,
            accept_female:false,
            accept_students:false,
            self_catering:false,
            max_price: 100000,
            min_price:0,
            count:0
          
        }
      }
    
      // handleClick = ()=>{
      //   this.setState({
      //     show:!this.state.show
      //   })
      // }
      handleFilter = (e)=>{
        //   console.log(e.target.name)
        var val = this.state.count
        if(e.target.name==="max_price"){
            this.setState({
              [e.target.name]: e.target.value
          })
        }
        else{
              var reset = true
              if(e.target.value=="true"){
                  reset = false;
                  val = val-1
              }
              else{
                  reset = true;
                  val = val+1
              }
            //   console.log(reset)
              this.setState({
                  [e.target.name]: reset,
                  count:val
              })
            //   console.log(this.state.meals)
        }
         
      }

      componentDidMount(){
        console.log("componentdidmount")
        var myurl = new URL('http://localhost:3000/destination')
        myurl.searchParams.append('page',1);
        this.props.history.push(myurl.search);
        this.props.fetch(myurl.search)

        
      }

      componentDidUpdate(prevProps){
        console.log(prevProps);
        console.log(this.props)
        var obj = this.state;
        console.log("cdu"+this.state.max_price)
        var myurl = new URL('http://localhost:3000/destination')
        
        // console.log(obj);
        myurl.searchParams.append('page',this.props.pagenum)
        for(var key in obj){
          if(obj[key]!== false){
            
            // console.log(myurl);
            if(obj[key]==true){
              myurl.searchParams.append(key,1)
              // console.log(myurl.href);
            }
            if(obj[key]!==true){
              myurl.searchParams.append(key,obj[key])
              // console.log(myurl);
            }
            
          }
        }
        // console.log(myurl.search);
        if(prevProps.location.search!==myurl.search){
          if(myurl.search==""){
            this.props.history.push("/destination")
            // console.log("inside prevprops")
            this.props.fetch(myurl.search)
          }
          else{
            
            this.props.history.push(myurl.search);
            // console.log("inside prevprops")
            // console.log('https://bdbe487b2b7f.ngrok.io'+myurl.search)
            this.props.fetch(myurl.search)
          }
        }
      
      }

    render() {
      const {data} = this.props
      const{count} = this.state
      // console.log('filter' + data);
      console.log(count)
        
        return (
            <div className="d-flex  row">                                
                <div className="col-12 col-sm-12 col-md-4 col-lg-4  ">
                <Dropdown className="trans">
                <Dropdown.Toggle variant="trans">
                  <span className="small  font-weight-bold text-light">FILTER 
                   ({this.state.count})</span>
                {/* <i className="fa fa-filter" style={{fontSize:"32px",color:"white"}}></i> */}
                </Dropdown.Toggle>                
                    
                    <Dropdown.Menu>
                        <div className="d-flex  row   " style={{background:"rgba(183, 177, 174, 0.3)"}} >
                          
                            <div className=" col-4">
                                <p className="font-weight-bold small text-center filterHead">HOST WELCOMES</p>
                                <div className=" d-flex justify-content-center">
                                <ButtonGroup vertical className=" filterFont" >
                                    <Button className="btnWidth" variant={this.state.accept_male?"success":"light"}  name="accept_male" value={this.state.accept_male} onClick={this.handleFilter}>Males</Button>
                                    <Button className="btnWidth" variant={this.state.accept_female?"success":"light"}   name="accept_female" value={this.state.accept_female} onClick={this.handleFilter}>Females</Button>
                                    <Button className="btnWidth" variant={this.state.accept_students?"success":"light"}  name="accept_students" value={this.state.accept_students}  onClick={this.handleFilter}>students</Button>
                                </ButtonGroup>
                                </div>
                            </div>
                            <div className=" col-4">
                                <p className="font-weight-bold small text-center filterHead">MEALS</p>
                                <div className=" d-flex justify-content-center">
                                <ButtonGroup vertical className="bg-light filterFont">
                                    <Button className="btnWidth" variant={this.state.meals_provided?"success":"light"}   name="meals_provided" value={this.state.meals_provided} onClick={this.handleFilter}>Meals Provided</Button>
                                    <Button className="btnWidth" variant={this.state.self_catering?"success":"light"}   value={this.state.self_catering} name="self_catering" onClick={this.handleFilter}>Use Kitchen</Button>
                                </ButtonGroup>
                                </div>
                            </div>

                            <div className=" col-4">
                                <p className="font-weight-bold small text-center filterHead">MEALS</p>
                                <div className=" d-flex justify-content-center">
                                <ButtonGroup vertical className="bg-light filterFont">
                                    <Button className="btnWidth" variant={this.state.meals_provided?"success":"light"}   name="meals_provided" value={this.state.meals_provided} onClick={this.handleFilter}>Meals Provided</Button>
                                    <Button className="btnWidth" variant={this.state.self_catering?"success":"light"}   value={this.state.self_catering} name="self_catering" onClick={this.handleFilter}>Use Kitchen</Button>
                                </ButtonGroup>
                                </div>
                            </div>
                            </div>
                        </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>                        

                  {/* <Slider handleChange={this.handleFilter}/> */}
                  <div className="col-12 col-sm-12  col-md-8 col-lg-8 " style={{width:"50px"}}>
                  <Styles opacity={this.state.max_price > 10 ? (this.state.max_price / 255) : .1} color={this.props.color}>
                    <label className="font-weight-bold"><p className=" font-weight-bold pt-2 ">Price:0</p></label>
                    <input type="range" min={0} max={100000} value={this.state.max_price} name="max_price" className="slider m-1 mb-3" onChange={this.handleFilter} />
                    <p className="value">{this.state.max_price}</p>
                  </Styles>
                  </div>
             </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    data: state.list.data,
    pagenum : state.list.page
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetch: (n) => dispatch(fetchData(n))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
