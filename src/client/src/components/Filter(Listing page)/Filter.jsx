import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal,Button, ButtonGroup,Dropdown} from 'react-bootstrap'
import  './Filter.css';
import {fetchData} from '../../redux/ListRedux/action.js';

export class Filter extends Component {

    constructor(props){
        super(props)
        this.state={
            meals_provided :false,
            accept_male:false,
            accept_female:false,
            accept_students:false,
            self_catering:false
          
        }
      }
    
      handleClick = ()=>{
        this.setState({
          show:!this.state.show
        })
      }
      handleFilter = (e)=>{
        //   console.log(e.target.name)
          var reset = true
          if(e.target.value=="true"){
              reset = false
          }
          else{
              reset = true
          }
        //   console.log(reset)
          this.setState({
              [e.target.name]: reset
              
          })
        //   console.log(this.state.meals)
      }

      // componentDidMount(){
      //   console.log(this.props)
      //   let params = new URLSearchParams(this.props.history.location.search);
        
      // }

      componentDidUpdate(prevProps){
        console.log(prevProps);
        console.log(this.props)
        var obj = this.state;

        var myurl = new URL('http://localhost:3000/destination')
        // console.log(obj);
        for(var key in obj){
          if(obj[key]!== false){
            
            // console.log(myurl);
            if(obj[key]==true){
              myurl.searchParams.append(key,1)
              console.log(myurl.href);
            }
            else{
              myurl.searchParams.append(key,obj[key])
              console.log(myurl);
            }
            
          }
        }
        console.log(myurl.search);
        if(prevProps.location.search!==myurl.search){
          if(myurl.search==""){
            this.props.history.push("/destination")
            console.log("inside prevprops")
            this.props.fetch(myurl.search)
          }
          else{
            this.props.history.push(myurl.search);
            console.log("inside prevprops")
            console.log('http://0f3cf9485c74.ngrok.io/stays/listing'+myurl.search)
            this.props.fetch(myurl.search)
          }
        }
      
      }

    render() {
      const {data,error} = this.props
      console.log(data);
      console.log(error);
        
        return (
            <div>                                
                <div>
                <Dropdown className="trans">
                <Dropdown.Toggle className="trans">
                <i className="fa fa-filter" style={{fontSize:"24px",color:"white"}}></i>
                </Dropdown.Toggle>                

                    <Dropdown.Menu>
                        <div className="d-flex  filter p-5" style={{width:"400px"}}>
                            <div className="m-1">
                                <p className="font-weight-bold small text-center ">MEALS</p>
                                <ButtonGroup vertical >
                                    <Button variant={this.state.accept_male?"success":"light"} border="dark" name="accept_male" value={this.state.accept_male} onClick={this.handleFilter}>Males</Button>
                                    <Button variant={this.state.accept_female?"success":"light"} border="secondary" name="accept_female" value={this.state.accept_female} onClick={this.handleFilter}>Females</Button>
                                    <Button variant={this.state.accept_students?"success":"light"} border="secondary" name="accept_students" value={this.state.accept_students}  onClick={this.handleFilter}>students</Button>
                                </ButtonGroup>
                            </div>
                            <div className="m-1">
                                <p className="font-weight-bold small text-center ">HOST WELCOMES</p>
                                <ButtonGroup vertical className="bg-secondary">
                                    <Button variant={this.state.meals_provided?"success":"light"} border="dark" name="meals_provided" value={this.state.meals_provided} onClick={this.handleFilter}>Meals Provided</Button>
                                    <Button variant={this.state.self_catering?"success":"light"} border="secondary" value={this.state.self_catering} name="self_catering" onClick={this.handleFilter}>Use Kitchen</Button>
                                </ButtonGroup>
                            </div>
                            </div>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>                        


             </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    data: state.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetch: (n) => dispatch(fetchData(n))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
