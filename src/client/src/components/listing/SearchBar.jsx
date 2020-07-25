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
            <div className="search-bar pt-2">
                <div className=" col-10 ">
                <form onSubmit={this.handleSubmit}>
                       
                    <div class="form-row mr-0">
                        
                        <div class="col-sm-3 form-group col-md-3 ">
                        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text"><i class='fas fa-map-marker-alt' style={{fontSize:"15px"}}></i></div>
                            </div>
                            <input type="text" onChange ={this.handleChange} name="location" class="form-control p-3 " id="inlineFormInputGroupUsername" placeholder="Location"/>
                        </div>
                        </div>

                        <div class="col-sm-3 form-group col-md-2 col-2">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text"><i class='far fa-calendar-plus' style={{fontSize:"15px"}}></i></div>
                            </div>
                            <input class="form-control" placeholder="check-In" name="check_in" onChange={this.handleChange} id="inlineFormInputGroupUsername" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                        </div>
                        </div>

                        <div class="col-sm-3 form-group col-md-2 col-2">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text"><i class='far fa-calendar-minus' style={{fontSize:"15px"}}></i></div>
                            </div>
                            <input class="form-control " placeholder="check-Out" name="check_out" onChange={this.handleChange} id="inlineFormInputGroupUsername" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                        </div>
                        </div>

                        
                        
                        <div class="form-group col-sm-2 col-md-1  ">
                        <div class="input-group-prepend ">
                            <div class="input-group-text"><i class='fas fa-user-alt' style={{fontSize:"15px"}}></i></div>
                            
                        <select id="inputState" name="guests" onChange={this.handleChange} className="form-control p-2">
                            <option value ="0" selected>Guest-0</option>
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                        </select>
                        
                        </div>
                        
                        </div>
                        
                   
                    <div className="col-1 ">
                    <button type="submit" className="btn " style={{background:"brown"}}><i className="fa fa-search" style={{fontSize:"24px",color:"white"}}></i></button>
                    </div >
                    <div className="col-3">
                        <Filter {...this.props}/>
                    </div>
                    {/* <div className="col-2">
                        <Slider {...this.props} />
                    </div> */}

                    </div>
                    
                    </form>
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
