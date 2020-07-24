import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal,Button,FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {Nav,NavDropdown} from 'react-bootstrap';

export class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      show :false
    }
  }

  handleClick = ()=>{
    this.setState({
      show:!this.state.show
    })
  }
  render(){


    return(
      <React.Fragment>
        <Nav >
        <NavDropdown title="Login" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.3" onClick = {this.handleClick} >Host Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" onClick = {this.handleClick}>Guest Login</NavDropdown.Item>
          </NavDropdown> 
        </Nav>
          <Modal show={this.state.show}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title onClick={this.handleClick}>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Email:</label>
                  <input type="email" class="form-control" id="recipient-name"/>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Password:</label>
                  <input type="password" class="form-control" id="recipient-name"/>
                </div>
                
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.handleClick} variant="secondary">Close</Button>
              <Button variant="primary">Login</Button>
            </Modal.Footer>
          </Modal.Dialog>
          </Modal>
    </React.Fragment>

      )
      }

  }

  const mapStateToProps = (state) => {
    return {
      // status:state.auth.status
    }
  }

  const mapDispatchToProps = dispatch => {
    console.log("dispatch called");
    return {
      // auth_success: () => dispatch(auth_success())
      
    };
  };



  export default connect(mapStateToProps, mapDispatchToProps)(Login)



  