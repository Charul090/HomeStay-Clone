import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            location:"",
            checkIn:"",
            checkOut:""
        }
    }

    handleLocation = (e)=>{
        console.log(e.target.value);
        this.setState({
            location:e.target.value
        })
    }

    handleCheckIn = (e)=>{
        console.log(e.target.value);
        this.setState({
            checkIn:e.target.value
        })
    }

    handleCheckOut = (e)=>{
        console.log(e.target.value);
        this.setState({
            checkOut:e.target.value
        })
    }

    handleChange = (e)=>{
        console.log(e.target.value);
    }
    _onFocus= (e)=>{
        e.currentTarget.type = "date";
    }
    _onBlur =(e)=>{
        e.currentTarget.type = "text";
        
    }
    render() {
        const handleSubmit = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                       
                    <div class="form-row ml-2">
                        
                        <div class="col-sm-3 form-group col-md-2">
                        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                            </div>
                            <input type="text" onChange ={this.handleLocation} class="form-control p-4" id="inlineFormInputGroupUsername" placeholder="Location"/>
                        </div>
                        </div>

                        <div class="col-sm-3 form-group col-md-2">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></div>
                            </div>
                            <input class="form-control p-4" placeholder="Check-In" onChange={this.handleCheckIn} id="inlineFormInputGroupUsername" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                        </div>
                        </div>

                        <div class="col-sm-3 form-group col-md-2">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></div>
                            </div>
                            <input class="form-control p-4" placeholder="Check-Out" onChange={this.handleCheckOut} id="inlineFormInputGroupUsername" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                        </div>
                        </div>

                        
                        
                        <div class="form-group col-md-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-user-o" aria-hidden="true"></i></div>
                            
                        <select id="inputState" onChange={this.handleChange} class="form-control p-4">
                            <option selected>Guest-0</option>
                            <option value="1"> Guest 1</option>
                            <option value="2"> Guest 2</option>
                            <option value="3">Guest 3</option>
                            <option value="4">Guest 4</option>
                            <option value="5">Guest 5</option>
                        </select>
                        </div>
                        </div>
                        
                   
                    <div className="col-1 ">
                    <button type="submit" className="btn mt-1" style={{background:"brown"}}><i className="fa fa-search" style={{fontSize:"24px",color:"white"}}></i></button>
                    </div>
                    </div>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
