import React, { Component } from 'react'
import { connect } from 'react-redux'
import Filter from '../Filter(Listing page)/Filter.jsx'
import Slider from './Slider.jsx'
import './SearchBar.css'

export class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            location:"",
            check_in:"",
            check_out:"",
            guests:""
        }
    }

    
    handleSubmit = (e)=>{
        e.preventDefault();
        
        var obj = this.state;
        var myurl = new URL('http://localhost:3000/destination')
        // console.log(obj);
        for(var key in obj){
          
              myurl.searchParams.append(key,obj[key])
              console.log(myurl.href);
            
          }
        }

    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({
             [e.target.name]:e.target.value
        })
    }
    _onFocus= (e)=>{
        e.currentTarget.type = "date";
    }
    _onBlur =(e)=>{
        e.currentTarget.type = "text";
        
    }
    render() {
        // console.log(this.props);
        return (
            <div className="search-bar row pt-2">
                <div className="col-12">
                <div className="row">
                <div className=" col-12  col-sm-12 col-md-10 col-lg-10 ">
                <form onSubmit={this.handleSubmit}>
                       
                    <div id="row" class="row mr-0">
                        
                        <div class="pl-2 col-6 col-sm-6 form-group col-md-6 col-lg-3">
                        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text" style={{borderRadius:"unset"}}><i class='fas fa-map-marker-alt' style={{fontSize:"15px"}}></i></div>
                            </div>
                            <input type="text" onChange ={this.handleChange} name="location" class="form-control p-4" id="inlineFormInputGroupUsername" placeholder="Location"/>
                        </div>
                        </div>

                        <div class="col-6 col-sm-6 form-group col-md-6 col-lg-2 col-1">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text"><i class='far fa-calendar-plus' style={{fontSize:"15px"}}></i></div>
                            </div>
                            <input class="form-control p-4" style={{borderRadius:"unset"}} placeholder="check-In" name="check_in" onChange={this.handleChange} id="inlineFormInputGroupUsername" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                        </div>
                        </div>

                        <div class="col-6 col-sm-6 form-group col-md-6 col-lg-2 col-1">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text" style={{borderRadius:"unset"}}><i class='far fa-calendar-minus' style={{fontSize:"15px"}}></i></div>
                            </div>
                            <input class="form-control p-4" placeholder="check-Out" name="check_out" onChange={this.handleChange} id="inlineFormInputGroupUsername" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                        </div>
                        </div>

                        
                        
                        <div class="form-group col-6 col-sm-6 col-md-6 col-lg-1  ">
                        <div class="input-group-prepend ">
                            <div class="input-group-text" style={{borderRadius:"unset"}}><i class='fas fa-user-alt' style={{fontSize:"15px"}}></i></div>
                            
                        <select id="inputState" style={{borderRadius:"unset"}} name="guests" onChange={this.handleChange} className="form-control p-4">
                            <option value ="0" selected>Guest-0</option>
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                        </select>
                        
                        </div>
                        
                        </div>
                        
                   
                    <div className="col-6 col-sm-6  col-md-1 col-lg-1 ml-2">
                    <button type="submit" className=" p-2" style={{background:"#CA005D",border:"#CA005D",borderRadius:"none"}}><i className="fa fa-search" style={{fontSize:"26px",color:"white"}}></i></button>
                    </div >
                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 ">
                        <Filter {...this.props}/>
                    </div>
                    {/* <div className="col-2">
                        <Slider {...this.props} />
                    </div> */}

                    </div>
                    
                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
