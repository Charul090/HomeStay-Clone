import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal,Button, ButtonGroup,Dropdown} from 'react-bootstrap'
import  './Filter.css'

export class Filter extends Component {

    constructor(props){
        super(props)
        this.state={
          show :false,
          meals :false,
          males:"",
          females:"",
          students:"",
          useKitchen:""

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

    render() {
        
        console.log(this.state);
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
                                    <Button variant={this.state.males?"success":"light"} border="dark" name="males" value={this.state.males} onClick={this.handleFilter}>Males</Button>
                                    <Button variant={this.state.females?"success":"light"} border="secondary" name="females" value={this.state.females} onClick={this.handleFilter}>Females</Button>
                                    <Button variant={this.state.students?"success":"light"} border="secondary" name="students" value={this.state.students}  onClick={this.handleFilter}>students</Button>
                                </ButtonGroup>
                            </div>
                            <div className="m-1">
                                <p className="font-weight-bold small text-center ">HOST WELCOMES</p>
                                <ButtonGroup vertical className="bg-secondary">
                                    <Button variant={this.state.meals?"success":"light"} border="dark" name="meals" value={this.state.meals} onClick={this.handleFilter}>Meals Provided</Button>
                                    <Button variant={this.state.useKitchen?"success":"light"} border="secondary" value={this.state.useKitchen} name="useKitchen" onClick={this.handleFilter}>Use Kitchen</Button>
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
