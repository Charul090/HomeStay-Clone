import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal,Button,FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {Nav,NavDropdown} from 'react-bootstrap';

export class Register extends Component {
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
    
        const {auth_success} = this.props
    
        return(
          <React.Fragment>
            <Nav >
            <NavDropdown title="SignUp" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.3" onClick = {this.handleClick} >Host Sign-up</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" onClick = {this.handleClick}>Guest Sign-up</NavDropdown.Item>
              </NavDropdown> 
            </Nav>
              <Modal show={this.state.show}>
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title onClick={this.handleClick}>SignUp</Modal.Title>
                </Modal.Header>
    
                <Modal.Body>
                  {/* <p>Modal body text goes here.</p> */}
                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Login with Facebook"
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Login with Google"
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </InputGroup>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">FirstName:</label>
                      <input type="text" class="form-control" id="recipient-name"/>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">LastName:</label>
                      <input type="text" class="form-control" id="recipient-name"/>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Email:</label>
                      <input type="email" class="form-control" id="recipient-name"/>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Password:</label>
                      <input type="password" class="form-control" id="recipient-name"/>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Mobile:</label>
                      <input type="text" class="form-control" id="recipient-name"/>
                    </div>
    
                </Modal.Body>
    
                <Modal.Footer>
                  <Button onClick={this.handleClick} variant="secondary">Close</Button>
                  <Button variant="primary">Submit</Button>
                </Modal.Footer>
              </Modal.Dialog>
              </Modal>
      </React.Fragment>
    
          )
          }
    
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

