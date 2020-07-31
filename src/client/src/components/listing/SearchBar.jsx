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
            <div className=" row  ">
                <div className="col-12 col search-bar pt-2">
                <div className="row ">
                <div className=" col-12  col-sm-12 col-md-10 col-lg-10 ">
                <form onSubmit={this.handleSubmit}>
                       
                    <div id="row" class="row mr-0 pt-2">
                        
                        <div class="pl-2 col-6 col-sm-6 form-group col-md-2 col-lg-2">
                        <div class="input-group">
                            <input type="text" onChange ={this.handleChange} name="location" class="form-control fontIcon" id="inlineFormInputGroupUsername" placeholder="&#xf271;  Location"/>
                        </div>
                        </div>

                        <div class="col-6 col-sm-6 form-group col-md-2 col-lg-2 ">
                        <div class="input-group">
                            
                            <input class="form-control fontIcon" style={{borderRadius:"unset"}} placeholder="&#xf271;  Check-in" name="check_in" onChange={this.handleChange} id="inlineFormInputGroupUsername" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                        </div>
                        </div>

                        <div class="col-6 col-sm-6 form-group col-md-2 col-lg-2 ">
                        <div class="input-group">
                            
                            <input class="form-control fontIcon" placeholder="check-Out" name="check_out" placeholder="&#xf271;  Check-out" onChange={this.handleChange} id="inlineFormInputGroupUsername" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                        </div>
                        </div>

                        
                        
                        <div class="form-group col-6 col-sm-6 col-md-2 col-lg-1 "> 
                                            <select id="inputState"  onChange={this.handleChange} className="form-control fontIcon">
                                                <option value ="0" selected>0</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                            </select>
                                        </div>
                                    
                   
                        <div className="  col-sm-3  col-md-1 col-lg-1">
                        <button type="submit" className="btn" style={{background:"#CA005D",border:"#CA005D",borderRadius:"none"}}><i className="fa fa-search" style={{fontSize:"26px",color:"white"}}></i></button>
                        </div>
                    
                    <div className="col-sm-12 col-md-3 col-lg-3 ">
                        <Filter {...this.props}/>
                    </div>
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





